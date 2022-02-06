import React from 'react'
import { withTranslation } from 'react-i18next'
import { Wrapper } from '../../styles/styled-comp';
import { TitleStory, LineMessageStory } from "../story/styles/story-comp";
import * as StyledThisComp from "./styles/styled-store"
import firstPack from "./images/firstPack/firstPack"
import secondPack from "./images/secondPack/secondPack"
import ShopImages from './components/ShopImages';
import ShopModalBuy from './components/ShopModalBuy';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



interface IStoryPresentationProps {
  isSuccessBuy: boolean;
  imageToBuy: string[];
  coin: number;
  images: string[];
  t: (prop: string) => string;
  onUpdateImagesToBuyHandler: (imageName: string) => void;
  onDeleteImageToBuyHandler: (imageName: string) => void;
  toggleSuccesBuyHandler: () => void;
  clearImageToBuyHandler: () => void;
  onSubmitSuccessBuyHandler: (coinCost: number) => void;
}


function StorePresentation({
  isSuccessBuy,
  imageToBuy,
  coin,
  t,
  images,
  toggleSuccesBuyHandler,
  onDeleteImageToBuyHandler,
  onUpdateImagesToBuyHandler,
  clearImageToBuyHandler,
  onSubmitSuccessBuyHandler,
}: IStoryPresentationProps) {
  return (
    <StyledThisComp.ArticleStore>
      <Wrapper>
        <TitleStory>{t("Store.titles.storeTitle")}</TitleStory>
        <StyledThisComp.SutTitleStore>
          {t("Store.titles.storeDescription")}
        </StyledThisComp.SutTitleStore>

        <LineMessageStory>{t("Story.setStories.set")} 1</LineMessageStory>
        <ShopImages
          arrImages={firstPack}
          imageToBuy={imageToBuy}
          images={images}
          onUpdateImagesToBuyHandler={onUpdateImagesToBuyHandler}
          onDeleteImageToBuyHandler={onDeleteImageToBuyHandler}
        />
        <LineMessageStory>{t("Story.setStories.set")} 2</LineMessageStory>
        <ShopImages
          arrImages={secondPack}
          imageToBuy={imageToBuy}
          images={images}
          onUpdateImagesToBuyHandler={onUpdateImagesToBuyHandler}
          onDeleteImageToBuyHandler={onDeleteImageToBuyHandler}
        />

        <ShopModalBuy
          t={t}
          isSuccessBuy={isSuccessBuy}
          coin={Number(coin)}
          imageToBuy={imageToBuy}
          toggleSuccesBuyHandler={toggleSuccesBuyHandler}
          onDeleteImageToBuyHandler={onDeleteImageToBuyHandler}
          clearImageToBuyHandler={clearImageToBuyHandler}
          onSubmitSuccessBuyHandler={onSubmitSuccessBuyHandler}
        />
      </Wrapper>

      {imageToBuy.length > 0 && (
        <StyledThisComp.ShoopingCart onClick={toggleSuccesBuyHandler}>
          <ShoppingCartIcon />
        </StyledThisComp.ShoopingCart>
      )}
    </StyledThisComp.ArticleStore>
  );
}


export default withTranslation()(StorePresentation);
