import { type Task } from "../data/tasks";

export function TaskItem({ task }: { task: Task }) {
  return (
    <div>
      <ul>
        <li>{task.title}</li>
        <p>Status : {task.status}</p>
        <p>Description : {task.description}</p>
      </ul>
    </div>
  );
}
