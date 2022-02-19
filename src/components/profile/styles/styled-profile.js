import styled from "styled-components";

export const RowProfile = styled.div``;

export const ProfileStat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 2rem;
`;

export const ProfileStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProfileStatTitle = styled.h2`
  font-size: 3.5rem;
  padding-bottom: 0.7rem;
`;

export const ProfileStatDescription = styled.span`
  font-size: 1.6rem;
`;

export const ProfileStatImage = styled.img`
  width: 72px;
`;

export const ProgressLessonsWrapper = styled.div``;

export const ProgressLessonsProgressTitle = styled.h2`
  font-size: 2.3rem;
  margin: 3rem 0.5rem 1.5rem 0.2rem;
`;

export const ProgressLessonsCategory = styled.div`
  margin-top: 2rem;
`;

export const ProgressLessonWrapper = styled.div``;

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const ProgressBarDescription = styled.h3`
  margin-right: 1.5rem;
  font-size: 1.7rem;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.currentWidth + "%"};
  border-radius: 5rem;
  background-color: #58cc02;
`;

export const EmptyProgressBar = styled.div`
  height: 3rem;
  width: 16rem;
  background-color: #e5e5e5;
  border-radius: 5rem;
`;

export const BuyAvatarWrapper = styled.div``;

export const AvatarsWrapper = styled.div`
  margin-top: 2rem;

  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; */
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;

export const Avatar = styled.img``;

export const ButtonSelectAvatar = styled.button`
  font-size: 1.8rem;
  padding: 0.7rem 1.5rem;
  border-radius: 7px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #6fce03;
  border: 0.2rem solid #58a700;
  border-bottom: 0.4rem solid #58a700;
  border-radius: 15px;
  background-color: #58cc02;

  &:disabled {
    background-color: #a6a6a6;
    border: 2px solid rgb(209, 209, 209);
    border-bottom: 0.4rem solid rgb(209, 209, 209);
  }
`;

export const ExitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 3rem 0 8rem 0;

  @media (min-width: 768px) {
    margin: 3rem auto 8rem auto;
    width: 40rem;
  }
`;

export const ExitButton = styled.button`
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
  padding: 0.7rem 3.5rem;
  width: 80%;
  border-radius: 15px;
  outline: none;
  border: none;
  background-color: #6fce03;
  border: 0.2rem solid #58a700;
  border-bottom: 0.4rem solid #58a700;
  background-color: #58cc02;
`;
