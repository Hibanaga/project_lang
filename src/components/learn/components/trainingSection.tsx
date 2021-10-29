import {
  WrapperTitleCard,
  WrapperCard,
  RowTitleCard,
  TitleCardContent,
  ListCardContent,
  ListItemCardContent,
  ListItemCardLink,
} from "../styles/learn-comp";
import { arrowDropDown } from "../images/catalog/imageCatalogExport";
import { withTranslation } from "react-i18next";
import { learn } from "../../../router/routes";

interface stateProp {
  content: { mainTitle: string; catalogTitles: any };
  imgOff: string;
  imgOn: string;
  isDropDown: boolean;
  onToggleDropDownHandler: (p: any) => void;
  t: (p: string) => object;
  onSetLessonNameHandler: (p: any) => void;
}

function TrainingSection({
  onToggleDropDownHandler,
  content,
  imgOff,
  imgOn,
  isDropDown,
  t,
  onSetLessonNameHandler,
}: stateProp) {
  const { mainTitle, catalogTitles } = content;

  return (
    <>
      <WrapperCard>
        <WrapperTitleCard
          data-source={mainTitle}
          className="wrapperCatalogCard"
          onClick={onToggleDropDownHandler}
        >
          <RowTitleCard className="rowTitleCatalog">
            <img src={isDropDown ? imgOn : imgOff} alt="" />
            <TitleCardContent> {t(mainTitle)} </TitleCardContent>
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
          {catalogTitles.map(({ id, title, description }: any, idx: number) => (
            <ListItemCardContent
              className={isDropDown ? "active" : ""}
              key={id}
            >
              <ListItemCardLink
                data-source={description}
                onClick={onSetLessonNameHandler}
                className={isDropDown ? "active" : ""}
                to={{
                  pathname: `${learn}/${description}`,
                }}
              >
                {idx + 1}. {t(title)}
              </ListItemCardLink>
            </ListItemCardContent>
          ))}
        </ListCardContent>
      </WrapperCard>
    </>
  );
}

export default withTranslation()(TrainingSection);
