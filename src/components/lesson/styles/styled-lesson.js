import styled from "styled-components";

const TitleQuestion = styled.h1`
  text-align: center;
  margin-top: 1rem;

  @media (min-width: 375px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 3rem;
  }
`;

const MessageBoxContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  /* margin-bottom: 1.5rem; */
  margin: 2rem auto;

  @media (min-width: 768px) {
    margin: 4rem auto;
  }
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
  justify-content: ${({ theme }) =>
    theme.type === "A" ? "space-evenly" : "inherit"};

  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }
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

  @media (min-width: 475px) {
    width: 190px;
  }

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

const CardSelectWord = styled.button`
  padding: 0.5rem 1rem;

  background-color: transparent;
  border: 0.2rem solid #e5e5e5;
  color: #4b4b4b;

  border-right-width: 0.4rem;
  border-bottom-width: 0.4rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  border-radius: 7px;
  font-weight: 600;
  display: block;

  cursor: pointer;

  &:disabled {
    background-color: #e5e5e5;
    color: #e5e5e5;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const DescriptionCardSelect = styled.span`
  font-size: 1.6rem;
  display: block;
  text-align: center;

  margin: 1rem auto;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
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
  text-align: center;
  text-transform: uppercase;
`;

const CorrectlyMessageConfirm = styled.span`
  font-size: 1.6rem;
  /* font-weight: 600; */

  padding-left: 1rem;
  color: ${({ theme }) => theme.message === "error" && "#ea2b2b"};
`;

const ContainerTextBox = styled.div`
  height: 15rem;
  /* border: 1px solid #333; */

  position: relative;

  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }
`;

const ContainterLineTextBox = styled.span`
  border-radius: 7px;
  width: 100%;
  display: block;
  position: absolute;

  top: 57%;
  border-bottom: 0.2rem solid #e5e5e5;

  &:first-child {
    top: 27%;
    border-bottom: 0.2rem solid #e5e5e5;
  }

  &.last_item {
    top: 87%;
    background-color: #333;
    border-bottom: 0.2rem solid #e5e5e5;
  }
`;

const TextAreaForm = styled.textarea`
  width: 100%;
  height: 20rem;

  resize: none;
  border-radius: 10px;

  padding: 1rem;
  font-size: 15px;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 70%;
  }
`;

const ProgressBar = styled.div`
  border-radius: 25px;
  transition: 0.3s;

  height: 2.5rem;
  background-color: rgb(102, 204, 0);
  width: ${({ theme }) => `${theme.currWidth}%`};
`;

const ProgressInlineBar = styled.div`
  position: absolute;
  left: 8%;
  transition: 0.3s;

  bottom: 30%;

  height: 0.5rem;
  border-radius: 5px;

  width: ${({ theme }) => `${theme.currWidth - 20}%`};
  background-color: rgba(127, 250, 4, 0.5);
`;

const CountScore = styled.span`
  color: rgb(102, 204, 0);
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
  ContainerTextBox,
  ContainterLineTextBox,
  CardSelectWord,
  TextAreaForm,
  ProgressBar,
  ProgressInlineBar,
  CountScore,
};
