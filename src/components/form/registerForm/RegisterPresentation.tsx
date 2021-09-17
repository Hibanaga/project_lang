import { Title, Wrapper } from "../../../styles/styled-comp";
import ActionsRedirect from "../components/actionsRedirect";
import RegisterUserForm from "../components/registerUserForm";
import { RowLogin } from "../styles/styled-comp";

// interface typePropObject {
//   login: string;
//   password: string;
// }

interface stateProp {
  onHandleInputChange: (p: any) => void;
  userLang: any;
  state: any;
}

export default function RegisterPresentation({
  onHandleInputChange,
  userLang,
  state,
}: stateProp) {
  return (
    <section className="containerRegister">
      <Wrapper>
        <ActionsRedirect userLang={userLang} />
        <RowLogin className="row_register">
          <Title>{userLang.form.registerForm.title}</Title>
          <RegisterUserForm
            state={state}
            userLang={userLang}
            onHandleInputChange={onHandleInputChange}
          />
        </RowLogin>
      </Wrapper>
    </section>
  );
}
