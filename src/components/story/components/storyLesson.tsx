import React from "react";
import ActionReturnback from "./actionReturnback";
import cardPack from "../assets/cardPack.json";
import CardStory from "./cardStory";

interface stateProp {
  currentTheme: string;

  onChangeThemeHandler: (p: any) => void;
}

export default function storyLesson({
  currentTheme,
  onChangeThemeHandler,
}: stateProp) {
  const { id, title, description, originalTitle } = cardPack
    .flat()
    .filter(({ description }) => description === currentTheme)[0];

  return (
    <div className="wrapperStoryLessson">
      <ActionReturnback onChangeThemeHandler={onChangeThemeHandler} />

      <div className="rowStoryLesson">
        <CardStory
          key={id}
          description={description}
          originalTitle={originalTitle}
          title={title}
        />

        <button className="js_btn_openModal">видео</button>
      </div>
    </div>
  );
}
