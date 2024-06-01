import { Form, ActionFunctionArgs, redirect } from "react-router-dom";
import { createTask, getTasks } from "../storage/tasks";

export async function loader() {
  const tasks = await getTasks();
  return { tasks };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const task = await createTask(formData);
  return redirect(`/tasks/${task.id}`);
}

export function FormTask() {
  return (
    <div>
      <Form method="post">
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
      </Form>
    </div>
  );
}
