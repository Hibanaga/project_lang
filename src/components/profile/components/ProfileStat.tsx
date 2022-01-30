import React from "react";
import * as StyledThisComp from "../styles/styled-profile";
import imageExporter from "../../store/images/imageExporter";
import defaultImage from "../images/defaultImage.png";

interface ProfileStatProps {
  profileData: any;
  image: string;
}

const ProfileStat = ({ profileData, image }: ProfileStatProps) => {
  const { nickname, email } = profileData;
  const currentImage = image ? imageExporter.filter((item) => item.name === image)[0].url : defaultImage;
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
      <StyledThisComp.ProfileStatImage src={currentImage } />
    </StyledThisComp.ProfileStat>
  );
};

export default ProfileStat;