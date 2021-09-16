import React, { useReducer } from "react";
import LoginPresentation from "./LoginPresentation";
import { actions, initialState } from "../services/optionsReducer";
import "../styles/auth.scss";

interface stateProp {
  onToggleLoginPage: () => void;
  isLoginPage: boolean;
}

function Login({ onToggleLoginPage, isLoginPage }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === "email") {
      dispatch({ type: "change_email", payload: value });
    }

    if (name === "password") {
      dispatch({ type: "change_password", payload: value });
    }
  };

  const submitFormHandler = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <LoginPresentation
      state={state}
      isLoginPage={isLoginPage}
      onHandleInputChange={handleInputChange}
      onSubmitFormHandler={submitFormHandler}
      onToggleLoginPage={onToggleLoginPage}
    />
  );
}

export default Login;
