import { useAddTaskHook } from "../hooks/useAddTaskHook";

export function AddTask() {
  const addTask = useAddTaskHook();
  const submitNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get("title")?.toString() || "untitled";
    const description = formData.get("description")?.toString() || "";
    const status = formData.get("status")?.toString() || "";
    const createdAt = new Date();

    addTask(title, description, status, createdAt);
    console.log(`title : ${title}`);
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
    </div>
  );
}
