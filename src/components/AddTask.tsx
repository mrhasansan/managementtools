import { useAddTaskHook } from "../hooks/useAddTaskHook";

export function AddTask() {
  const addTask = useAddTaskHook();
  const submitNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get("title")?.toString() || "untitled";
    const description = formData.get("description")?.toString() || "";
    const status = formData.get("status")?.toString() || "";
    const dueDate = new Date();

    addTask(title, description, status, dueDate);
    console.log(`title : ${title}`);
  };
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full">
      <h1 className="text-2xl font-bold mb-6 text-white">Add Task</h1>
      <form method="post" onSubmit={submitNewTask} className="space-y-4">
        <div className="flex items-center mb-2">
          <label htmlFor="title" className="sr-only">
            Task name
          </label>

          <input type="text" id="title" name="title" placeholder="Task name" required className="bg-gray-800 text-white w-full p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500" />
          <span className="ml-auto text-red-400">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="description" className="block mb-1">
              Description
            </label>

            <textarea id="description" name="description" placeholder="Description" required className="bg-gray-800 h-64 text-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500" />
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="dueDate" className="block mb-1">
                Due date
              </label>

              <input type="date" id="dueDate" name="dueDate" className="bg-gray-800 text-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="status" className="block mb-1">
                Status
              </label>

              <select id="status" name="status" required className="bg-gray-800 text-white w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500" defaultValue="">
                <option disabled value="">
                  select status
                </option>
                <option value="notstarted">Not started</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
                <option value="cancel">Cancel</option>
              </select>
            </div>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
