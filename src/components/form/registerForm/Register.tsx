import { useReducer, useState } from "react";
import { actions, initialState } from "../services/optionsReducer";
import RegisterPresentation from "./RegisterPresentation";
import { Redirect } from "react-router-dom";
import { confirm } from "../../../router/routes";

export default function Register() {
  const [state, dispatch] = useReducer(actions, initialState);
  const [isAlreadyExist, setAlreadyExist] = useState("not exist");

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

  return (
    <>
      {isAlreadyExist === "success added" && <Redirect to={confirm} />}
      <RegisterPresentation
        state={state}
        isAlreadyExist={isAlreadyExist}
        onHandleInputChange={handleInputChange}
        onSubmitFormHandler={submitFormHandler}
      />
    </>
  );
}
