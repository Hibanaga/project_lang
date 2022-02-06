import React from "react";
import * as StyledThisComp from "../styles/styled-profile";
import progressAssets from "../../../assets/progress.json";
import ProgressBar from "./ProgressBar";
import { convertToArray } from "../utils/convertToArray";



interface ProgressLessonsProps {
  progress: any;
  t: (prop: any) => string;
}

const ProgressLessons = ({ t,progress }: ProgressLessonsProps) => {
  const { lessons } = progressAssets;
  const currentProgress = convertToArray(progress);
  return (
    <StyledThisComp.ProgressLessonsWrapper>
      <StyledThisComp.ProgressLessonsProgressTitle>
          {t("Profile.profileProgress")}
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