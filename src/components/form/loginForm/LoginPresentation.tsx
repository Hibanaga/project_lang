import { Wrapper, Title } from "../../../styles/styled-comp";
import ActionsRedirect from "../components/actionsRedirect";
import LoginUserForm from "../components/loginUserForm";
import { RowLogin } from "../styles/styled-comp.js";

//instane of object
interface stateProp {
  login: string;
  password: string;
}

interface typeProp {
  state: stateProp;
  onToggleRegisterPage: () => void;
  onToggleLoginPage: () => void;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
}

export default function LoginPresentation({
  state,
  onToggleRegisterPage,
  onToggleLoginPage,
  onHandleInputChange,
  onSubmitFormHandler,
}: typeProp) {
  //desctructe state
  const { login, password } = state;
  return (
    <section className="containerLogin">
      <Wrapper>
        <ActionsRedirect
          onToggleRegisterPage={onToggleRegisterPage}
          onToggleLoginPage={onToggleLoginPage}
        />
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
