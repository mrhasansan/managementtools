import { Form, Link, useLoaderData } from "react-router-dom";
import { getTasks } from "../storage/tasks";
import { TaskItem } from "./TaskItem";

export async function loader() {
  const tasks = await getTasks();
  return { tasks };
}
export function TasksRoute() {
  const { tasks } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <div>
      <Form method="post">
        <h1>Form Add Task</h1>
      </Form>
      <div>
        {!tasks || (tasks.length <= 0 && <p> No task Found</p>)}
        {tasks.length > 0 && (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Link to={`tasks/${task.id}`} />
                <TaskItem task={task} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
