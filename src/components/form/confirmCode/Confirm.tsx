import { useState } from "react";
import ConfirmPresentation from "./ConfirmPresentation";

export default function Confirm() {
  const [codeConfirm, setConfirmCode] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmCode(event.target.value);

  const submitFormHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    console.log(codeConfirm);
  };

  return (
    <ConfirmPresentation
      codeConfirm={codeConfirm}
      onHandleInputChange={handleInputChange}
      onSubmitFormHandler={submitFormHandler}
    />
  );
}
