import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import { type Task, dataTasks } from "../data/tasks";

async function initializeData() {
  const tasks = await localforage.getItem<Task[]>("tasks");
  if (!tasks || tasks.length === 0) {
    await localforage.setItem("task", dataTasks);
  }
}

async function getTasks(query?: string): Promise<Task[]> {
  await initializeData();
  await fakeNetwork(`getTasks:${query}`);
  let tasks: Task[] = (await localforage.getItem<Task[]>("tasks")) || [];
  if (query) {
    tasks = matchSorter(tasks, query, { keys: ["title", "description"] });
  }
  return tasks.sort(sortBy("dueDate", "createdAt"));
}

async function createTask(formData: FormData): Promise<Task> {
  await fakeNetwork();
  // Example ID generation, you can use a better method if needed
  const newTask: Task = {
    id: Math.floor(Math.random() * (10_000_000 - 1 + 1) + 1), // 1 to 100
    title: String(formData.get("title")),
    description: String(formData.get("description")),
    status: String(formData.get("status")),
    timeStart: new Date("2000-01-01 06:00"),
    dueDate: new Date("2020-01-01 07:00"),
    createdAt: new Date("2020-01-01 07:00"),
  };

  const tasks = await getTasks();
  const newTasks = [...tasks, newTask];

  await set(newTasks);
  return newTask;
}

async function getTask(id: number) {
  await fakeNetwork(`task:${id}`);
  const tasks = (await localforage.getItem<Task[]>("tasks")) as Task[];
  const task = tasks.find((task) => task.id === id);
  return task ?? null;
}

async function updateTask(id: number, updates: Task) {
  await fakeNetwork(``);
  const tasks = (await localforage.getItem<Task[]>("tasks")) as Task[];
  const task = tasks.find((task) => task.id === id);
  if (!task) throw new Error(`No task found for ${id}`);
  Object.assign(task, updates);
  await set(tasks);
  return task;
}

async function deleteTask(id: number) {
  const tasks = (await localforage.getItem("tasks")) as Task[];
  const index = tasks.findIndex((task) => task.id === id);
  if (index > -1) {
    tasks.splice(index, 1);
    await set(tasks);
    return true;
  }
  return false;
}

function set(tasks: Task[]) {
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
