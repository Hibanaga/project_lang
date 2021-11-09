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

      <div className="rowStoryLesson">
        <CardStory
          key={id}
          description={description}
          originalTitle={originalTitle}
          title={title}
        />

        <button
          className="js_btn_openModal"
          onClick={onToggleModalVisibleHandler}
        >
          видео
        </button>

        <VideoModalStory
          urlVideo={urlVideo}
          isVisibleModal={isVisibleModal}
          onToggleModalVisibleHandler={onToggleModalVisibleHandler}
        />
      </div>
    </div>
  );
}
