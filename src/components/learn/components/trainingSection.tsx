// import { useState } from "react";
import {
  WrapperTitleCard,
  WrapperCard,
  RowTitleCard,
  TitleCardContent,
} from "../styles/learn-comp";
import { arrowDropDown } from "../images/catalog/imageCatalogExport";

interface stateProp {
  content: { mainTitle: string; catalogTitles: any };
  imgOff: string;
  imgOn: string;
}

export default function TrainingSection({ content, imgOff, imgOn }: stateProp) {
  const { mainTitle } = content;
  return (
    <WrapperCard>
      <WrapperTitleCard className="wrapperCatalogCard">
        <RowTitleCard className="rowTitleCatalog">
          <img src={imgOff} alt="" />

          <TitleCardContent> {mainTitle} </TitleCardContent>

          <img src={arrowDropDown} alt="img arrow drop down" />
        </RowTitleCard>
      </WrapperTitleCard>
    </WrapperCard>
  );
}
