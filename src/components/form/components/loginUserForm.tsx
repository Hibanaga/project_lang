import { Input, Form, Submit } from "../styles/styled-comp.js";
import { validateInput } from "../../../utils/validationHelpers";

interface stateProp {
  email: string;
  password: string;
  onHandleInputChange: (p: object) => void;
  onSubmitFormHandler: (p: object) => void;
}

export default function loginUserForm({
  email,
  password,
  onHandleInputChange,
  onSubmitFormHandler,
}: stateProp) {
  return (
    <Form onSubmit={onSubmitFormHandler}>
      <Input
        type="email"
        value={validateInput(email)}
        placeholder="Email или имя пользователя"
        title="Имя пользователя может включать только числа,буквы и некоторые специальные знаки такие как !_@"
        name="email"
        onChange={onHandleInputChange}
      />
      <Input
        type="password"
        value={validateInput(password)}
        placeholder="Пароль"
        name="password"
        onChange={onHandleInputChange}
      />

      <Submit type="submit"> Войти </Submit>
    </Form>
  );
}
