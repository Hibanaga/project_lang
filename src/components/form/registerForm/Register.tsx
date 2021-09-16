import RegisterPresentation from "./RegisterPresentation";

interface stateProp {
  onToggleRegisterPage: () => void;
}

export default function Register({ onToggleRegisterPage }: stateProp) {
  return <RegisterPresentation onToggleRegisterPage={onToggleRegisterPage} />;
}
