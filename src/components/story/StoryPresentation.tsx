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

interface stateProp {
  currentTheme: string;
  selectVariant: string;
  isOpen: boolean;
  isVisibleModal: boolean;
  isDisable: boolean;
  currElementDialog: number;
  lessonObj: any;

  onChangeThemeHandler: (p: any) => void;
  onToggleModalVisibleHandler: (p: any) => void;
  onChangeCounterCurrElementDialog: (p: any) => void;
  onUpdateSelectWordHandler: (p: any) => void;
}

export default function HistoryPresentation({
  currentTheme,
  isOpen,
  isVisibleModal,
  isDisable,
  currElementDialog,
  lessonObj,
  selectVariant,
  onChangeThemeHandler,
  onToggleModalVisibleHandler,
  onChangeCounterCurrElementDialog,
  onUpdateSelectWordHandler,
}: stateProp) {
  return (
    <>
      {isOpen && (
        <>
          <StoryLesson
            isDisable={isDisable}
            lessonObj={lessonObj}
            selectVariant={selectVariant}
            currentTheme={currentTheme}
            isVisibleModal={isVisibleModal}
            currElementDialog={currElementDialog}
            onChangeThemeHandler={onChangeThemeHandler}
            onToggleModalVisibleHandler={onToggleModalVisibleHandler}
            onChangeCounterCurrElementDialog={onChangeCounterCurrElementDialog}
            onUpdateSelectWordHandler={onUpdateSelectWordHandler}
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
                onChangeThemeHandler={onChangeThemeHandler}
              />
            </Wrapper>
          </article>
        </>
      )}
    </>
  );
}
