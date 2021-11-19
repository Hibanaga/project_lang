import { Wrapper } from "../../styles/styled-comp";
import "./styles/story.scss";
import cardPack from "./assets/cardPack.json";
import CatalogStoryPack from "./components/catalogStoryPack";
import {
  TitleStory,
  SubTitleStory,
  LineMessageStory,
} from "./styles/story-comp";
import StoryLesson from "./components/storyLesson";
import ResultLessonWindow from "./components/resultLessonWindow";

interface stateProp {
  currentTheme: string;
  selectVariant: string;
  isOpen: boolean;
  isVisibleModal: boolean;
  isDisable: boolean;
  currElementDialog: number;
  lessonObj: any;
  isOpenResultWindow: boolean;
  falsyAnswerObj: any;
  cardlesson: any;
  outerRef: any;
  titleStory: string;
  progressStory: any;
  crown: number;

  onChangeThemeHandler: (p: any, p1?: number) => void;
  onToggleModalVisibleHandler: (p: any) => void;
  onChangeCounterCurrElementDialog: (p: any) => void;
  onUpdateSelectWordHandler: (p: any, p1: any) => void;
  onOpenResultLessonWindowHandler: () => void;
  onCloseResultLessonWindowHandler: () => void;
}

export default function HistoryPresentation({
  currentTheme,
  isOpen,
  isVisibleModal,
  isDisable,
  currElementDialog,
  lessonObj,
  selectVariant,
  isOpenResultWindow,
  falsyAnswerObj,
  cardlesson,
  outerRef,
  titleStory,
  progressStory,
  crown,

  //methods
  onChangeThemeHandler,
  onToggleModalVisibleHandler,
  onChangeCounterCurrElementDialog,
  onUpdateSelectWordHandler,
  onOpenResultLessonWindowHandler,
  onCloseResultLessonWindowHandler,
}: stateProp) {
  return (
    <>
      {isOpen && !isOpenResultWindow && (
        <>
          <StoryLesson
            isDisable={isDisable}
            lessonObj={lessonObj}
            selectVariant={selectVariant}
            currentTheme={currentTheme}
            isVisibleModal={isVisibleModal}
            currElementDialog={currElementDialog}
            falsyAnswerObj={falsyAnswerObj}
            isOpenResultWindow={isOpenResultWindow}
            cardlesson={cardlesson}
            outerRef={outerRef}
            titleStory={titleStory}
            onChangeThemeHandler={onChangeThemeHandler}
            onToggleModalVisibleHandler={onToggleModalVisibleHandler}
            onChangeCounterCurrElementDialog={onChangeCounterCurrElementDialog}
            onUpdateSelectWordHandler={onUpdateSelectWordHandler}
            onOpenResultLessonWindowHandler={onOpenResultLessonWindowHandler}
          />
        </>
      )}
      {!isOpen && (
        <>
          <article className="containerStory">
            <Wrapper>
              <TitleStory>Истории CoolLearn</TitleStory>
              <SubTitleStory>
                Мини-истории которые улучшают навыки чтения и ответа на вопросы{" "}
              </SubTitleStory>

              <LineMessageStory>Набор 1</LineMessageStory>

              <CatalogStoryPack
                cardPack={cardPack[0]}
                progressStory={progressStory}
                crown={crown}
                onChangeThemeHandler={onChangeThemeHandler}
              />

              <LineMessageStory>Набор 2</LineMessageStory>

              <CatalogStoryPack
                cardPack={cardPack[1]}
                progressStory={progressStory}
                crown={crown}
                onChangeThemeHandler={onChangeThemeHandler}
              />
            </Wrapper>
          </article>
        </>
      )}

      {isOpenResultWindow && (
        <ResultLessonWindow
          falsyAnswerObj={falsyAnswerObj}
          cardlesson={cardlesson}
          onCloseResultLessonWindowHandler={onCloseResultLessonWindowHandler}
        />
      )}
    </>
  );
}
