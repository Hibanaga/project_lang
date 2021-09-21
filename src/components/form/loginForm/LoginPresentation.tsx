import { Wrapper, Title } from "../../../styles/styled-comp";
import ActionsRedirect from "../components/actionsRedirect";
import LoginUserForm from "../components/loginUserForm";
import { RowLogin, ContainerForm } from "../styles/styled-comp.js";

import { withTranslation } from "react-i18next";

//instane of object
interface stateProp {
  email: string;
  password: string;
  nickname?: string;
}

interface typeProp {
  state: stateProp;
  t: (p: string) => object;
  pathLocation: string;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
}

function LoginPresentation({
  state,
  t,
  pathLocation,
  onHandleInputChange,
  onSubmitFormHandler,
}: typeProp) {
  //desctructe state
  const { email, password } = state;
  return (
    <ContainerForm className="containerLogin">
      <ActionsRedirect pathLocation={pathLocation} />
      <Wrapper>
        <RowLogin className="row_login">
          <Title>{t("form.login")}</Title>
          <LoginUserForm
            email={email}
            password={password}
            onHandleInputChange={onHandleInputChange}
            onSubmitFormHandler={onSubmitFormHandler}
          />
        </RowLogin>
      </Wrapper>
    </ContainerForm>
  );
}

export default withTranslation()(LoginPresentation);
