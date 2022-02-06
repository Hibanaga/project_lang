import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import instance from "../../service/AppService";
import useLocalForge from "./hooks/useLocalForge";
import ProfilePresentaiton from "./ProfilePresentaiton";
import {home} from "../../router/routes";
import {
  setAuthClientID,
  setFirstAuth,
  setCountCoin,
  setCountCrown,
  setCurrentProgress,
  setProgressStory,
  setImages,
} from "../../redux/userInfo/userActions";

interface IProfileProps {
  t: (prop: any) => string;
  updateClientID: (prop: any) => void;
  updateFirstAuth: (prop: any) => void;
  restoreCoinHandler: (p: any) => void;
  restoreCrownHandler: (p: any) => void;
  restoreCurrentProgressHandler: (p: any) => void;
  restoreCurrentProgressStoryHandler: (p: any) => void;
  restoreCurrentImagesHandler: (p: any) => void;
  profile: any;
}

function Profile({
  t,
  profile,
  updateFirstAuth,
  updateClientID,
  restoreCoinHandler,
    restoreCrownHandler,
    restoreCurrentProgressHandler,
    restoreCurrentProgressStoryHandler,
    restoreCurrentImagesHandler,
}:
IProfileProps) {
  const [profileData, setProfileData] = useState({});
  const [isAlreadyRedirectToHome, setAlreadyRedirectToHome] = useState(false);
  const [selectedProfileImage, put,removeProfileImage] = useLocalForge("profile", "");
  const [ , ,remove] = useLocalForge("loginID");

  const item =
    selectedProfileImage &&
    profile.images.filter(
      (item: string) => item.indexOf(selectedProfileImage) > -1
    ).length;


  useEffect(() => {
    if (selectedProfileImage && item === 0) {
      removeProfileImage();
    }
  }, [selectedProfileImage, item, removeProfileImage]);

  useEffect(() => {
    instance
      .getProfile(profile.clientID)
      .then((data) => setProfileData({ ...data }));
  }, [profile.clientID]);

  const setProfileImageHandler = (imageName: string) => {
    put(imageName);
  };

  const exitProfileHandler = () => {
    remove();
    // updateClientID("");
    setAlreadyRedirectToHome(true);
    // updateFirstAuth(false);
    // restoreCoinHandler(0)
    // restoreCrownHandler(0)
    // restoreCurrentProgressHandler("")
    // restoreCurrentProgressStoryHandler([])
    // restoreCurrentImagesHandler([])

    if (typeof window !== "undefined"){

    }
  };

  return (
    <>
      {isAlreadyRedirectToHome && <Redirect to={home} />}

      <ProfilePresentaiton
        selectedProfileImage={selectedProfileImage}
        setProfileImageHandler={setProfileImageHandler}
        exitProfileHandler={exitProfileHandler}
        profile={profile}
        profileData={profileData}
      />
    </>
  );
}

const mapStateToProps = (state:any) => ({
  profile: state.profile,
})

const mapDispatchToProps = {
  updateClientID: setAuthClientID,
  updateFirstAuth: setFirstAuth,
  restoreCoinHandler: setCountCoin,
  restoreCrownHandler: setCountCrown,
  restoreCurrentProgressHandler: setCurrentProgress,
  restoreCurrentProgressStoryHandler: setProgressStory,
  restoreCurrentImagesHandler: setImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
