import { useState } from "react";
import { type Task } from "../data/tasks";
import { useDeleteTodohook } from "../hooks/useDeleteTaskHook";
import { useUpdateTaskHook } from "../hooks/useUpdateTaskHook";

export function TaskItem({ task }: { task: Task }) {
  const deleteTask = useDeleteTodohook();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const updateTask = useUpdateTaskHook();
  let taskContent;

  const handleChange = (field: keyof Task, value: string | boolean) => {
    setEditedTask((prevTask) => ({ ...prevTask, [field]: value }));
  };
  const handleSave = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };
  if (isEditing) {
    taskContent = (
      <div>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={editedTask.title} className="border p-2" onChange={(e) => handleChange("title", e.target.value)} />
          <label htmlFor="description">Description</label>
          <input id="description" name="description" value={editedTask.description} className="border p-2" onChange={(e) => handleChange("description", e.target.value)} />
        </div>

        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Save
        </button>
      </div>
    );
  } else {
    taskContent = (
      <div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">{task.title}</span>
          <p className="text-sm text-gray-700">{task.description}</p>
          <p className="text-xs text-gray-500">Due date: {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>
        <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Edit{" "}
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow mb-3">
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{task.title}</span>
        <p className="text-sm text-gray-700">{task.description}</p>
        <p className="text-xs text-gray-500">Due date: {new Date(task.dueDate).toLocaleDateString()}</p>
      </div>
      <h1>{taskContent}</h1>

      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Edit</button>
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white py-2 px-4 rounded">
          Remove
        </button>
      </div>
    </div>
  );
}

// function Task({ task }: { task: TaskType }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const updateTask = useUpdateTaskHook();
//   let taskContent;
//   if (isEditing) {
//     taskContent = (
//       <div>
//         <h1>lagi editing</h1>
//         <input />
//         <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
//           Save
//         </button>
//       </div>
//     );
//   } else {
//     taskContent = (
//       <div>
//         <h1>sudah edit</h1>
//         <button onClick={() => setIsEditing(true)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
//           Edit{" "}
//         </button>
//       </div>
//     );
//   }
// }
