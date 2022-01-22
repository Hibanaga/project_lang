import styled from "styled-components";

export const ArticleStore = styled.article`
  margin-bottom: 7rem;
  min-height: 530px;

  position: relative;
`;

export const SutTitleStore = styled.h2`
  color: #4b4b4b;
  font-size: 1.6rem;
  text-align: center;
  line-height: 145%;
  margin: 1.5rem auto;
`;

export const ShopImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;
`;

export const ShopImagesCard = styled.div`
  padding: 1rem 0.5rem;
  margin: 0.7rem;
  position: relative;
  transition: 300ms;

  &:hover .sc-cuWdqJ .lRkBu {
    visibility: visible;
  }
`;

export const ShopImage = styled.img``;

export const ShopImageCostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShopImageTitle = styled.span`
  font-size: 2rem;
`;

export const ShopImageRubin = styled.img`
  width: 3rem;
`;

export const HoverShopImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 7;
  transition: 300ms ease-in;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;

  &.open {
    opacity: 1;
  }
`;

export const ButtonShopImage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 7;

  & svg {
    font-size: 3rem;
    width: 5rem;
    height: 5rem;

    path {
      fill: #009933;
    }
  }
`;

export const ModalSuccessBuy = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 2%;
  top: 2%;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;

  & svg {
    font-size: 3rem;
    color: #009933;
  }
`;

export const ModalSuccessTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`;

export const ActionItemModal = styled.div`
  margin-right: 1rem;
`;

export const ModalSuccessItemsWrapper = styled.div`
  margin-top: 1rem;
  height: 200px;
  overflow-y: scroll;
`;

export const ShopImageCardWrapper = styled.div`
  display: flext;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.5rem;
`;

export const ShopImageModal = styled.img`
  width: 5rem;
`;

export const ResultImageModal = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const ResultCostModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ResultDescription = styled.span`
  font-size: 2rem;
`;

export const ActionModal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CancelCostModal = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 7px;
  font-weight: 600;

  background-color: #eb1e1e;
  color: #fff;
  border: 2px solid rgb(209, 209, 209);
  border-bottom: 0.4rem solid rgb(209, 209, 209);
`;

export const SubmitCostModal = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  font-weight: 600;
  color: #fff;

  background-color: #58cc02;
  border: 2px solid rgb(209, 209, 209);
  border-bottom: 0.4rem solid rgb(209, 209, 209);
`;

export const DeleteItemModal = styled.button`
  width: 6rem;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;

  transition: 300ms ease-in;
  background-color: rgb(209, 209, 209);
  color: #000;

  border-radius: 3px;
  padding: 0.3rem 0.7rem;

  &:hover {
    background-color: #eb1e1e;
    color: #fff;
  }
`;

export const ShoopingCart = styled.button`
  position: fixed;
  z-index: 8;
  outline: none;
  border: none;
  cursor: pointer;

  width: 7rem;
  height: 7rem;

  border-radius: 50%;
  background-color: #fafafa;
  border: 0.2rem solid rgb(209, 209, 209);

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 3.5rem;
    color: #58cc02;
  }

  bottom: 15%;
  right: 2%;
`;
