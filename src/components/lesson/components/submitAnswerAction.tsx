import { FormSubmitCardLesson } from "../styles/styled-lesson";

interface stateProp {
  onSubmitCardLessonHandler: (p: any) => void;
  onGetNextLessonHandler: (p: any) => void;
  messageConfirm: string;
  currSelectedWord: string;
}

export default function submitAnswerAction({
  onSubmitCardLessonHandler,
  onGetNextLessonHandler,
  messageConfirm,
  currSelectedWord,
}: stateProp) {
  return (
    <FormSubmitCardLesson
      className="wrapperSubmitAnswer"
      theme={{
        message: messageConfirm,
      }}
      onSubmit={
        messageConfirm === ""
          ? onSubmitCardLessonHandler
          : onGetNextLessonHandler
      }
    >
      <button type="submit" disabled={currSelectedWord === "" ? true : false}>
        {messageConfirm === "" ? "Проверить" : "Далее"}{" "}
      </button>
    </FormSubmitCardLesson>
  );
}
