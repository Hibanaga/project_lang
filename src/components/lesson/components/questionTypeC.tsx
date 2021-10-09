import {
  TitleQuestion,
  SubTitleSearchWord,
  MessageBoxContainer,
  BubbleMessageBox,
} from "../styles/styled-lesson";
import objExported from "../images/familyPack/familyImagesExporter";

interface stateProp {
  content: {
    type: string;
    typeQuestion: string;
    startQuestion: string;
    answer: string;
  };
  countCurrID: number;
}

export default function questionTypeC({ content, countCurrID }: stateProp) {
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
    </div>
  );
}
