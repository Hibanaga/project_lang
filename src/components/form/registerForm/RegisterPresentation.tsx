import { Title, Wrapper } from "../../../styles/styled-comp";
import ActionsRedirect from "../components/actionsRedirect";
import RegisterUserForm from "../components/registerUserForm";
import { RowLogin } from "../styles/styled-comp";

// interface typePropObject {
//   login: string;
//   password: string;
// }

interface stateProp {
  onToggleRegisterPage: () => void;
  onHandleInputChange: (p: any) => void;
  // onSubmitFormHandler: (p: any) => void;
  state: any;
}

export default function RegisterPresentation({
  onToggleRegisterPage,
  onHandleInputChange,
  state,
}: stateProp) {
  return (
    <section className="containerRegister">
      <Wrapper>
        <ActionsRedirect onToggleRegisterPage={onToggleRegisterPage} />
        <RowLogin className="row_register">
          <Title>Создайте аккаунт</Title>
          <RegisterUserForm
            state={state}
            onHandleInputChange={onHandleInputChange}
          />
        </RowLogin>
      </Wrapper>
    </section>
  );
}
