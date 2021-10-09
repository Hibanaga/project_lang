import {
  TitleQuestion,
  WrapperCardSelect,
  SubTitleSearchWord,
  MessageBoxContainer,
  BubbleMessageBox,
} from "../styles/styled-lesson";
import CardSelectTypeA from "./cardSelectTypeA";
import objExported from "../images/familyPack/familyImagesExporter";

interface stateProp {
  content: {
    type: string;
    typeQuestion: string;
    questionDefaultLang: string;
    answer: string;
    varianAnswer: cardProp[];
  };
  onSelectCardHandler: (p: any) => void;
  countCurrID: number;
  currSelectedWord: string;
}

interface cardProp {
  id: string;
  answer: string;
}

export default function questionTypeA({
  content,
  onSelectCardHandler,
  currSelectedWord,
  countCurrID,
}: stateProp) {
  const imgObjRandom = Object.values(objExported).reverse()[countCurrID];

  console.log(content);
  return (
    <div>
      <TitleQuestion>{content.typeQuestion}</TitleQuestion>

      <MessageBoxContainer className="containerMessageBox">
        <img src={imgObjRandom} alt="" />

        <BubbleMessageBox className="bubbleMessageBox">
          <SubTitleSearchWord>{content.questionDefaultLang}</SubTitleSearchWord>
        </BubbleMessageBox>
      </MessageBoxContainer>

      <WrapperCardSelect theme={{ type: content.type }}>
        {content.varianAnswer.map(({ id, answer }: cardProp) => (
          <CardSelectTypeA
            key={id}
            answer={answer}
            currSelectedWord={currSelectedWord}
            imgIcon={objExported[answer]}
            onSelectCardHandler={onSelectCardHandler}
          />
        ))}
      </WrapperCardSelect>
    </div>
  );
}
