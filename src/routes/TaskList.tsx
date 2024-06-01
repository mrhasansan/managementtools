import { TaskItem } from "../routes/TaskItem";
import { getTasks } from "../storage/tasks";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const tasks = await getTasks();
  return { tasks };
}

export function TaskList() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!data || !data.tasks) {
    return <p>Loading...</p>;
  }
  const { tasks } = data;
  return (
    <div className="w-full p-4 ">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      {!tasks ||
        (tasks.length === 0 ? (
          <p>No Task found</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="my-4">
                <Link to={`/tasks/${task.id}`} />
                <TaskItem task={task} />
              </li>
            ))}
          </ul>
        ))}

      {!tasks || (tasks.length <= 0 && <p>No Task found</p>)}
    </div>
  );
}
