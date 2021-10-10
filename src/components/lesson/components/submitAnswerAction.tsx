import {
  FormSubmitCardLesson,
  FinalMessageConfirm,
  CorrectlyMessageConfirm,
} from "../styles/styled-lesson";
import random from "lodash.sample";
import messageCongratulations from "../services/messageCongratulations.json";
import { isAvailableQuestion } from "../utils/validateLessonExamples";

interface stateProp {
  onSubmitCardLessonHandler: (p: any) => void;
  onGetNextLessonHandler: (p: any) => void;
  messageConfirm: string;
  currSelectedWord: string;
  correctAnswer: string;
  arrWordMessage: any;
  currentTypeQuestion: string;
  typedText: string;
}

export default function submitAnswerAction({
  onSubmitCardLessonHandler,
  onGetNextLessonHandler,
  messageConfirm,
  currSelectedWord,
  correctAnswer,
  arrWordMessage,
  currentTypeQuestion,
  typedText,
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
      {messageConfirm === "success" && (
        <div className="containerErrorMessage">
          <FinalMessageConfirm
            theme={{
              message: messageConfirm,
            }}
          >
            {random(messageCongratulations)}
          </FinalMessageConfirm>
        </div>
      )}

      {messageConfirm === "error" && (
        <div className="containerErrorMessage">
          <FinalMessageConfirm
            theme={{
              message: messageConfirm,
            }}
          >
            Правильный ответ:
          </FinalMessageConfirm>

          <CorrectlyMessageConfirm
            theme={{
              message: messageConfirm,
            }}
          >
            {correctAnswer}
          </CorrectlyMessageConfirm>
        </div>
      )}

      <button
        type="submit"
        disabled={
          isAvailableQuestion(currSelectedWord, arrWordMessage, typedText, {
            type: currentTypeQuestion,
          })
            ? true
            : false
        }
      >
        {messageConfirm === "" ? "Проверить" : "Далее"}{" "}
      </button>
    </FormSubmitCardLesson>
  );
}
