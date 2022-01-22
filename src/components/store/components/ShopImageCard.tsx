import React from 'react'
import * as StyledThisComp from "../styles/styled-store"
import { imgCoin } from "../../learn/images/imageExport";
import { useState } from 'react';
import { ReactComponent as AddButtonIMG } from "../images/supports/add-icon.svg";
import { ReactComponent as RemoveButtonIMG } from "../images/supports/remove-icon.svg";

interface IShoImageCardProps {
  url: any;
  name: any;
  price: number;
  isAlreadyBuy: boolean;
  onUpdateImagesToBuyHandler: (imageName: string) => void;
  onDeleteImageToBuyHandler: (imageName: string) => void;
}

export default function ShopImageCard({
  url,
  price,
  name,
  isAlreadyBuy,
  onUpdateImagesToBuyHandler,
  onDeleteImageToBuyHandler,
}: IShoImageCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMouseEnter = () => setIsOpen(true);

  const onMuseLeave = () => setIsOpen(false);

  const buyImageHandler = () => onUpdateImagesToBuyHandler(name);

  return (
    <StyledThisComp.ShopImagesCard
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMuseLeave}
    >
      <StyledThisComp.ShopImage src={url} />
      <StyledThisComp.ShopImageCostWrapper>
        <StyledThisComp.ShopImageTitle>{price}</StyledThisComp.ShopImageTitle>
        <StyledThisComp.ShopImageRubin src={imgCoin} />
      </StyledThisComp.ShopImageCostWrapper>
      <StyledThisComp.HoverShopImage className={isOpen ? "open" : ""}>
        <StyledThisComp.ButtonShopImage onClick={isAlreadyBuy ? ()=>onDeleteImageToBuyHandler(name) : buyImageHandler }>
          {isAlreadyBuy ? <RemoveButtonIMG /> : <AddButtonIMG />}
        </StyledThisComp.ButtonShopImage>
      </StyledThisComp.HoverShopImage>
    </StyledThisComp.ShopImagesCard>
  );
}
