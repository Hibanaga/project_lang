import styled from "styled-components";

const TitleQuestion = styled.h1`
  text-align: center;
  margin-top: 1rem;
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
      ? "green"
      : "red"};
  width: 100%;
  transition: 0.2s height;

  border-top: 0.2rem solid #e5e5e5;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export {
  TitleQuestion,
  CardSelect,
  WrapperCardSelect,
  SubTitleSearchWord,
  DescriptionCardSelect,
  FormSubmitCardLesson,
};
