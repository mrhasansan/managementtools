import { useContext } from "react";
import { DispatchContext, StateContext } from "../state/RootProvider";
import { Task } from "../data/tasks";

export function useAddTaskHook() {
  const dispatchAction = useContext(DispatchContext);
  const state = useContext(StateContext);

  return (title: string, description: string, status: string, dueDate: Date) => {
    const nextId = state.tasks.length + 1;

    const newTask: Task = {
      id: nextId,
      title,
      description,
      status,
      createdAt: new Date(),
      dueDate,
    };

    dispatchAction({
      type: "add",
      payload: newTask,
    });
  };
}
