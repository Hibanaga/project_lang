import { Form, Input, Submit } from "../styles/styled-comp";
import { validateInput } from "../../../utils/validationHelpers";

interface typeProp {
  email: string;
  password: string;
  nickname: string;
}

interface stateProp {
  onHandleInputChange: (p: any) => void;
  state: typeProp;
}

export default function registerUserForm({
  state,
  onHandleInputChange,
}: stateProp) {
  const { email, password, nickname } = state;
  return (
    <Form>
      <Input
        type="text"
        placeholder="Имя(необязательно)"
        name="nickname"
        value={validateInput(nickname)}
        onChange={onHandleInputChange}
      />
      <Input
        type="email"
        placeholder="Электронная почта"
        name="email"
        value={validateInput(email)}
        onChange={onHandleInputChange}
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={validateInput(password)}
        name="password"
        onChange={onHandleInputChange}
      />
      <Submit> Создать аккаут </Submit>
    </Form>
  );
}
