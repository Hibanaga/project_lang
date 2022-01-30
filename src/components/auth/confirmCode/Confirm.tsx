import { useContext, useState } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router";
import { ContextForm } from "../ContextForm";
import ConfirmPresentation from "./ConfirmPresentation";
import {
  setAuthClientID,
  setFirstAuth,
} from "../../../redux/userInfo/userActions";
import localforage from "localforage";
import instance from "../../../service/AppService"

interface stateProp {
  addDefaultUserData: (p: object) => void;
  setFirstAuthHandler: (p: boolean) => void;
}

function Confirm({ addDefaultUserData, setFirstAuthHandler }: stateProp) {
  const [codeConfirm, setConfirmCode] = useState("");
  const [message, setMessage] = useState("loading");
  const [state] = useContext(ContextForm);
  const { register } = state;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmCode(event.target.value);

  const submitFormHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    instance.verifyCode(codeConfirm, register.email).then((data) => {
      data !== undefined && setMessage("success");
      setMessage(data.message);
      addDefaultUserData(data.cliendID);
      localforage.setItem("loginID", data.clientID);
      setFirstAuthHandler(true);
    });
  };

  return (
    <>
      <ConfirmPresentation
        message={message}
        codeConfirm={codeConfirm}
        onHandleInputChange={handleInputChange}
        onSubmitFormHandler={submitFormHandler}
      />
    </>
  );
}

const mapDispatchToProps = {
  addDefaultUserData: setAuthClientID,
  setFirstAuthHandler: setFirstAuth,
};

export default connect(null, mapDispatchToProps)(Confirm);
