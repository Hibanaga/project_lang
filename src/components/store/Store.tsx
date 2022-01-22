import React, {useEffect, useState} from 'react'
import StorePresentation from './StorePresentation'

export default function Store() {
  const [imageToBuy,setImagesToBuy] = useState<string[]>([]);
  const [isSuccessBuy,setIsSuccessBuy] = useState<boolean>(false);

  const updateImagesToBuyHandler = (imageName: string) => {
    setIsSuccessBuy(true);
    setImagesToBuy([...imageToBuy, imageName]);
  }

  const deleteImageToBuyHandler = (imageNameToDelete:string) => {
    setImagesToBuy(imageToBuy.filter((item) => item !== imageNameToDelete));
  }

  const clearImageToBuyHandler = () => setImagesToBuy([]);

  const toggleSuccesBuyHandler = () => setIsSuccessBuy(!isSuccessBuy);


  useEffect(() => {
    imageToBuy.length === 0 && setIsSuccessBuy(false)
  }, [imageToBuy]);


  return (
    <StorePresentation
      imageToBuy={imageToBuy}
      isSuccessBuy={isSuccessBuy}
      onUpdateImagesToBuyHandler={updateImagesToBuyHandler}
      onDeleteImageToBuyHandler={deleteImageToBuyHandler}
      clearImageToBuyHandler={clearImageToBuyHandler}
      toggleSuccesBuyHandler={toggleSuccesBuyHandler}
    />
  );
}
