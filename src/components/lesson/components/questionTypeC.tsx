import {
  TitleQuestion,
  SubTitleSearchWord,
  MessageBoxContainer,
  BubbleMessageBox,
} from "../styles/styled-lesson";
import FormInputTypeC from "./textAreaProvideTextLesson";

import objExported from "../images/familyPack/familyImagesExporter";

interface stateProp {
  content: {
    type: string;
    typeQuestion: string;
    startQuestion: string;
    answer: string;
  };
  countCurrID: number;
  typedText: string;
  onChangeTextAreaHandler: (p: any) => void;
}

export default function questionTypeC({
  content,
  countCurrID,
  typedText,
  onChangeTextAreaHandler,
}: stateProp) {
  const imgObjRandom = Object.values(objExported).reverse()[countCurrID];
  return (
    <div className="containerQuestionTypeC">
      <TitleQuestion>{content.typeQuestion}</TitleQuestion>

      <MessageBoxContainer className="containerMessageBox">
        <img src={imgObjRandom} alt="" />

        <BubbleMessageBox className="bubbleMessageBox">
          <SubTitleSearchWord>{content.startQuestion}</SubTitleSearchWord>
        </BubbleMessageBox>
      </MessageBoxContainer>

      <FormInputTypeC
        typedText={typedText}
        onChangeTextAreaHandler={onChangeTextAreaHandler}
      />
    </div>
  );
}
