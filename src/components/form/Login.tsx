import React, { useReducer } from "react";
import LoginPresentation from "./LoginPresentation";
import { actions, initialState } from "./services/optionsReducer";
import "./styles/auth.scss";

function Login() {
  const [state, dispatch] = useReducer(actions, initialState);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === "login") {
      dispatch({ type: "change_login", payload: value });
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
      onHandleInputChange={handleInputChange}
      onSubmitFormHandler={submitFormHandler}
    />
  );
}

export default Login;
