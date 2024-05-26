import React, { useState } from "react";
import { type Todo, dataTodos } from "../data/todos";
import { TodoItem } from "./TodoItems";

export default function Form() {
  const [tasks, setTask] = useState(dataTodos);
  const submitNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newTask: Todo = {
      id: tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
      title: formData.get("title")?.toString() || "untitled",
      description: formData.get("description")?.toString() || "",
      status: formData.get("status")?.toString() || "",
      createdAt: new Date(),
      dueDate: new Date(),
    };

    setTask([...tasks, newTask]);
    console.log(tasks);
  };
  return (
    <div className="  bg-white  rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Task </h1>
      <form method="post" onSubmit={submitNewTask}>
        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input type="text" id="title" name="title" placeholder="Task name" required className="grow" />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="input input-bordered flex items-center gap-2">
            Description
            <input type="text" id="description" name="description" placeholder="description..." required className="grow" />
          </label>
        </div>
        <div className="mb-4">
          <select id="status" name="status" required className="select select-bordered w-full " defaultValue="">
            <option disabled value="">
              select status
            </option>
            <option value="notstarted">Not started</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
            <option value="cancel">Cancel</option>
          </select>
        </div>
        <button type="submit" className="btn btn-block ">
          Add
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Task List</h2>
        {tasks.map((task) => (
          <TodoItem key={task.id} todo={task} />
        ))}
      </div>
    </div>
  );
}
