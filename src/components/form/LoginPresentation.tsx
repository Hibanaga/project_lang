import { Wrapper, Title } from "../../styles/styled-comp";
import LoginUserForm from "./components/loginUserForm";
import { RowLogin } from "./styles/styled-comp.js";

interface stateProp {
  login: string;
  password: string;
}

interface typeProp {
  state: stateProp;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
}

export default function LoginPresentation({
  state,
  onHandleInputChange,
  onSubmitFormHandler,
}: typeProp) {
  //desctructe state
  const { login, password } = state;
  return (
    <section className="containerLogin">
      <Wrapper>
        <RowLogin className="row_login">
          <Title>Войти</Title>
          <LoginUserForm
            login={login}
            password={password}
            onHandleInputChange={onHandleInputChange}
            onSubmitFormHandler={onSubmitFormHandler}
          />
        </RowLogin>
      </Wrapper>
    </section>
  );
}
