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
  isAlreadyComplete?: boolean;
  countPoints?: number;

  onChangeThemeHandler?: (p: any, p1?: number) => void;
  onToggleModalVisibleHandler?: (p: any) => void;
}

export default function cardStory({
  description,
  title,
  originalTitle,
  isAlreadyComplete,
  countPoints,

  onChangeThemeHandler,
  onToggleModalVisibleHandler,
}: stateProp) {
  console.log(Boolean(countPoints));

  return (
    <CardStory
      data-theme={description}
      onClick={
        originalTitle !== undefined
          ? onToggleModalVisibleHandler
          : (event: any) =>
              onChangeThemeHandler !== undefined &&
              onChangeThemeHandler(event, countPoints)
      }
      className="wrapperCardStoryLesson"
    >
      <WrapperCardStoryIMG
        data-current={description}
        theme={{
          isBlocked: Boolean(countPoints),
          isAlreadyOpen: Boolean(originalTitle),
          isAlreadyComplete: isAlreadyComplete,
        }}
      >
        <ImgCardStory
          className="imgCardCatalog"
          src={objExported[description]}
          theme={{
            isBlocked: Boolean(countPoints),
            isAlreadyOpen: Boolean(originalTitle),
            isAlreadyComplete: isAlreadyComplete,
          }}
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
