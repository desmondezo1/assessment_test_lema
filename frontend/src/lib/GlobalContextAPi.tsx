import { ActionType, IState } from "@/types";
import { createContext, useReducer, Dispatch } from "react";
import { reducer } from "./reducer";

export const GlobalStateContext = createContext<IState | null>(null);
export const GlobalDispatchContext = createContext<Dispatch<ActionType> | null>(
  null
);

const initialState: IState = {
  posts: [],
  users: [],
  loading: false,
  error: undefined,
};
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
