import { useRef } from "react";
import { AddTask } from "./AddTask";
import { AiFillPlusCircle } from "react-icons/ai";

export function Sidebar() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    } else {
      console.error("Modal reference is not set");
    }
  };

  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <nav className="space-y-2">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={openModal}>
          <AiFillPlusCircle color="red" size={24} /> Add Task Modal
        </button>
        <dialog id="my_modal_2" className="modal" ref={modalRef}>
          <div className="modal-box">
            <AddTask />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          My Day
        </a>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          Important
        </a>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          Planned
        </a>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          Assigned to me
        </a>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          Tasks
        </a>
        <button className="block p-2 rounded bg-blue-500 text-white">New List</button>
      </nav>
    </div>
  );
}
