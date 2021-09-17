import { Input, Form, Submit } from "../styles/styled-comp.js";
import { validateInput } from "../../../utils/validationHelpers";

interface stateProp {
  email: string;
  password: string;
  onHandleInputChange: (p: object) => void;
  onSubmitFormHandler: (p: object) => void;
  userLang: any;
}

export default function loginUserForm({
  email,
  password,
  onHandleInputChange,
  onSubmitFormHandler,
  userLang,
}: stateProp) {
  return (
    <Form onSubmit={onSubmitFormHandler}>
      <Input
        type="email"
        value={validateInput(email)}
        placeholder={userLang.form.loginForm.placeholderEmail}
        title={userLang.form.title}
        name="email"
        onChange={onHandleInputChange}
      />
      <Input
        type="password"
        value={validateInput(password)}
        placeholder={userLang.form.placeholderPassword}
        title={userLang.form.title}
        name="password"
        onChange={onHandleInputChange}
      />

      <Submit type="submit"> {userLang.form.login} </Submit>
    </Form>
  );
}
