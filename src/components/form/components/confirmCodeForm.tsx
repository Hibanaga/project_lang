import { Form, Input, Submit } from "../styles/styled-comp";

interface stateProp {
  codeConfirm: string;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
}

export default function confirmCodeForm({
  codeConfirm,
  onHandleInputChange,
  onSubmitFormHandler,
}: stateProp) {
  return (
    <Form onSubmit={onSubmitFormHandler}>
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
