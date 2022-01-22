import React from 'react';
import * as StyledThisComp from "../styles/styled-store";
import { imgCoin } from "../../learn/images/imageExport";

interface IShopModalCardProps {
  name: string;
  url: any;
  price: number;
  onDeleteImageToBuyHandler: (imageName: string) => void;
  
}

export default function ShopModalCard({
  price,
  url,
  name,
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
          удалить
        </StyledThisComp.DeleteItemModal>
      </StyledThisComp.ActionItemModal>
    </StyledThisComp.ShopImageCardWrapper>
  );
}
