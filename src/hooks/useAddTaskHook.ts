import { useContext } from "react";
import { DispatchContext, StateContext } from "../state/RootProvider";
import { Task } from "../data/tasks";

export function useAddTaskHook() {
  const dispatchAction = useContext(DispatchContext);
  const state = useContext(StateContext);

  return (title: string, description: string, status: string, dueDate: Date) => {
    const nextId = state.tasks.length ? Math.max(...state.tasks.map((task) => task.id)) + 1 : 1;

    const newTask: Task = {
      id: nextId,
      title,
      description,
      status,
      createdAt: new Date(),
      dueDate,
    };

    console.log(`Dispatching Add Task - ID: ${newTask}, Title: ${title}, Description: ${description}, Status: ${status}, DueDate: ${dueDate}`);

    dispatchAction({
      type: "add",
      payload: newTask,
    });
  };
}
