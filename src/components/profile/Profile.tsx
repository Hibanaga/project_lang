import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import instance from "../../service/AppService";
import useLocalForge from "./hooks/useLocalForge";
import ProfilePresentaiton from "./ProfilePresentaiton";
import {home} from "../../router/routes";
import { setAuthClientID, setFirstAuth } from "../../redux/userInfo/userActions";



interface IProfileProps {
  t: (prop: any) => string;
  updateClientID: (prop: any) => void;
  updateFirstAuth: (prop: any) => void;
  profile: any;
}

function Profile({
  t,
  profile,
  updateFirstAuth,
  updateClientID,
}:
IProfileProps) {
  const [profileData, setProfileData] = useState({});
  const [isAlreadyRedirectToHome, setAlreadyRedirectToHome] = useState(false);
  const [selectedProfileImage, put] = useLocalForge("profile", "");
  const [ , ,remove] = useLocalForge("loginID");

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
    updateClientID("");
    updateFirstAuth(false);
    setAlreadyRedirectToHome(true);

  };

  return (
    <>
      {isAlreadyRedirectToHome && <Redirect to={home} />}

      <ProfilePresentaiton
        t={t}
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
  updateFirstAuth: setFirstAuth
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
); 
