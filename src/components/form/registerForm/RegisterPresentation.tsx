interface stateProp {
  onToggleRegisterPage: () => void;
}

export default function RegisterPresentation({
  onToggleRegisterPage,
}: stateProp) {
  return (
    <>
      <button onClick={onToggleRegisterPage}>return</button>
      <h1>register</h1>
    </>
  );
}
