import { Form, Input, Submit } from "../styles/styled-comp";

interface stateProp {
  codeConfirm: string;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
  message: string;
}

export default function confirmCodeForm({
  codeConfirm,
  onHandleInputChange,
  onSubmitFormHandler,
  message,
}: stateProp) {
  return (
    <Form onSubmit={onSubmitFormHandler}>
      {message === "error" && <span className="message">Неправильный код</span>}

      <Input
        type="number"
        placeholder="введите полученный код"
        value={codeConfirm}
        onChange={onHandleInputChange}
      />
      <Submit type="submit">Подтвердить</Submit>
    </Form>
  );
}
