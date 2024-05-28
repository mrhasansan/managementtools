import { Task, dataTasks } from "../data/tasks";
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
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
