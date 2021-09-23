import { createContext, useReducer } from "react";
import { initialState, actions } from "./services/optionsReducer";

export const ContextForm = createContext(initialState);

const initState = {
  login: initialState,
  register: initialState,
};

export const ContextFormProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(actions, initState);

  return (
    <ContextForm.Provider value={[state, dispatch]}>
      {children}
    </ContextForm.Provider>
  );
};
