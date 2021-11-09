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
  isOpen: boolean;

  onChangeThemeHandler: (p: any) => void;
}

export default function HistoryPresentation({
  currentTheme,
  isOpen,
  onChangeThemeHandler,
}: stateProp) {
  return (
    <>
      {isOpen && (
        <StoryLesson
          currentTheme={currentTheme}
          onChangeThemeHandler={onChangeThemeHandler}
        />
      )}

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
  );
}
