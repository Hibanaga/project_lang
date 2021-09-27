import styled from "styled-components";

const WrapperCard = styled.div`
  width: 30rem;

  cursor: default;
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

const ListCardContent = styled.ul`
  width: 26rem;

  transition: 0.2s;

  border-color: ${({ className }) =>
    className === "active" ? "#e5e5e5" : "transparent"};
  border-style: solid;

  border-width: 0.2rem;
  height: ${({ className }) => (className === "active" ? "16rem" : "0rem")};

  padding-top: -0.5rem;

  border-top: none;

  border-bottom-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ListItemCardContent = styled.li`
  list-style: none;

  font-size: 2rem;

  text-align: center;
  color: ${({ className }) =>
    className === "active" ? "#000" : "transparent"};

  transform: ${({ className }) =>
    className === "active" ? "translate(0px, 0px)" : "translate(0px, -15px)"};
  transition: 0.2s;
  transition-delay: ${({ className }) =>
    className === "active" ? "0.2s" : "0s"};

  padding: 0.3rem 0;
`;

export {
  WrapperTitleCard,
  RowTitleCard,
  WrapperCard,
  TitleCardContent,
  ListCardContent,
  ListItemCardContent,
};
