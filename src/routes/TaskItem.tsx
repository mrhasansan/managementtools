import { FloatingLabel } from "flowbite-react";

import { useDeleteTodohook } from "../hooks/useDeleteTaskHook";
import { useUpdateTaskHook } from "../hooks/useUpdateTaskHook";
import { HiTrash } from "react-icons/hi";

import { useState } from "react";
import { type Task } from "../data/tasks";

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
        <div>
          <FloatingLabel variant="filled" label="title" sizing="md" value={editedTask.title} onChange={(e) => handleChange("title", e.target.value)} />
          <FloatingLabel variant="filled" label="description" sizing="md" value={editedTask.description} onChange={(e) => handleChange("description", e.target.value)} />
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
              Status
            </label>
            <select id="status" name="status" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={editedTask.status} onChange={(e) => handleChange("status", e.target.value)}>
              <option value="not started">Not started</option>
              <option value="in progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
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
          <span className="font-medium text-gray-900">{editedTask.title}</span>
          <p className="text-sm text-gray-700">{editedTask.description}</p>
          <p className="text-sm text-gray-700">{editedTask.status}</p>
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
      <h1>{taskContent}</h1>

      <div className="flex space-x-4">
        <HiTrash onClick={() => deleteTask(task.id)} size={36} color="red" />
      </div>
    </div>
  );
}
