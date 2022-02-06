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
import instance from "../../../service/AppService";


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

    console.log(login);

    instance.getClientID(login.email).then((data) => {
       instance.login({ ...login , ...{clientID:  data.clientID}}).then((data) => {
         addDefaultUserData(data.clientID);
         console.log(data);
         localforage.setItem("loginID", data.clientID);
         setFirstAuthHandler(true);
       });
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
