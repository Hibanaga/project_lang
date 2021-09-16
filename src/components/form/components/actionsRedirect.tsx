import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

interface stateProp {
  onToggleRegisterPage: () => void;
  onToggleLoginPage: () => void;
}

export default function actionsRedirect({
  onToggleRegisterPage,
  onToggleLoginPage,
}: stateProp) {
  return (
    <div className="wrapper__actionsRedirect">
      <button
        onClick={onToggleLoginPage}
        className="js-btn__redirect js-btn__redirectToHome"
      >
        <CloseRoundedIcon />
      </button>

      <button
        onClick={onToggleRegisterPage}
        className="js-btn__redirect js-btn__redirectToRegister"
      >
        Регистрация
      </button>
    </div>
  );
}
