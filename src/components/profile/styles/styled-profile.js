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

export const ProfileStatImage = styled.img``;

export const ProgressLessonsWrapper = styled.div``;

export const ProgressLessonsProgressTitle = styled.h2`
  font-size: 2.5rem;

  margin: 1.5rem 0.5rem 1.5rem 0.2rem;
`;

export const ProgressLessonsCategory = styled.div``;

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
