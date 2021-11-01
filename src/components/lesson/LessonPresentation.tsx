import { Wrapper } from "../../styles/styled-comp";
import ActionReturnBack from "./components/actionReturnBack";
import QuestionTypeA from "./components/questionTypeA";
import QuestionTypeB from "./components/questionTypeB";
import QuestionTypeC from "./components/questionTypeC";

import ResultScrore from "./components/resultScrore";
import SuccessfulCompletedLesson from "./components/successfulCompletedLesson";

import SubmitAnswerAction from "./components/submitAnswerAction";

import "./styles/lesson.scss";

interface stateProp {
  //catalog question
  catalog: any;
  onSelectCardHandler: (p: any) => void;
  currSelectedWord: string;
  countQuestion: number;
  onSubmitCardLessonHandler: (p: any) => void;
  onGetNextLessonHandler: (p: any) => void;
  messageConfirm: string;
  progressArr: any;

  //type B
  arrWordMessage: any;
  onAddWordToMessageBoxHandler: (p: any) => void;
  onRemoveWordFromMessageBoxHandler: (p: any) => void;
  typedText: string;
  onChangeTextAreaHandler: (p: any) => void;
  countScore: number;
  onSubmitLessonHandler: (p: any) => void;

  onRemovePathRedirectHandler: () => void;

  currentProgressArr: any;
}

function LessonPresentation({
  catalog,
  onSelectCardHandler,
  currSelectedWord,
  countQuestion,
  progressArr,
  onSubmitCardLessonHandler,
  messageConfirm,
  onGetNextLessonHandler,
  arrWordMessage,
  onAddWordToMessageBoxHandler,
  onRemoveWordFromMessageBoxHandler,
  typedText,
  onChangeTextAreaHandler,
  countScore,
  onSubmitLessonHandler,
  onRemovePathRedirectHandler,
  currentProgressArr,
}: stateProp) {
  // console.log(catalog);
  // console.log(progressArr.length);

  return (
    <>
      {catalog.length > 0 && (
        <div className="containerPresentationCard">
          <ActionReturnBack
            onRemovePathRedirectHandler={onRemovePathRedirectHandler}
            countQuestion={countQuestion}
            catalogLength={catalog.length}
          />
          <Wrapper>
            {catalog[countQuestion] !== undefined && (
              <>
                {catalog[countQuestion].type === "A" && (
                  <QuestionTypeA
                    onSelectCardHandler={onSelectCardHandler}
                    currSelectedWord={currSelectedWord}
                    content={catalog[countQuestion]}
                    countCurrID={countQuestion}
                  />
                )}

                {catalog[countQuestion].type === "B" && (
                  <QuestionTypeB
                    countCurrID={countQuestion}
                    content={catalog[countQuestion]}
                    arrWordMessage={arrWordMessage}
                    onAddWordToMessageBoxHandler={onAddWordToMessageBoxHandler}
                    onRemoveWordFromMessageBoxHandler={
                      onRemoveWordFromMessageBoxHandler
                    }
                  />
                )}

                {catalog[countQuestion].type === "C" && (
                  <QuestionTypeC
                    countCurrID={countQuestion}
                    content={catalog[countQuestion]}
                    typedText={typedText}
                    onChangeTextAreaHandler={onChangeTextAreaHandler}
                  />
                )}

                <SubmitAnswerAction
                  messageConfirm={messageConfirm}
                  correctAnswer={catalog[countQuestion].answer}
                  currentTypeQuestion={catalog[countQuestion].type}
                  currSelectedWord={currSelectedWord}
                  onSubmitCardLessonHandler={onSubmitCardLessonHandler}
                  onGetNextLessonHandler={onGetNextLessonHandler}
                  arrWordMessage={arrWordMessage}
                  typedText={typedText}
                />
              </>
            )}

            {catalog[countQuestion] === undefined && (
              <>
                {progressArr.length === catalog.length ? (
                  <SuccessfulCompletedLesson
                    onSubmitLessonHandler={onSubmitLessonHandler}
                  />
                ) : (
                  <ResultScrore
                    countScore={countScore}
                    catalogLength={catalog.length}
                    onSubmitLessonHandler={onSubmitLessonHandler}
                  />
                )}

                {/* {currentProgressArr.length !== catalog.length ? (
                  <ResultScrore
                    countScore={countScore}
                    catalogLength={catalog.length}
                    onSubmitLessonHandler={onSubmitLessonHandler}
                  />
                ) : (
                  catalog.length === progressArr.length && (
                    <SuccessfulCompletedLesson
                      onSubmitLessonHandler={onSubmitLessonHandler}
                    />
                  )
                )} */}
              </>
            )}
          </Wrapper>
        </div>
      )}
    </>
  );
}

export default LessonPresentation;
