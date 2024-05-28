import { useContext } from "react";
import { DispatchContext } from "../state/RootProvider";
import { Task } from "../data/tasks";

export function useUpdateTaskHook() {
  const dispatchAction = useContext(DispatchContext);
  return (updatedTask: Task) => {
    dispatchAction({
      type: "update",
      payload: updatedTask,
    });
  };
}
