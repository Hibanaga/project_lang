import styled from "styled-components";

const TitleQuestion = styled.h1`
  text-align: center;
  margin-top: 1rem;
`;

const MessageBoxContainer = styled.div`
  display: flex;

  align-items: center;

  /* margin-bottom: 1.5rem; */
  margin: 2rem auto;
`;

const BubbleMessageBox = styled.div`
  position: relative;
  background: #fff;
  border: 0.3rem solid #1cb0f6;
  border-radius: 0.4em;
  margin-left: 1rem;
  border-radius: 15px;
  /* width: 15rem; */

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 18px solid transparent;
    border-right-color: #1cb0f6;
    border-left: 0;
    margin-top: -18px;
    margin-left: -18px;
  }
`;

const SubTitleSearchWord = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 2rem auto;
`;

const WrapperCardSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardSelect = styled.div`
  border: 0.2rem solid #e5e5e5;
  border-bottom-width: 0.4rem;
  border-right-width: 0.4rem;
  border-radius: 7px;

  width: 45%;
  /* height: 20vh; */
  margin-top: 1rem;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }

  &.active {
    /* background-color: blue; */
    color: #1899d6;
    border-color: #1899d6;
    background-color: #02afff44;
    /* border: 0.2rem solid #1899d6; */
  }
`;

const DescriptionCardSelect = styled.span`
  font-size: 1.6rem;
  display: block;
  text-align: center;

  margin: 1rem auto;
`;

const FormSubmitCardLesson = styled.form`
  position: fixed;

  bottom: 0;
  left: 0;

  height: ${({ theme }) => (theme.message === "" ? "10rem" : "16rem")};
  background-color: ${({ theme }) =>
    theme.message === ""
      ? "#fff"
      : theme.message === "success"
      ? "#d4ffa2"
      : "#f9a0a0"};
  width: 100%;
  transition: 0.5s;

  border-top: 0.2rem solid #e5e5e5;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
`;

const FinalMessageConfirm = styled.h2`
  /* position: absolute;
  top: 10%;
  left: 10%; */
  color: ${({ theme }) =>
    theme.message === "success" ? "#58a700" : "#ea2b2b"};

  font-size: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const CorrectlyMessageConfirm = styled.span`
  font-size: 1.6rem;
  /* font-weight: 600; */

  padding-left: 1rem;
  color: ${({ theme }) => theme.message === "error" && "#ea2b2b"};
`;

export {
  TitleQuestion,
  CardSelect,
  WrapperCardSelect,
  SubTitleSearchWord,
  DescriptionCardSelect,
  FormSubmitCardLesson,
  FinalMessageConfirm,
  CorrectlyMessageConfirm,
  MessageBoxContainer,
  BubbleMessageBox,
};
