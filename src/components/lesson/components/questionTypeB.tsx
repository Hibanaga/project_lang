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
import { withTranslation } from "react-i18next";

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
  t: (p: any) => string;
}

interface cardProp {
  id: string;
  answer: string;
}

function questionTypeB({
  content,
  countCurrID,
  arrWordMessage,
  onAddWordToMessageBoxHandler,
  onRemoveWordFromMessageBoxHandler,
  t,
}: stateProp) {
  const imgObjRandom = Object.values(objExported).reverse()[countCurrID];
  return (
    <div>
      <TitleQuestion>{t(content.typeQuestion)}</TitleQuestion>

      <MessageBoxContainer className="containerMessageBox">
        <img src={imgObjRandom} alt="" />

        <BubbleMessageBox className="bubbleMessageBox">
          <SubTitleSearchWord>{t(content.startQuestion)}</SubTitleSearchWord>
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
            disabled={
              disablesUsedWord(t(answer), arrWordMessage) ? true : false
            }
            key={id}
            onClick={onAddWordToMessageBoxHandler}
          >
            {t(answer)}
          </CardSelectWord>
        ))}
      </WrapperCardSelect>
    </div>
  );
}

export default withTranslation()(questionTypeB);
