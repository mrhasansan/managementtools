import { useContext } from "react";
import { DispatchContext } from "../state/RootProvider";

export function useDeleteTodohook() {
  const dispatchAction = useContext(DispatchContext);

  return (taskId: number) =>
    dispatchAction({
      type: "delete",
      payload: {
        id: taskId,
      },
    });
}
