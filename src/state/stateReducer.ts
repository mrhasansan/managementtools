import { dataTasks } from "../data/tasks";
import { State, Action } from "./RootProvider";

export const initialState: State = {
  tasks: dataTasks,
};

export function stateReducer(state: State, action: Action) {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case "delete": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    case "update": {
      return {
        ...state,
        task: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
