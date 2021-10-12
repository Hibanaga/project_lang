import {
  TitleQuestion,
  WrapperCardSelect,
  SubTitleSearchWord,
  MessageBoxContainer,
  BubbleMessageBox,
} from "../styles/styled-lesson";
import CardSelectTypeA from "./cardSelectTypeA";
import objExported from "../images/familyPack/familyImagesExporter";
import { withTranslation } from "react-i18next";

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
  t: (p: any) => string;
}

interface cardProp {
  id: string;
  answer: string;
}

function questionTypeA({
  content,
  onSelectCardHandler,
  currSelectedWord,
  countCurrID,
  t,
}: stateProp) {
  const imgObjRandom = Object.values(objExported).reverse()[countCurrID];

  // console.log(content);
  return (
    <div>
      <TitleQuestion>{t(content.typeQuestion)}</TitleQuestion>

      <MessageBoxContainer className="containerMessageBox">
        <img src={imgObjRandom} alt="" />

        <BubbleMessageBox className="bubbleMessageBox">
          <SubTitleSearchWord>
            {t(content.questionDefaultLang)}
          </SubTitleSearchWord>
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

export default withTranslation()(questionTypeA);
