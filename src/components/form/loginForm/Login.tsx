import React, { useContext } from "react";
import LoginPresentation from "./LoginPresentation";
import "../styles/auth.scss";
import { useLocation } from "react-router";
import { ContextForm } from "../ContextForm";

function Login() {
  const location = useLocation();
  const [state, dispatch] = useContext(ContextForm);

  const { login } = state;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === "email") {
      dispatch({ type: "change_email__login", payload: value });
    }

    if (name === "password") {
      dispatch({ type: "change_password__login", payload: value });
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

  console.log(state);

  return (
    <LoginPresentation
      pathLocation={location.pathname}
      state={login}
      onHandleInputChange={handleInputChange}
      onSubmitFormHandler={submitFormHandler}
    />
  );
}

export default Login;
