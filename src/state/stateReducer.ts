import { Task, dataTasks } from "../data/tasks";
import { State, Action } from "./RootProvider";

export function getInitialState() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];

  const initialState = {
    tasks: tasks.length ? tasks : dataTasks,
  };
  console.log(`Intial state :${initialState}`);
  return initialState;
}

export function taskReducer(state: State, action: Action) {
  switch (action.type) {
    case "add": {
      const newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      localStorage.setItem("tasks", JSON.stringify(newState.tasks));
      console.log(`Addi newState : ${newState}`);
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
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
      localStorage.setItem("tasks", JSON.stringify(newState.tasks));
      return newState;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
