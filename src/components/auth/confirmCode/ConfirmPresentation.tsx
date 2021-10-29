import { Wrapper, Title } from "../../../styles/styled-comp";
import ActionsRedirect from "../components/actionsRedirect";
import ConfirmCodeForm from "../components/confirmCodeForm";
import ErrorSendMessage from "../components/errorSendMessage";
import { RowLogin, ContainerForm } from "../styles/styled-comp.js";

interface stateProp {
  codeConfirm: string;
  onHandleInputChange: (p: any) => void;
  onSubmitFormHandler: (p: any) => void;
  message: string;
}

export default function ConfirmPresentation({
  codeConfirm,
  onHandleInputChange,
  onSubmitFormHandler,
  message,
}: stateProp) {
  return (
    <ContainerForm className="containerConfirm">
      <ActionsRedirect />
      <Wrapper>
        <RowLogin className="rowConfirm">
          <Title>Подтверждение почты</Title>
          <ConfirmCodeForm
            message={message}
            codeConfirm={codeConfirm}
            onHandleInputChange={onHandleInputChange}
            onSubmitFormHandler={onSubmitFormHandler}
          />
          <ErrorSendMessage />
        </RowLogin>
      </Wrapper>
    </ContainerForm>
  );
}
