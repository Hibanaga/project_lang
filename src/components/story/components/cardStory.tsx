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
}

export default function cardStory({
  description,
  title,
  originalTitle,
  onChangeThemeHandler,
}: stateProp) {
  return (
    <CardStory data-theme={description} onClick={onChangeThemeHandler}>
      <WrapperCardStoryIMG
        data-current={description}
        theme={{ isBlocked: false, isAlreadyOpen: Boolean(originalTitle) }}
      >
        <ImgCardStory
          src={objExported[description]}
          theme={{ isBlocked: false, isAlreadyOpen: Boolean(originalTitle) }}
          alt="story book"
        />
      </WrapperCardStoryIMG>
      <SubTitleCardStory>
        {originalTitle !== undefined ? originalTitle : title}
      </SubTitleCardStory>
    </CardStory>
  );
}
