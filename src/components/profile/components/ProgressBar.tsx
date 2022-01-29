import React from "react";
import * as StyledThisComp from "../styles/styled-profile";
import ProgressBarLoader from "./ProgressBarLoader";

interface IProgressBarProps {
  title: string;
  currentProgress: number;
  allProgress: any;
}

const ProgressBar = ({
  title,
  currentProgress,
  allProgress,
}: IProgressBarProps) => {
  return (
    <StyledThisComp.ProgressBarWrapper>
      <StyledThisComp.ProgressBarDescription>
        {title}
      </StyledThisComp.ProgressBarDescription>
      <ProgressBarLoader
        currentProgress={currentProgress}
        allProgress={allProgress[0].result}
      />
    </StyledThisComp.ProgressBarWrapper>
  );
};

export default ProgressBar;