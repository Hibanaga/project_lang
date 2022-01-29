import React from "react";
import * as StyledThisComp from "../styles/styled-profile";
import imageExporter from "../../store/images/imageExporter";

interface ProfileStatProps {
  profileData: any;
  image: string;
}

const ProfileStat = ({ profileData, image }: ProfileStatProps) => {
  const { nickname, email } = profileData;
  const currentImage = imageExporter.filter((item) => item.name === image);
  return (
    <StyledThisComp.ProfileStat>
      <StyledThisComp.ProfileStatWrapper>
        <StyledThisComp.ProfileStatTitle>
          {nickname}
        </StyledThisComp.ProfileStatTitle>
        <StyledThisComp.ProfileStatDescription>
          {email}
        </StyledThisComp.ProfileStatDescription>
      </StyledThisComp.ProfileStatWrapper>
      {currentImage[0].url && (
        <StyledThisComp.ProfileStatImage src={currentImage[0].url} />
      )}
    </StyledThisComp.ProfileStat>
  );
};

export default ProfileStat;