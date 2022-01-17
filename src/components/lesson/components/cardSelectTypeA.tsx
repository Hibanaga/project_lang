import { CardSelect, DescriptionCardSelect } from "../styles/styled-lesson";

interface stateProp {
  key?: string;
  answer: string;
  imgIcon: string;
  onSelectCardHandler: (p: any) => void;
  currSelectedWord: string;
}

export default function cardSelectTypeA({
  answer,
  imgIcon,
  onSelectCardHandler,
  currSelectedWord,
}: stateProp) {
  // console.log(answer);
  return (
    <CardSelect
      onClick={onSelectCardHandler}
      data-source={answer}
      className={
        currSelectedWord === answer
          ? "wrapperCardLessonTypeA active"
          : "wrapperCardLessonTypeA"
      }
    >
      <img src={imgIcon} alt="" />
      
      <DescriptionCardSelect>{answer}</DescriptionCardSelect>
    </CardSelect>
  );
}
