import { Input, Form, Submit } from "../styles/styled-comp.js";
import { validateInput } from "../../../utils/validationHelpers";

interface stateProp {
  email: string;
  password: string;
  onHandleInputChange: (p: object) => void;
  onSubmitFormHandler: (p: object) => void;
  loginLang: any;
}

export default function loginUserForm({
  email,
  password,
  onHandleInputChange,
  onSubmitFormHandler,
  loginLang,
}: stateProp) {
  return (
    <Form onSubmit={onSubmitFormHandler}>
      <Input
        type="email"
        value={validateInput(email)}
        placeholder={loginLang.loginForm.placeholderEmail}
        title={loginLang.title}
        name="email"
        onChange={onHandleInputChange}
      />
      <Input
        type="password"
        value={validateInput(password)}
        placeholder={loginLang.placeholderPassword}
        title={loginLang.title}
        name="password"
        onChange={onHandleInputChange}
      />

      <Submit type="submit"> {loginLang.login} </Submit>
    </Form>
  );
}
