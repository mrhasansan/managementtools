import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getTask } from "../storage/tasks";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = Number(params.taskId);
  const task = await getTask(id);
  return { task };
}

export function TaskRoute() {
  const { task } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!task) {
    return (
      <div>
        <p> Task not found.</p>
      </div>
    );
  }
  return (
    <div>
      <h1>{task.title}</h1>

      <p> Status :{task.status}</p>
    </div>
  );
}
