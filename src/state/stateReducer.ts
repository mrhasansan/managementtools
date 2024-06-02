import { dataTasks } from "../data/tasks";
import { State, Action } from "./RootProvider";

export const initialState: State = {
  tasks:
    JSON.parse(localStorage.getItem("tasks") || "[]").map((task: any) => ({
      ...task,
      dueDate: new Date(task.dueDate),
      createdAt: new Date(task.createdAt),
    })) || dataTasks,
};

export function stateReducer(state: State, action: Action) {
  switch (action.type) {
    case "add": {
      const newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      localStorage.setItem("tasks", JSON.stringify(newState.tasks));
      return newState;
    }
    case "delete": {
      const newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
      localStorage.setItem("tasks", JSON.stringify(newState.tasks));
      return newState;
    }
    case "update": {
      const newState = {
        ...state,
        task: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
      localStorage.setItem("tasks", JSON.stringify(newState.tasks));
      return newState;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
