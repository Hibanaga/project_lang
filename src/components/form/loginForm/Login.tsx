import React, { useReducer } from "react";
import LoginPresentation from "./LoginPresentation";
import { actions, initialState } from "../services/optionsReducer";
import "../styles/auth.scss";
import { useLocation } from "react-router";

function Login() {
  const location = useLocation();
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

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("/show_data", { signal: signal })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => {
        controller.abort();
      });
  };

  return (
    <LoginPresentation
      pathLocation={location.pathname}
      state={state}
      onHandleInputChange={handleInputChange}
      onSubmitFormHandler={submitFormHandler}
    />
  );
}

export default Login;
