import { TaskItem } from "./TaskItem";
import { useContext } from "react";
import { StateContext } from "../state/RootProvider";

export function TaskList() {
  const state = useContext(StateContext);

  return (
    <div className="w-full p-4 ">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <ul className="space-y-4">
        {state.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
