import {
  TitleQuestion,
  WrapperCardSelect,
  SubTitleSearchWord,
  MessageBoxContainer,
  BubbleMessageBox,
  ContainerTextBox,
  ContainterLineTextBox,
  CardSelectWord,
} from "../styles/styled-lesson";
import objExported from "../images/familyPack/familyImagesExporter";
import { disablesUsedWord } from "../utils/validateLessonExamples";

interface stateProp {
  content: {
    type: string;
    typeQuestion: string;
    startQuestion: string;
    answer: string;
    varianAnswer: cardProp[];
  };
  countCurrID: number;
  arrWordMessage: any;
  onAddWordToMessageBoxHandler: (p: any) => void;
  onRemoveWordFromMessageBoxHandler: (p: any) => void;
  // onSelectCardHandler: (p: any) => void;
  // currSelectedWord: string;
}

interface cardProp {
  id: string;
  answer: string;
}

export default function questionTypeB({
  content,
  countCurrID,
  arrWordMessage,
  onAddWordToMessageBoxHandler,
  onRemoveWordFromMessageBoxHandler,
}: stateProp) {
  const imgObjRandom = Object.values(objExported).reverse()[countCurrID];
  return (
    <div>
      <TitleQuestion>{content.typeQuestion}</TitleQuestion>

      <MessageBoxContainer className="containerMessageBox">
        <img src={imgObjRandom} alt="" />

        <BubbleMessageBox className="bubbleMessageBox">
          <SubTitleSearchWord>{content.startQuestion}</SubTitleSearchWord>
        </BubbleMessageBox>
      </MessageBoxContainer>

      <ContainerTextBox>
        <ContainterLineTextBox></ContainterLineTextBox>
        <ContainterLineTextBox></ContainterLineTextBox>
        <ContainterLineTextBox className="last_item"></ContainterLineTextBox>

        <WrapperCardSelect>
          {arrWordMessage.map(
            ({ id, value }: { id: string; value: string }) => (
              <CardSelectWord
                onClick={onRemoveWordFromMessageBoxHandler}
                key={id}
              >
                {value}
              </CardSelectWord>
            )
          )}
        </WrapperCardSelect>
      </ContainerTextBox>

      <WrapperCardSelect theme={{ type: content.type }}>
        {content.varianAnswer.map(({ id, answer }: cardProp) => (
          <CardSelectWord
            disabled={disablesUsedWord(answer, arrWordMessage) ? true : false}
            key={id}
            onClick={onAddWordToMessageBoxHandler}
          >
            {answer}
          </CardSelectWord>
        ))}
      </WrapperCardSelect>
    </div>
  );
}
