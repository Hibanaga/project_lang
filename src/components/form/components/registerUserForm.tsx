import { Form, Input, Submit } from "../styles/styled-comp";
import { validateInput } from "../../../utils/validationHelpers";

import { withTranslation } from "react-i18next";

interface typeProp {
  email: string;
  password: string;
  nickname: string;
}

interface stateProp {
  onHandleInputChange: (p: any) => void;
  t: any;
  onSubmitFormHandler: (p: any) => void;
  state: typeProp;
  isAlreadyExist: string;
}

function registerUserForm({
  state,
  t,
  onHandleInputChange,
  onSubmitFormHandler,
  isAlreadyExist,
}: stateProp) {
  const { email, password, nickname } = state;
  return (
    <Form onSubmit={onSubmitFormHandler}>
      {isAlreadyExist === "exist" && (
        <span className="hidden_text">
          {t("form.registerForm.errorCreateUser")}
        </span>
      )}
      <Input
        type="text"
        placeholder={t("form.registerForm.placeholderNickname")}
        name="nickname"
        value={validateInput(nickname)}
        onChange={onHandleInputChange}
      />
      <Input
        type="email"
        placeholder={t("form.registerForm.placeholderEmail")}
        name="email"
        value={validateInput(email)}
        onChange={onHandleInputChange}
      />
      <Input
        type="password"
        placeholder={t("form.placeholderPassword")}
        value={validateInput(password)}
        name="password"
        onChange={onHandleInputChange}
      />
      <Submit>{t("form.registerForm.submit")}</Submit>
    </Form>
  );
}

export default withTranslation()(registerUserForm);
