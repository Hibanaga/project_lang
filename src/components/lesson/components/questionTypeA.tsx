import {
  TitleQuestion,
  WrapperCardSelect,
  SubTitleSearchWord,
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
}: stateProp) {
  // console.log(content);

  return (
    <div>
      <TitleQuestion>{content.typeQuestion}</TitleQuestion>

      <SubTitleSearchWord>{content.questionDefaultLang}</SubTitleSearchWord>

      <WrapperCardSelect>
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
