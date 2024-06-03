import { useState } from "react";
import { useAddTaskHook } from "../hooks/useAddTaskHook";
import { Button, Modal } from "flowbite-react";

export function AddTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addTask = useAddTaskHook();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const submitNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString() || "untitled";
    const description = formData.get("description")?.toString() || "";
    const status = formData.get("status")?.toString() || "";
    const dueDateString = formData.get("dueDate")?.toString() || "";
    const dueDate = dueDateString ? new Date(dueDateString) : new Date();

    addTask(title, description, status, dueDate);
    event.currentTarget.reset();
    closeModal();
  };
  return (
    <div>
      <Button color="gray" onClick={openModal}>
        Add Task
      </Button>
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>Add New Task</Modal.Header>
        <Modal.Body>
          <form method="post" onSubmit={submitNewTask}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Task name
              </label>
              <input type="text" id="title" name="title" placeholder="Task name" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea id="description" name="description" placeholder="Description" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="dueDate" className="block text-gray-700 font-medium mb-2">
                Due date
              </label>
              <input type="date" id="dueDate" name="dueDate" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <select id="status" name="status" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required defaultValue="">
                <option disabled value="">
                  Select status
                </option>
                <option value="notstarted">Not started</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition-colors">
              Add Task
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
