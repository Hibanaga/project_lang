import {
  TitleQuestion,
  WrapperCardSelect,
  SubTitleSearchWord,
  MessageBoxContainer,
  BubbleMessageBox,
} from "../styles/styled-lesson";
import objExported from "../images/familyPack/familyImagesExporter";
import { useState } from "react";
import { replaceStarsHelper } from "../utils/validateLessonExamples";

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

export default function QuestionTypeB({ content, countCurrID }: stateProp) {
  console.log(content);

  const [searchWord, setSearchWord] = useState(
    replaceStarsHelper(content.startQuestion).split("")
  );

  console.log(searchWord);

  const imgObjRandom = Object.values(objExported).reverse()[countCurrID];
  return (
    <div>
      <TitleQuestion>{content.typeQuestion}</TitleQuestion>

      <MessageBoxContainer className="containerMessageBox">
        <img src={imgObjRandom} alt="" />

        <BubbleMessageBox className="bubbleMessageBox">
          <SubTitleSearchWord>{searchWord}</SubTitleSearchWord>
        </BubbleMessageBox>
      </MessageBoxContainer>
    </div>
  );
}
