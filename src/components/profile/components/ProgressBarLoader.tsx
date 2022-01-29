import React from "react";
import * as StyledThisComp from "../styles/styled-profile";

interface IProgressBarLoaderProps {
  currentProgress: any;
  allProgress: number;
}

const ProgressBarLoader = ({
  currentProgress,
  allProgress,
}: IProgressBarLoaderProps) => {
  return (
    <StyledThisComp.EmptyProgressBar>
      <StyledThisComp.ProgressBar
        theme={{ currentWidth: currentProgress.length / allProgress * 100  }}
      />
    </StyledThisComp.EmptyProgressBar>
  );
};

export default ProgressBarLoader;