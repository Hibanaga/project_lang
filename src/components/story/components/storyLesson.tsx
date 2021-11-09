import React from "react";
import ActionReturnback from "./actionReturnback";
import cardPack from "../assets/cardPack.json";
import CardStory from "./cardStory";
import VideoModalStory from "./videoModalStory";

interface stateProp {
  currentTheme: string;
  isVisibleModal: boolean;

  onToggleModalVisibleHandler: (p: any) => void;
  onChangeThemeHandler: (p: any) => void;
}

export default function storyLesson({
  currentTheme,
  onChangeThemeHandler,
  isVisibleModal,
  onToggleModalVisibleHandler,
}: stateProp) {
  const { id, title, description, originalTitle, urlVideo } = cardPack
    .flat()
    .filter(({ description }) => description === currentTheme)[0];

  return (
    <div className="wrapperStoryLessson">
      <ActionReturnback onChangeThemeHandler={onChangeThemeHandler} />

      <CardStory
        key={id}
        description={description}
        title={title}
        onToggleModalVisibleHandler={onToggleModalVisibleHandler}
        originalTitle={originalTitle}
      />

      <VideoModalStory
        urlVideo={urlVideo}
        isVisibleModal={isVisibleModal}
        onToggleModalVisibleHandler={onToggleModalVisibleHandler}
      />

      <button className="js-btn__openWindow">далее</button>
    </div>
  );
}
