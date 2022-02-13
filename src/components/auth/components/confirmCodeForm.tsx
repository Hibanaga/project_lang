import { Form, Input, Submit } from "../styles/styled-comp";

interface stateProp {
  codeConfirm: string;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
  t: (prop: any) => string;
  message: string;
}

export default function confirmCodeForm({
  codeConfirm,
  onHandleInputChange,
  onSubmitFormHandler,
  t,
  message,
}: stateProp) {
  return (
    <Form onSubmit={onSubmitFormHandler}>
      {message === "error" && (
        <span className="message">{t("confirm.notTrueCode")}</span>
      )}

      <Input
        type="number"
        placeholder={t("confirm.placeholderConfirm")}
        value={codeConfirm}
        onChange={onHandleInputChange}
      />
      <Submit type="submit">{t("confirm.submitCode")}</Submit>
    </Form>
  );
}
