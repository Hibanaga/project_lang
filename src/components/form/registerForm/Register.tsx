import { useReducer } from "react";
import { actions, initialState } from "../services/optionsReducer";
import RegisterPresentation from "./RegisterPresentation";

interface stateProp {
  onToggleRegisterPage: () => void;
}

export default function Register({ onToggleRegisterPage }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === "email") {
      dispatch({ type: "change_email", payload: value });
    }

    if (name === "password") {
      dispatch({ type: "change_password", payload: value });
    }

    if (name === "nickname") {
      dispatch({ type: "change_nickname", payload: value });
    }
  };

  return (
    <RegisterPresentation
      state={state}
      onHandleInputChange={handleInputChange}
      onToggleRegisterPage={onToggleRegisterPage}
    />
  );
}
