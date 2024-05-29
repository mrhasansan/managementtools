import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  dueDate: Date;
  [key: string]: any; // To allow additional properties
}

async function getTasks(query?: string): Promise<Task[]> {
  await fakeNetwork(`getTasks:${query}`);
  let tasks: Task[] = (await localforage.getItem<Task[]>("tasks")) || [];
  if (query) {
    tasks = matchSorter(tasks, query, { keys: ["title", "description"] });
  }
  return tasks.sort(sortBy("dueDate", "createdAt"));
}

async function createTask(title: string, description: string, status: string, dueDate: Date): Promise<Task> {
  await fakeNetwork();
  const id = Math.floor(Math.random() * 1000000); // Example ID generation, you can use a better method if needed
  const task: Task = { id, title, description, status, createdAt: new Date(), dueDate };
  const tasks = await getTasks();
  tasks.unshift(task);
  await set(tasks);
  return task;
}

async function getTask(id: number): Promise<Task | null> {
  await fakeNetwork(`task:${id}`);
  const tasks: Task[] = (await localforage.getItem<Task[]>("tasks")) || [];
  const task = tasks.find((task) => task.id === id);
  return task ?? null;
}

async function updateTask(id: number, updates: Partial<Task>): Promise<Task> {
  await fakeNetwork();
  const tasks: Task[] = (await localforage.getItem<Task[]>("tasks")) || [];
  const task = tasks.find((task) => task.id === id);
  if (!task) throw new Error(`No task found for ${id}`);
  Object.assign(task, updates);
  await set(tasks);
  return task;
}

async function deleteTask(id: number): Promise<boolean> {
  const tasks: Task[] = (await localforage.getItem<Task[]>("tasks")) || [];
  const index = tasks.findIndex((task) => task.id === id);
  if (index > -1) {
    tasks.splice(index, 1);
    await set(tasks);
    return true;
  }
  return false;
}

function set(tasks: Task[]): Promise<Task[]> {
  return localforage.setItem("tasks", tasks);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: { [key: string]: boolean } = {};

async function fakeNetwork(key?: string): Promise<void> {
  if (!key) {
    fakeCache = {};
  }

  if (key && fakeCache[key]) {
    return;
  }
  if (key) {
    fakeCache[key] = true;
  }

  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

export { getTasks, createTask, getTask, updateTask, deleteTask };
