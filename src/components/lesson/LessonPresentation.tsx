import { Wrapper } from "../../styles/styled-comp";
import ActionReturnBack from "./components/actionReturnBack";
import QuestionTypeA from "./components/questionTypeA";
import SubmitAnswerAction from "./components/submitAnswerAction";
import "./styles/lesson.scss";

interface stateProp {
  catalog: any;
  onSelectCardHandler: (p: any) => void;
  currSelectedWord: string;
  countQuestion: number;
  onSubmitCardLessonHandler: (p: any) => void;
  onGetNextLessonHandler: (p: any) => void;
  messageConfirm: string;
}

export default function LessonPresentation({
  catalog,
  onSelectCardHandler,
  currSelectedWord,
  countQuestion,
  onSubmitCardLessonHandler,
  messageConfirm,
  onGetNextLessonHandler,
}: stateProp) {
  return (
    <>
      {catalog.length > 0 && (
        <div className="containerPresentationCard">
          <ActionReturnBack />
          <Wrapper>
            {catalog[countQuestion].type === "A" && (
              <QuestionTypeA
                onSelectCardHandler={onSelectCardHandler}
                currSelectedWord={currSelectedWord}
                content={catalog[countQuestion]}
              />
            )}

            <SubmitAnswerAction
              messageConfirm={messageConfirm}
              currSelectedWord={currSelectedWord}
              onSubmitCardLessonHandler={onSubmitCardLessonHandler}
              onGetNextLessonHandler={onGetNextLessonHandler}
            />
          </Wrapper>
        </div>
      )}
    </>
  );
}

// {catalog.length > 0 && (
//   <div className="containerPresentationCard">
//     <ActionReturnBack />
//     <Wrapper>{catalog[0].type === "A" && <QuestionTypeA />}</Wrapper>
//   </div>
// )}
