import { useContext, useState } from "react";
import { ContextForm } from "../ContextForm";
import ConfirmPresentation from "./ConfirmPresentation";

export default function Confirm() {
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
      .then((data) => setMessage(data.message))
      .finally(() => {
        controller.abort();
      });
  };

  return (
    <ConfirmPresentation
      message={message}
      codeConfirm={codeConfirm}
      onHandleInputChange={handleInputChange}
      onSubmitFormHandler={submitFormHandler}
    />
  );
}
