import {
  TitleQuestion,
  SubTitleSearchWord,
  MessageBoxContainer,
  BubbleMessageBox,
} from "../styles/styled-lesson";
import FormInputTypeC from "./textAreaProvideTextLesson";

import objExported from "../images/familyPack/familyImagesExporter";
import { withTranslation } from "react-i18next";

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
  t: (p: any) => string;
}

function questionTypeC({
  content,
  countCurrID,
  typedText,
  onChangeTextAreaHandler,
  t,
}: stateProp) {
  const imgObjRandom = Object.values(objExported).reverse()[countCurrID];
  return (
    <div className="containerQuestionTypeC">
      <TitleQuestion>{t(content.typeQuestion)}</TitleQuestion>

      <MessageBoxContainer className="containerMessageBox">
        <img src={imgObjRandom} alt="" />

        <BubbleMessageBox className="bubbleMessageBox">
          <SubTitleSearchWord>{t(content.startQuestion)}</SubTitleSearchWord>
        </BubbleMessageBox>
      </MessageBoxContainer>

      <FormInputTypeC
        typedText={typedText}
        onChangeTextAreaHandler={onChangeTextAreaHandler}
      />
    </div>
  );
}

export default withTranslation()(questionTypeC);
