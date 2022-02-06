import { useContext, useState } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router";
import { ContextForm } from "../ContextForm";
import ConfirmPresentation from "./ConfirmPresentation";
import {
  setAuthClientID,
  setFirstAuth,
  setImages,
} from "../../../redux/userInfo/userActions";
import instance from "../../../service/AppService";
import {
  setCountCoin,
  setCountCrown,
  setCurrentProgress,
  setProgressStory,
} from "../../../redux/userInfo/userActions";
import { Redirect } from "react-router-dom";
import { home } from "../../../router/routes";

interface stateProp {
  addDefaultUserData: (p: object) => void;
  setFirstAuthHandler: (p: boolean) => void;
  restoreCoinHandler: (p: any) => void;
  restoreCrownHandler: (p: any) => void;
  restoreCurrentProgressHandler: (p: any) => void;
  restoreCurrentProgressStoryHandler: (p: any) => void;
  restoreCurrentImagesHandler: (p: any) => void;
}

function Confirm({
  addDefaultUserData,
  setFirstAuthHandler,
  restoreCoinHandler,
  restoreCrownHandler,
  restoreCurrentProgressHandler,
  restoreCurrentProgressStoryHandler,
  restoreCurrentImagesHandler,
}: stateProp) {
  const [codeConfirm, setConfirmCode] = useState("");
  const [message, setMessage] = useState("loading");
  const [state] = useContext(ContextForm);
  const { register } = state;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmCode(event.target.value);

  const submitFormHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    instance.verifyCode(codeConfirm, register.email).then((data) => {
      instance.createActiveUser({ clientID: data.clientID }).then((data) => {
        if (data !== undefined) {
        setMessage("success");
        // addDefaultUserData(data.cliendID);
        }
        
        // restoreCoinHandler(data.coin);
        // restoreCrownHandler(data.crown);
        // restoreCurrentProgressHandler(data.progress);
        // restoreCurrentProgressStoryHandler(data.progressStory);
        // restoreCurrentImagesHandler(data.images);
        setFirstAuthHandler(true);
      });
      setMessage(data.message);
      // localforage.setItem("loginID", data.clientID);
     
    });
  };

  return (
    <>
      {message === "success" && <Redirect to={home} />}

      <ConfirmPresentation
        message={message}
        codeConfirm={codeConfirm}
        onHandleInputChange={handleInputChange}
        onSubmitFormHandler={submitFormHandler}
      />
    </>
  );
}

const mapDispatchToProps = {
  addDefaultUserData: setAuthClientID,
  setFirstAuthHandler: setFirstAuth,
  restoreCoinHandler: setCountCoin,
  restoreCrownHandler: setCountCrown,
  restoreCurrentProgressHandler: setCurrentProgress,
  restoreCurrentProgressStoryHandler: setProgressStory,
  restoreCurrentImagesHandler: setImages,
};

export default connect(null, mapDispatchToProps)(Confirm);
