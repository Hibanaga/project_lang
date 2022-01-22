import React from 'react';
import * as StyledThisComp from "../styles/styled-store"
import ShopImageCard from './ShopImageCard';


interface IShopProps {
  arrImages: any;
  imageToBuy: string[];
  onUpdateImagesToBuyHandler: (imageName: string) => void;
  onDeleteImageToBuyHandler: (imageName: string) => void;
}

export default function ShopImages({
  arrImages,
  imageToBuy,
  onUpdateImagesToBuyHandler,
  onDeleteImageToBuyHandler,
}: IShopProps) {
  return (
    <StyledThisComp.ShopImagesContainer>
      {arrImages.map(({ id, url, name, cost }: any) => (
        <ShopImageCard
          key={id}
          url={url}
          name={name}
          price={cost}
          isAlreadyBuy={imageToBuy.findIndex((item) => item === name) > -1}
          onUpdateImagesToBuyHandler={onUpdateImagesToBuyHandler}
          onDeleteImageToBuyHandler={onDeleteImageToBuyHandler}
        />
      ))}
    </StyledThisComp.ShopImagesContainer>
  );
}
