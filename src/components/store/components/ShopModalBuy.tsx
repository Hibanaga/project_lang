import React from 'react';
import Modal from "react-modal";
import * as StyledThisComp from "../styles/styled-store"
import imagesShop from "../images/imageExporter"
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ShopModalCard from './ShopModalCard';
import { imgCoin } from "../../learn/images/imageExport";
Modal.setAppElement("#root");


interface IShopModalBuyProps {
  isSuccessBuy: boolean;
  imageToBuy: string[];
  coin: number;
  t: (prop:string) => string;
  toggleSuccesBuyHandler: () => void;
  onDeleteImageToBuyHandler: (imageName: string) => void;
  clearImageToBuyHandler: () => void;
  onSubmitSuccessBuyHandler: (coinCost: number) => void;
}

export default function ShopModalBuy({
  isSuccessBuy,
  imageToBuy,
  coin,
  t,
  toggleSuccesBuyHandler,
  onDeleteImageToBuyHandler,
  clearImageToBuyHandler,
  onSubmitSuccessBuyHandler,
}: IShopModalBuyProps) {
  const resultImageArr = imagesShop.filter(
    (item) => imageToBuy.indexOf(item.name) > -1
  );

  const totalCost = resultImageArr.reduce((prev: number, item: any) => {
    prev += item.cost;
    return prev;
  }, 0);

  return (
    <Modal
      isOpen={isSuccessBuy}
      onRequestClose={toggleSuccesBuyHandler}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      <StyledThisComp.ModalCloseButton onClick={toggleSuccesBuyHandler}>
        <CloseRoundedIcon />
      </StyledThisComp.ModalCloseButton>
      <StyledThisComp.ModalSuccessBuy>
        <StyledThisComp.ModalSuccessTitle>
          {t("Store.modalShop.shoopingCart")}
        </StyledThisComp.ModalSuccessTitle>

        <StyledThisComp.ModalSuccessItemsWrapper>
          {resultImageArr.map(({ id, url, name, cost }) => (
            <ShopModalCard
              key={id}
              url={url}
              name={name}
              price={cost}
              onDeleteImageToBuyHandler={onDeleteImageToBuyHandler}
            />
          ))}
        </StyledThisComp.ModalSuccessItemsWrapper>

        <StyledThisComp.ResultImageModal>
          <StyledThisComp.ResultCostModal>
            <StyledThisComp.ResultDescription>
              {t("Store.modalShop.shoopingCartTotal")}:
            </StyledThisComp.ResultDescription>

            <StyledThisComp.ShopImageCostWrapper>
              <StyledThisComp.ShopImageTitle>
                {totalCost}
              </StyledThisComp.ShopImageTitle>
              <StyledThisComp.ShopImageRubin src={imgCoin} />
            </StyledThisComp.ShopImageCostWrapper>
          </StyledThisComp.ResultCostModal>

          <StyledThisComp.ActionModal>
            <StyledThisComp.CancelCostModal onClick={clearImageToBuyHandler}>
              {t("Store.modalShop.shoopingCartClear")}
            </StyledThisComp.CancelCostModal>

            <StyledThisComp.SubmitCostModal
              onClick={() => onSubmitSuccessBuyHandler(totalCost)}
              disabled={totalCost > coin}
            >
              {t("Store.modalShop.shoopingCartBuy")}
            </StyledThisComp.SubmitCostModal>
          </StyledThisComp.ActionModal>
        </StyledThisComp.ResultImageModal>
      </StyledThisComp.ModalSuccessBuy>
    </Modal>
  );
}
