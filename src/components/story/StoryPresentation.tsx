import { Wrapper } from "../../styles/styled-comp";
import cardPack from "./assets/cardPack.json";
import CatalogStoryPack from "./components/catalogStoryPack";
import {
  TitleStory,
  SubTitleStory,
  LineMessageStory,
} from "./styles/story-comp";

export default function HistoryPresentation() {
  return (
    <article className="containerStory">
      <Wrapper>
        <TitleStory>Истории CoolLearn</TitleStory>
        <SubTitleStory>
          Мини-истории которые улучшают навыки чтения и ответа на вопросы{" "}
        </SubTitleStory>

        <LineMessageStory>Набор 1</LineMessageStory>

        <CatalogStoryPack cardPack={cardPack[0]} />
      </Wrapper>
    </article>
  );
}
