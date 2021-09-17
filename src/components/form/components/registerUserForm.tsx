import { Form, Input, Submit } from "../styles/styled-comp";
import { validateInput } from "../../../utils/validationHelpers";

interface typeProp {
  email: string;
  password: string;
  nickname: string;
}

interface stateProp {
  onHandleInputChange: (p: any) => void;
  registerLang: any;
  state: typeProp;
}

export default function registerUserForm({
  state,
  registerLang,
  onHandleInputChange,
}: stateProp) {
  const { email, password, nickname } = state;
  return (
    <Form>
      <Input
        type="text"
        placeholder={registerLang.registerForm.placeholderNickname}
        name="nickname"
        value={validateInput(nickname)}
        onChange={onHandleInputChange}
      />
      <Input
        type="email"
        placeholder={registerLang.registerForm.placeholderEmail}
        name="email"
        value={validateInput(email)}
        onChange={onHandleInputChange}
      />
      <Input
        type="password"
        placeholder={registerLang.placeholderPassword}
        value={validateInput(password)}
        name="password"
        onChange={onHandleInputChange}
      />
      <Submit>{registerLang.registerForm.submit}</Submit>
    </Form>
  );
}
