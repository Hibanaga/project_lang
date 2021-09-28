// import { useState } from "react";
import {
  WrapperTitleCard,
  WrapperCard,
  RowTitleCard,
  TitleCardContent,
  ListCardContent,
  ListItemCardContent,
} from "../styles/learn-comp";
import { arrowDropDown } from "../images/catalog/imageCatalogExport";

interface stateProp {
  content: { mainTitle: string; catalogTitles: any };
  imgOff: string;
  imgOn: string;
  isDropDown: boolean;
  onToggleDropDownHandler: (p: any) => void;
}

export default function TrainingSection({
  onToggleDropDownHandler,
  content,
  imgOff,
  imgOn,
  isDropDown,
}: stateProp) {
  const { mainTitle, catalogTitles } = content;

  return (
    <WrapperCard>
      <WrapperTitleCard
        data-source={mainTitle}
        className="wrapperCatalogCard"
        onClick={onToggleDropDownHandler}
      >
        <RowTitleCard className="rowTitleCatalog">
          <img src={isDropDown ? imgOn : imgOff} alt="" />
          <TitleCardContent> {mainTitle} </TitleCardContent>
          <img
            src={arrowDropDown}
            alt="img arrow drop down"
            className={
              isDropDown ? "imgTitleCatalog img_active" : "imgTitleCatalog"
            }
          />
        </RowTitleCard>
      </WrapperTitleCard>
      <ListCardContent
        data-source="hidden"
        className={isDropDown ? "active" : ""}
      >
        {catalogTitles.map(({ id, title }: any, idx: number) => (
          <ListItemCardContent className={isDropDown ? "active" : ""} key={id}>
            {idx + 1}. {title}{" "}
          </ListItemCardContent>
        ))}
      </ListCardContent>
    </WrapperCard>
  );
}
