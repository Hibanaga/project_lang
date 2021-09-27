import styled from "styled-components";

const WrapperCard = styled.div`
  width: 30rem;
`;

const WrapperTitleCard = styled.div`
  height: 12rem;
  width: 100%;

  margin-top: 2rem;

  background-color: #fff;
  border: 0.2rem solid #e5e5e5;
  border-radius: 0.7rem;
`;

const RowTitleCard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleCardContent = styled.h1`
  margin: 0;
  font-size: 3rem;

  padding-left: 1.5rem;

  width: 100%;
  text-align: inherit;
  /* text-align: center; */
`;

export { WrapperTitleCard, RowTitleCard, WrapperCard, TitleCardContent };
