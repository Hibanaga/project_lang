import { withTranslation } from "react-i18next";
import { Wrapper, Title } from "../../../styles/styled-comp";
import ActionsRedirect from "../components/actionsRedirect";
import ConfirmCodeForm from "../components/confirmCodeForm";
import ErrorSendMessage from "../components/errorSendMessage";
import { RowLogin, ContainerForm } from "../styles/styled-comp.js";

interface stateProp {
  codeConfirm: string;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
  t: (prop:any) => string;
  message: string;
}

 function ConfirmPresentation({
  codeConfirm,
  onHandleInputChange,
  onSubmitFormHandler,
  t,
  message,
}: stateProp) {
  return (
    <ContainerForm className="containerConfirm">
      <ActionsRedirect />
      <Wrapper>
        <RowLogin className="rowConfirm">
          <Title>{t("confirm.confirmEmail")}</Title>
          <ConfirmCodeForm
            message={message}
            codeConfirm={codeConfirm}
            t={t}
            onHandleInputChange={onHandleInputChange}
            onSubmitFormHandler={onSubmitFormHandler}
          />
          <ErrorSendMessage />
        </RowLogin>
      </Wrapper>
    </ContainerForm>
  );
}


export default withTranslation()(ConfirmPresentation);
