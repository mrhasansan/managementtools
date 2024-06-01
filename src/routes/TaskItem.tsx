import { type Task } from "../data/tasks";

export function TaskItem({ task }: { task: Task }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-2">
        <input type="checkbox" className="form-checkbox" />
        <div>
          <span className="text-lg font-semibold">{task.title}</span>
          <button className="ml-4 text-blue-400">Edit</button>
        </div>
        <button className="text-red-400">DELETE</button>
      </div>
      <div className="text-sm text-gray-400">
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
      </div>
    </div>
  );
}