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
}

export default function cardStory({ description, title }: stateProp) {
  return (
    <CardStory>
      <WrapperCardStoryIMG
        data-current={description}
        theme={{ isBlocked: false }}
      >
        <ImgCardStory
          src={objExported[description]}
          theme={{ isBlocked: false }}
          alt="story book"
        />
      </WrapperCardStoryIMG>
      <SubTitleCardStory>{title}</SubTitleCardStory>
    </CardStory>
  );
}
