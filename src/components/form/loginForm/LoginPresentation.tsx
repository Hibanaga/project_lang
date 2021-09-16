import { Wrapper, Title } from "../../../styles/styled-comp";
import ActionsRedirect from "../components/actionsRedirect";
import LoginUserForm from "../components/loginUserForm";
import { RowLogin } from "../styles/styled-comp.js";

//instane of object
interface stateProp {
  email: string;
  password: string;
  nickname?: string;
}

interface typeProp {
  state: stateProp;
  isLoginPage: boolean;
  onToggleLoginPage: () => void;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
}

export default function LoginPresentation({
  state,
  isLoginPage,
  onToggleLoginPage,
  onHandleInputChange,
  onSubmitFormHandler,
}: typeProp) {
  //desctructe state
  const { email, password } = state;
  return (
    <section className="containerLogin">
      <Wrapper>
        <ActionsRedirect
          isLoginPage={isLoginPage}
          onToggleLoginPage={onToggleLoginPage}
        />
        <RowLogin className="row_login">
          <Title>Войти</Title>
          <LoginUserForm
            email={email}
            password={password}
            onHandleInputChange={onHandleInputChange}
            onSubmitFormHandler={onSubmitFormHandler}
          />
        </RowLogin>
      </Wrapper>
    </section>
  );
}
