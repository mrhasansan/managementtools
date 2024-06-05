import { TaskItem } from "./TaskItem";
import { useContext, useEffect } from "react";
import { StateContext } from "../state/RootProvider";

export function PlanedTasks() {
  const { tasks } = useContext(StateContext);

  const filteredTasks = tasks.filter((task) => {
    const status = task.status.toLowerCase();
    return status === "not started";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className=" bg-white rounded-lg p-6 my-4">
      <h1 className="text-2xl font-bold mb-6">Planed Tasks</h1>
      <ul className="space-y-3 ">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
