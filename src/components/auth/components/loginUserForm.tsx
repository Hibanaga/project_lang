import { Input, Form, Submit } from "../styles/styled-comp.js";
import { validateInput } from "../../../utils/validationHelpers";

import { withTranslation } from "react-i18next";

interface stateProp {
  email: string;
  password: string;
  onHandleInputChange: (p: object) => void;
  onSubmitFormHandler: (p: object) => void;
  t: any;
}

function loginUserForm({
  email,
  password,
  onHandleInputChange,
  onSubmitFormHandler,
  t,
}: stateProp) {
  // validateInput(email)
  return (
    <Form onSubmit={onSubmitFormHandler}>
      <Input
        type="text"
        value={validateInput(email)}
        placeholder={t("form.loginForm.placeholderEmail")}
        title={t("form.title")}
        name="email"
        onChange={onHandleInputChange}
      />
      <Input
        type="password"
        value={validateInput(password)}
        placeholder={t("form.placeholderPassword")}
        title={t("form.title")}
        name="password"
        onChange={onHandleInputChange}
      />

      <Submit type="submit"> {t("form.login")} </Submit>
    </Form>
  );
}

export default withTranslation()(loginUserForm);
