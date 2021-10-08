import {
  TitleQuestion,
  WrapperCardSelect,
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
    varianAnswer: cardProp[];
  };
  countCurrID: number;
  // onSelectCardHandler: (p: any) => void;
  // currSelectedWord: string;
}

interface cardProp {
  id: string;
  answer: string;
}

export default function questionTypeB({ content, countCurrID }: stateProp) {
  console.log(content);
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
