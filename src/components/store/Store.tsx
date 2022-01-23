import {connect} from "react-redux"
import React, {useEffect, useState} from 'react'
import StorePresentation from './StorePresentation'
import { setCountCoin, updateImages } from "../../redux/userInfo/userActions";
import instance from "../../service/AppService";

interface IStoreProps {
  coin: number;
  clientID: string;
  images: string[];
  updateImagesHandler: (images: string[]) => void;
  setCoinHandler: (coin: number) => void;
}

function Store({
  coin,
  clientID,
  images,
  updateImagesHandler,
  setCoinHandler,
}: IStoreProps) {
  const [imageToBuy, setImagesToBuy] = useState<string[]>([]);
  const [isSuccessBuy, setIsSuccessBuy] = useState<boolean>(false);

  const updateImagesToBuyHandler = (imageName: string) => {
    setIsSuccessBuy(true);
    setImagesToBuy([...imageToBuy, imageName]);
  };

  const deleteImageToBuyHandler = (imageNameToDelete: string) => {
    setImagesToBuy(imageToBuy.filter((item) => item !== imageNameToDelete));
  };

  const clearImageToBuyHandler = () => setImagesToBuy([]);

  const toggleSuccesBuyHandler = () => setIsSuccessBuy(!isSuccessBuy);

  const submitSuccessBuyHandler = (coinCost: number) => {
    const data = {
      clientID:clientID,
      coin: coin - coinCost,
      images: imageToBuy,
    };


    instance.updateImagesUser(data).then((data) => {
      updateImagesHandler(data.images);
      setCoinHandler(data.coin);

      setImagesToBuy([]);
      setIsSuccessBuy(false);
    })
  };

  useEffect(() => {
    imageToBuy.length === 0 && setIsSuccessBuy(false);
  }, [imageToBuy]);

  return (
    <StorePresentation
      imageToBuy={imageToBuy}
      coin={coin}
      isSuccessBuy={isSuccessBuy}
      images={images}
      onUpdateImagesToBuyHandler={updateImagesToBuyHandler}
      onDeleteImageToBuyHandler={deleteImageToBuyHandler}
      clearImageToBuyHandler={clearImageToBuyHandler}
      toggleSuccesBuyHandler={toggleSuccesBuyHandler}
      onSubmitSuccessBuyHandler={submitSuccessBuyHandler}
    />
  );
}



const mapStateToProps = ({ profile }: any) => ({
  coin: profile.coin,
  clientID: profile.clientID,
  images: profile.images,
});

const mapDispatchToProps = {
  setCoinHandler: setCountCoin,
  updateImagesHandler: updateImages
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
