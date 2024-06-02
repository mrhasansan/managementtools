import { useContext, useEffect, useState } from "react";
import { useUpdateTaskHook } from "../hooks/useUpdateTaskHook";
import { Task } from "../data/tasks";
import { useParams } from "react-router-dom";
import { StateContext } from "../state/RootProvider";

export function EditTask() {
  const { taskId } = useParams<{ taskId: string }>();
  const { tasks } = useContext(StateContext);
  const updateTask = useUpdateTaskHook();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const taskIdNumber = Number(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskIdNumber);
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
      setDueDate(taskToEdit.dueDate.toISOString().split("T")[0]);
    } else {
      setTitle("");
      setDescription("");
      setStatus("");
      setDueDate("");
    }
  }, [taskId, tasks]);

  const submitEditTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get("title")?.toString() || "untitled";
    const description = formData.get("description")?.toString() || "";
    const status = formData.get("status")?.toString() || "not started";
    const dueDateValue = formData.get("dueDate")?.toString();
    const dueDate = dueDateValue ? new Date(dueDateValue) : new Date();

    if (editingTask) {
      updateTask({ ...editingTask, title, description, status, dueDate });
      setEditingTask(null);
    }

    event.currentTarget.reset();
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full">
      <h1 className="text-2xl font-bold mb-6 text-white">Edit Task</h1>
      <form method="post" onSubmit={submitEditTask} className="space-y-4">
        <div className="flex items-center mb-2">
          <label htmlFor="title" className="sr-only">
            Task name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Task name"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-800 text-white w-full p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <span className="ml-auto text-red-400">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="description" className="block mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-800 h-64 text-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="dueDate" className="block mb-1">
                Due date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="bg-gray-800 text-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="status" className="block mb-1">
                Status
              </label>
              <select id="status" name="status" required value={status} onChange={(e) => setStatus(e.target.value)} className="bg-gray-800 text-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500">
                <option value="not started">Not started</option>
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
                <option value="cancel">Cancel</option>
              </select>
            </div>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Update Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
