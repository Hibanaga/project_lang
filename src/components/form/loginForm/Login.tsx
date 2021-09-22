import React, { useContext } from "react";
import LoginPresentation from "./LoginPresentation";
import "../styles/auth.scss";
import { useLocation } from "react-router";
import { ContextForm } from "../ContextForm";
import { connect } from "react-redux";
import {
  setAuthClientID,
  setFirstAuth,
} from "../../../redux/userInfo/userActions";
import localforage from "localforage";

interface stateProp {
  addDefaultUserData: (p: object) => void;
  setFirstAuthHandler: (p: boolean) => void;
}

function Login({ addDefaultUserData, setFirstAuthHandler }: stateProp) {
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

    fetch("/log_in", {
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        addDefaultUserData(data.clientID);

        localforage.setItem("loginID", data.clientID);
        setFirstAuthHandler(true);
      })
      .finally(() => {
        controller.abort();
      });
  };

  return (
    <LoginPresentation
      pathLocation={location.pathname}
      state={login}
      onHandleInputChange={handleInputChange}
      onSubmitFormHandler={submitFormHandler}
    />
  );
}

const mapDispatchToProps = {
  addDefaultUserData: setAuthClientID,
  setFirstAuthHandler: setFirstAuth,
};

export default connect(null, mapDispatchToProps)(Login);
