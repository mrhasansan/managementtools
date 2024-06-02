import { type Task } from "../data/tasks";
import { useDeleteTodohook } from "../hooks/useDeleteTaskHook";

export function TaskItem({ task }: { task: Task }) {
  const deleteTask = useDeleteTodohook();

  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow mb-3">
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{task.title}</span>
        <p className="text-sm text-gray-700">{task.description}</p>
        <p className="text-xs text-gray-500">Due date: {new Date(task.dueDate).toLocaleDateString()}</p>
      </div>

      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Edit</button>
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white py-2 px-4 rounded">
          Remove
        </button>
      </div>
    </div>
  );
}
