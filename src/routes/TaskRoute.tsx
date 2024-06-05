import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

export function TasksRoute() {
  return (
    <div>
      <h1>halaman task list </h1>
      <AddTask />
      <TaskList />
    </div>
  );
}
