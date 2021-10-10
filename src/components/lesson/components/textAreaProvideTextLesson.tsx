import { TextAreaForm } from "../styles/styled-lesson";

interface stateProp {
  typedText: string;
  onChangeTextAreaHandler: (p: any) => void;
}

export default function formInputTypeC({
  typedText,
  onChangeTextAreaHandler,
}: stateProp) {
  return (
    <TextAreaForm
      value={typedText}
      onChange={onChangeTextAreaHandler}
      placeholder="Введите перевод на английский"
    />
  );
}
