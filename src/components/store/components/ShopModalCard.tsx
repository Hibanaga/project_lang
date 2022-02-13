import React from 'react';
import * as StyledThisComp from "../styles/styled-store";
import { imgCoin } from "../../learn/images/imageExport";
import { withTranslation } from 'react-i18next';

interface IShopModalCardProps {
  name: string;
  url: any;
  price: number;
  onDeleteImageToBuyHandler: (imageName: string) => void;
  t: (prop:any) => string
  
}

 function ShopModalCard({
  price,
  url,
  name,
  t,
  onDeleteImageToBuyHandler,
}: IShopModalCardProps) {

  return (
    <StyledThisComp.ShopImageCardWrapper>
      <StyledThisComp.ShopImageModal src={url} />

      <StyledThisComp.ActionItemModal>
        <StyledThisComp.ShopImageCostWrapper>
          <StyledThisComp.ShopImageTitle>{price}</StyledThisComp.ShopImageTitle>
          <StyledThisComp.ShopImageRubin src={imgCoin} />
        </StyledThisComp.ShopImageCostWrapper>

        <StyledThisComp.DeleteItemModal
          onClick={() => onDeleteImageToBuyHandler(name)}
        >
          {t("profileAdditional.removeText")}
        </StyledThisComp.DeleteItemModal>
      </StyledThisComp.ActionItemModal>
    </StyledThisComp.ShopImageCardWrapper>
  );
}

export default withTranslation()(ShopModalCard);
