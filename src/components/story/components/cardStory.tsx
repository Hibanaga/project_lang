import React from "react";
import {
  CardStory,
  SubTitleCardStory,
  WrapperCardStoryIMG,
  ImgCardStory,
} from "../styles/story-comp";
import objExported from "../images/imageExporter";

interface stateProp {
  description: string;
  title: string;
  originalTitle?: string;

  onChangeThemeHandler?: (p: any) => void;
  onToggleModalVisibleHandler?: (p: any) => void;
}

export default function cardStory({
  description,
  title,
  originalTitle,
  onChangeThemeHandler,
  onToggleModalVisibleHandler,
}: stateProp) {
  return (
    <CardStory
      data-theme={description}
      onClick={
        originalTitle !== undefined
          ? onToggleModalVisibleHandler
          : onChangeThemeHandler
      }
      className="wrapperCardStoryLesson"
    >
      <WrapperCardStoryIMG
        data-current={description}
        theme={{ isBlocked: false, isAlreadyOpen: Boolean(originalTitle) }}
      >
        <ImgCardStory
          className="imgCardCatalog"
          src={objExported[description]}
          theme={{ isBlocked: false, isAlreadyOpen: Boolean(originalTitle) }}
          alt="story book"
        />

        {originalTitle !== undefined && (
          <img src={objExported["play"]} alt="" className="img_playHidden" />
        )}
      </WrapperCardStoryIMG>
      <SubTitleCardStory>
        {originalTitle !== undefined ? originalTitle : title}
      </SubTitleCardStory>
    </CardStory>
  );
}
