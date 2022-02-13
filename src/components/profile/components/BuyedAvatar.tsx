import React from "react";
import { withTranslation } from "react-i18next";
import * as StyledThisComp from "../styles/styled-profile";

interface IBuyedAvatarProps {
  url: any;
  name: string;
  selectedProfileImage:any;
  setProfileImageHandler: (prop: string) => void;
  t: (prop:any) => string;
}

const BuyedAvatar = ({
  url,
  name,
  t,
  setProfileImageHandler,
  selectedProfileImage,
}: IBuyedAvatarProps) => {
  return (
    <StyledThisComp.AvatarContainer>
      <StyledThisComp.Avatar src={url} />
      <StyledThisComp.ButtonSelectAvatar
        onClick={() => setProfileImageHandler(name)}
        disabled={name === selectedProfileImage}
      >
        {name === selectedProfileImage
          ? t("profileAdditional.SelectedImage")
          : t("profileAdditional.selectImage")}
      </StyledThisComp.ButtonSelectAvatar>
    </StyledThisComp.AvatarContainer>
  );
};

export default withTranslation()(BuyedAvatar);