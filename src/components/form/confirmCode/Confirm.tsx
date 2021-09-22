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

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("/verify_user", {
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: codeConfirm,
        email: register.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        addDefaultUserData(data.clientID);

        localforage.setItem("loginID", data.clientID);
        setFirstAuthHandler(true);
      })
      .finally(() => {
        controller.abort();
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
