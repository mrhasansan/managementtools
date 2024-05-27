import { TaskItem } from "./TaskItem";
import { type Task } from "../data/tasks";

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="w-3/4 p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
