import React from 'react';
import * as StyledThisComp from "../styles/styled-store"
import ShopImageCard from './ShopImageCard';


interface IShopProps {
  arrImages: any;
  imageToBuy: string[];
  images: string[];
  onUpdateImagesToBuyHandler: (imageName: string) => void;
  onDeleteImageToBuyHandler: (imageName: string) => void;
}

export default function ShopImages({
  arrImages,
  imageToBuy,
   images,
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
          isAlreadyInShoopingCard={
            imageToBuy.findIndex((item) => item === name) > -1
          }
          isAleadyBuy={images.findIndex((item) => item === name) > -1}
          onUpdateImagesToBuyHandler={onUpdateImagesToBuyHandler}
          onDeleteImageToBuyHandler={onDeleteImageToBuyHandler}
        />
      ))}
    </StyledThisComp.ShopImagesContainer>
  );
}
