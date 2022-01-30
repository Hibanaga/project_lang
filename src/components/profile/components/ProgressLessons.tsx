import React from "react";
import * as StyledThisComp from "../styles/styled-profile";
import progressAssets from "../../../assets/progress.json";
import ProgressBar from "./ProgressBar";
import { convertToArray } from "../utils/convertToArray";



interface ProgressLessonsProps {
  progress:any
}

const ProgressLessons = ({ progress }: ProgressLessonsProps) => {
  const { lessons } = progressAssets;
  const currentProgress = convertToArray(progress);
  return (
    <StyledThisComp.ProgressLessonsWrapper>
      <StyledThisComp.ProgressLessonsProgressTitle>
        Прогресс
      </StyledThisComp.ProgressLessonsProgressTitle>
      <StyledThisComp.ProgressLessonsCategory>
        {currentProgress.map(({ title, progress }, idx) => (
          <ProgressBar
            key={idx}
            title={title}
            currentProgress={progress}
            allProgress={lessons.filter((item) => item.name === title)}
          />
        ))}
      </StyledThisComp.ProgressLessonsCategory>
    </StyledThisComp.ProgressLessonsWrapper>
  );
};

export default ProgressLessons;