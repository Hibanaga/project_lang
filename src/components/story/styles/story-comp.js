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
  background-color: ${({ theme }) => (theme.isBlocked ? "#dbdbdb" : "#fff")};
  border: 0.2rem solid
    ${({ theme }) => (theme.isBlocked ? "#929292" : "#a5a5a5")};
  border-bottom-width: 0.4rem;
  border-radius: 12px;

  cursor: ${({ theme }) => (theme.isBlocked ? "normal" : "pointer")};

  width: 18rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgCardStory = styled.img`
  filter: ${({ theme }) =>
    theme.isBlocked === true ? "grayscale(100%)" : "none"};
`;

const SubTitleCardStory = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  padding-top: 1rem;
`;

export {
  TitleStory,
  SubTitleStory,
  LineMessageStory,
  CardStory,
  WrapperCardStoryIMG,
  SubTitleCardStory,
  ImgCardStory,
};
