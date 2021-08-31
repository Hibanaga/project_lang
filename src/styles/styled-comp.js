import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  width: 290px;
  height: 100%;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 2.4rem;
  text-align: center;
  width: 80%;
  margin: 2rem auto;
  margin-bottom: 3rem;
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

  width: 90%;
  margin: 0.5rem auto;

  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, to }) =>
    to === "/register" ? theme.background.signUp : theme.background.logIn};
  border-radius: 15px;
  border-bottom: 0.5rem solid
    ${({ theme, to }) =>
      to === "/register" ? theme.border.signUp : theme.border.logIn};

  font-size: 2rem;
  color: #fff;

  transition: 0.3s;

  &:last-child {
    border: 0.2rem solid ${({ theme }) => theme.border.logIn};
    border-bottom: 0.5rem solid
      ${({ theme, to }) =>
        to === "/register" ? theme.border.signUp : theme.border.logIn};

    margin-bottom: 2rem;
  }

  &:hover {
    filter: brightness(1.1);
    color: ${({ theme }) => theme.color};
  }
`;

const IMG_BACK = styled.img`
  width: 30rem;
  margin: 0 auto;
  display: block;
`;

const SubTitle = styled.h2`
  color: #000;
  text-align: center;
  margin: 2rem auto;
  font-size: 2rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 25rem;
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
