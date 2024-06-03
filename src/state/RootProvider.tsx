import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Task } from "../data/tasks";
import { getInitialState, taskReducer } from "./stateReducer";

export type State = {
  tasks: Task[];
};

export type Action = {
  type: string;
  payload: any;
};
const defaultState: State = {
  tasks: [],
};

export const StateContext = createContext<State>(defaultState);
export const DispatchContext = createContext<Dispatch<Action>>(() => null);

type RootProps = {
  children: ReactNode;
};

export function RootProvider({ children }: RootProps) {
  const [state, dispatch] = useReducer(taskReducer, getInitialState());

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
}
