import { AddTask } from "../components/AddTask";
import { TaskList } from "../components/TaskList";

export function TasksRoute() {
  return (
    <div>
      <h1>halaman task list </h1>
      <AddTask />
      <TaskList />
    </div>
  );
}
