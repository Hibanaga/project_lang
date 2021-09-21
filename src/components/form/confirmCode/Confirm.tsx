import { useState } from "react";
import ConfirmPresentation from "./ConfirmPresentation";

export default function Confirm() {
  const [codeConfirm, setConfirmCode] = useState("");

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
        email: "vladyslav.tykhoniuk.works@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => {
        controller.abort();
      });
  };

  return (
    <ConfirmPresentation
      codeConfirm={codeConfirm}
      onHandleInputChange={handleInputChange}
      onSubmitFormHandler={submitFormHandler}
    />
  );
}
