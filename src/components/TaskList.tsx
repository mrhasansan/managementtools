import { TaskItem } from "./TaskItem";
import { useContext, useEffect } from "react";
import { StateContext } from "../state/RootProvider";
import { Link, useSearchParams } from "react-router-dom";

export function TaskList() {
  const { tasks } = useContext(StateContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const numberParams = searchParams.get("n");
  const number = numberParams ? parseInt(numberParams, 10) : 3;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tasks</h2>

      <ul className="space-y-3 ">
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>
              <TaskItem task={task} />
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/tasks/${number}`}>task number :{number} </Link>
      <input type="number" value={number} onChange={(e) => setSearchParams({ n: e.target.value })} />
    </div>
  );
}
