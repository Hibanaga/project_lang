import styled from "styled-components";

const TitleStory = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-top: 2rem;

  font-weight: 700;
  color: #4b4b4b;
`;

const SubTitleStory = styled.h2`
  color: #4b4b4b;

  font-size: 1.6rem;
  text-align: center;
  line-height: 145%;
  width: 80%;
  margin: 1.5rem auto;
`;

const LineMessageStory = styled.div`
  font-size: 2rem;
  margin: 0;
  overflow-x: hidden;
  padding-bottom: 0;
  border-radius: 0;
  box-shadow: none;

  display: flex;
  align-items: center;

  white-space: nowrap;
  color: #4b4b4b;

  margin-top: 2rem;
  font-weight: 700;

  &::before {
    content: "";
    background: #e5e5e5;
    height: 2px;
    width: 40%;
    display: inline-block;
    margin-right: 1rem;
  }

  &::after {
    content: "";
    background: #e5e5e5;
    height: 2px;
    width: 40%;
    display: inline-block;
    margin-left: 1rem;
  }
`;

const CardStory = styled.div`
  border-radius: 7px;
  background: none;

  margin-top: 2rem;
`;

const WrapperCardStoryIMG = styled.div`
  transition: 0.3s;
  background-color: ${({ theme }) =>
    theme.isAlreadyComplete
      ? "#5acc02a6"
      : theme.isBlocked
      ? "#dbdbdb"
      : "#fff"};
  border: 0.2rem solid
    ${({ theme }) =>
      theme.isAlreadyComplete
        ? "#58cc02"
        : theme.isBlocked
        ? "#929292"
        : "#a5a5a5"};
  border-bottom-width: 0.4rem;
  border-radius: 12px;

  cursor: ${({ theme }) =>
    theme.isAlreadyComplete
      ? "pointer"
      : theme.isBlocked
      ? "normal"
      : "pointer"};

  /* pointer-events: ${({ theme }) => (theme.isBlocked ? "none" : "auto")}; */

  position: relative;

  width: 18rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) =>
      theme.isAlreadyOpen ? " #1cb1f628" : "none"};
  }

  &:hover .imgCardCatalog {
    transition: 0.3s;

    filter: ${({ theme }) => (theme.isAlreadyOpen ? "blur(3px)" : "blur(0px)")};
  }

  &:hover .img_playHidden {
    transition: 0.3s;

    visibility: ${({ theme }) => (theme.isAlreadyOpen ? "visible" : "hidden")};
    opacity: ${({ theme }) => (theme.isAlreadyOpen ? ".9" : "0")};
  }
`;

const ImgCardStory = styled.img`
  transition: grayscale 0.5s;

  filter: ${({ theme }) =>
    theme.isAlreadyComplete
      ? "grayscale(0%)"
      : theme.isBlocked === true
      ? "grayscale(100%)"
      : "grayscale(0%)"};
`;

const SubTitleCardStory = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  padding-top: 1rem;
`;

const VariantAnswerCardStory = styled.button`
  display: block;
  width: 80%;
  margin: 1rem auto;

  padding: 1.3rem 1rem;
  background-color: #fff;
  color: #333;
  border: 0.2rem solid #a5a5a5;

  border-bottom-width: 0.4rem;
  border-radius: 9px;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f3f3f3;
  }

  &:disabled {
    background-color: #f3f3f3;
  }

  &.active {
    background-color: ${({ theme }) =>
      theme.isTrueVariant ? "#5acc02a9" : "rgba(255, 0, 0, 0.492)"};
    border-color: ${({ theme }) =>
      theme.isTrueVariant ? "#58cc02" : "rgba(196, 0, 0, 0.492)"};

    &:disabled {
      background-color: none;
    }
  }
`;

const RowVariantAnswer = styled.div`
  margin-bottom: 10rem;
  /* ${({ theme }) => (theme.isNowSelected ? "0" : "10rem")} */
  color: #1cb0f6;
`;

const CloseWindowButton = styled.button`
  cursor: pointer;

  svg {
    font-size: 3.5rem;
    color: #1cb0f6;
  }
`;

const ResultMessage = styled.span`
  display: block;
  font-size: 1.8rem;
  font-weight: 600;
  color: #58cc02;
  text-align: center;
  margin: 1rem auto;
`;

export {
  TitleStory,
  SubTitleStory,
  LineMessageStory,
  CardStory,
  WrapperCardStoryIMG,
  SubTitleCardStory,
  ImgCardStory,
  VariantAnswerCardStory,
  RowVariantAnswer,
  CloseWindowButton,
  ResultMessage,
};
