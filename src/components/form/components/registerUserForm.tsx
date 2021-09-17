import { Form, Input, Submit } from "../styles/styled-comp";
import { validateInput } from "../../../utils/validationHelpers";

interface typeProp {
  email: string;
  password: string;
  nickname: string;
}

interface stateProp {
  onHandleInputChange: (p: any) => void;
  userLang: any;
  state: typeProp;
}

export default function registerUserForm({
  state,
  userLang,
  onHandleInputChange,
}: stateProp) {
  const { email, password, nickname } = state;
  return (
    <Form>
      <Input
        type="text"
        placeholder={userLang.form.registerForm.placeholderNickname}
        name="nickname"
        value={validateInput(nickname)}
        onChange={onHandleInputChange}
      />
      <Input
        type="email"
        placeholder={userLang.form.registerForm.placeholderEmail}
        name="email"
        value={validateInput(email)}
        onChange={onHandleInputChange}
      />
      <Input
        type="password"
        placeholder={userLang.form.placeholderPassword}
        value={validateInput(password)}
        name="password"
        onChange={onHandleInputChange}
      />
      <Submit>{userLang.form.registerForm.submit}</Submit>
    </Form>
  );
}
