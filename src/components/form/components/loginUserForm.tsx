import { Input, Form, Submit } from "../styles/styled-comp.js";
import { validateInput } from "../../../utils/validationHelpers";

interface typeProp {
  login: string;
  password: string;
  onHandleInputChange: (p: object) => void;
  onSubmitFormHandler: (p: object) => void;
}

export default function loginUserForm({
  login,
  password,
  onHandleInputChange,
  onSubmitFormHandler,
}: typeProp) {
  return (
    <Form onSubmit={onSubmitFormHandler}>
      <Input
        // type="email"
        value={validateInput(login)}
        placeholder="Email или имя пользователя"
        title="Имя пользователя может включать только числа,буквы и некоторые специальные знаки такие как !_@"
        name="login"
        onChange={onHandleInputChange}
      />
      <Input
        // type="password"
        value={validateInput(password)}
        placeholder="Пароль"
        name="password"
        onChange={onHandleInputChange}
      />

      <Submit type="submit"> Войти </Submit>
    </Form>
  );
}
