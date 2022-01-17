import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 1140px) {
    width: 960px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1140px) {
    justify-content: space-between;
  }
`;

const Header = styled.section`
  max-height: 108rem;
  max-width: 100%;
  overflow: hidden;
  //   background-color: #235390;
  background-color: #235390;
  background-image: url(${({ theme }) => theme});
  background-size: cover;
  background-position: center center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.6rem;
  text-align: center;
  width: 80%;
  margin: 2rem auto;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
`;

const Description = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 145%;
  color: #777;
`;

const Link = styled(NavLink)`
  user-select: none;
  outline: none;
  cursor: default;
  border: none;

  width: 27rem;
  margin: 0.5rem auto;

  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  /* { theme, to }
  to === "/register" ? theme.background.signUp : theme.background.logIn} */
  background-color: ${({ theme, title }) =>
    title === "register page"
      ? theme.background.signUp
      : theme.background.logIn};

  border-radius: 15px;
  border-bottom: 0.5rem solid
    ${({ theme, title }) =>
      title === "register page" ? theme.border.signUp : theme.border.logIn};

  font-size: 2rem;
  color: #fff;

  transition: 0.3s;

  &:last-child {
    border: 0.2rem solid ${({ theme }) => theme.border.logIn};
    border-bottom: 0.5rem solid
      ${({ theme, title }) =>
        title === "register page" ? theme.border.signUp : theme.border.logIn};
    margin-bottom: 2rem;
  }

  &:hover {
    filter: brightness(1.1);
    color: ${({ theme }) => theme.color};
  }

  &:active {
    border-bottom: 0.2rem solid
      ${({ theme, title }) =>
        title === "register page" ? theme.border.signUp : theme.border.logIn};
  }

  @media (min-width: 768px) {
    cursor: pointer;
  }
`;

const IMG_BACK = styled.img`
  width: 30rem;
  display: block;

  @media (min-width: 760px) {
    width: 35rem;
    margin: 0 auto;
  }
`;

const SubTitle = styled.h2`
  color: #000;
  text-align: center;
  margin: 2rem auto;
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 25rem;

  img {
    position: inherit;
  }

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1140px) {
    width: 35%;
  }
`;

export {
  Wrapper,
  Title,
  Link,
  SubTitle,
  Row,
  Header,
  IMG_BACK,
  Card,
  Description,
};
