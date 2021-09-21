import { useContext, useState } from "react";
import RegisterPresentation from "./RegisterPresentation";
import { Redirect } from "react-router-dom";
import { confirm } from "../../../router/routes";
import { ContextForm } from "../ContextForm";

export default function Register() {
  const [state, dispatch] = useContext(ContextForm);
  const [isAlreadyExist, setAlreadyExist] = useState("not exist");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === "email") {
      dispatch({ type: "change_email__register", payload: value });
    }

    if (name === "password") {
      dispatch({ type: "change_password__register", payload: value });
    }

    if (name === "nickname") {
      dispatch({ type: "change_nickname__register", payload: value });
    }
  };

  const submitFormHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("/register_user", {
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => setAlreadyExist(data.isExist))
      .finally(() => {
        controller.abort();
      });
  };

  const { register } = state;

  return (
    <>
      {isAlreadyExist === "success added" && <Redirect to={confirm} />}
      <RegisterPresentation
        state={register}
        isAlreadyExist={isAlreadyExist}
        onHandleInputChange={handleInputChange}
        onSubmitFormHandler={submitFormHandler}
      />
    </>
  );
}
