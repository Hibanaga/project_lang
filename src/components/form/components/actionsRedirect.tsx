import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

interface stateProp {
  onToggleRegisterPage?: () => void;
  onToggleLoginPage?: () => void;
  isLoginPage?: boolean;
}

export default function actionsRedirect({
  onToggleRegisterPage,
  onToggleLoginPage,
  isLoginPage,
}: stateProp) {
  return (
    <div className="wrapper__actionsRedirect">
      <button
        onClick={isLoginPage ? onToggleLoginPage : onToggleRegisterPage}
        className="js-btn__redirect js-btn__redirectToHome"
      >
        <CloseRoundedIcon />
      </button>

      <button className="js-btn__redirect js-btn__redirectToRegister">
        {isLoginPage ? "Регистрация" : "Войти"}
      </button>
    </div>
  );
}
