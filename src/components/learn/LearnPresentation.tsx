import { Row, Wrapper } from "../../styles/styled-comp";
import { AdditionalInfoWrapper } from "./styles/learn-comp";
import "./styles/learn.scss";
import TrainingSection from "./components/trainingSection";
import catalog from "./assets/catalog.json";
import {
  introduceOff,
  introduceOn,
  morningOff,
  morningOn,
  noonOff,
  noonOn,
} from "./images/catalog/imageCatalogExport";

interface stateProp {
  introduction: boolean;
  chapter1: false;
  chapter2: false;
  onToggleDropDownHandler: (p: any) => void;
  onSetLessonNameHandler: (p: any) => void;
}

export default function MainPresentation({
  introduction,
  chapter1,
  chapter2,
  onToggleDropDownHandler,
  onSetLessonNameHandler,
}: stateProp) {
  return (
    <article className="containerLearn">
      <Wrapper className="wrapperLearn">
        <TrainingSection
          onSetLessonNameHandler={onSetLessonNameHandler}
          onToggleDropDownHandler={onToggleDropDownHandler}
          content={catalog[0]}
          imgOff={introduceOff}
          imgOn={introduceOn}
          isDropDown={introduction}
        />

        <TrainingSection
          onSetLessonNameHandler={onSetLessonNameHandler}
          onToggleDropDownHandler={onToggleDropDownHandler}
          content={catalog[1]}
          imgOff={morningOff}
          imgOn={morningOn}
          isDropDown={chapter1}
        />

        <TrainingSection
          onSetLessonNameHandler={onSetLessonNameHandler}
          onToggleDropDownHandler={onToggleDropDownHandler}
          content={catalog[2]}
          imgOff={noonOff}
          imgOn={noonOn}
          isDropDown={chapter2}
        />
      </Wrapper>
    </article>
  );
}
