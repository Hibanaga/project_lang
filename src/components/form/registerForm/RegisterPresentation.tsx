import { Title, Wrapper } from "../../../styles/styled-comp";
import ActionsRedirect from "../components/actionsRedirect";
import RegisterUserForm from "../components/registerUserForm";
import { RowLogin } from "../styles/styled-comp";

import { withTranslation } from "react-i18next";

interface stateProp {
  onHandleInputChange: (p: any) => void;
  t: any;
  state: any;
}

function RegisterPresentation({ onHandleInputChange, t, state }: stateProp) {
  return (
    <section className="containerRegister">
      <Wrapper>
        <ActionsRedirect />
        <RowLogin className="row_register">
          <Title>{t("form.registerForm.title")}</Title>
          <RegisterUserForm
            state={state}
            onHandleInputChange={onHandleInputChange}
          />
        </RowLogin>
      </Wrapper>
    </section>
  );
}

export default withTranslation()(RegisterPresentation);
