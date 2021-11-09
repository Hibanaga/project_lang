import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import Modal from "react-modal";
Modal.setAppElement("#root");

interface stateProp {
  urlVideo: string;
  isVisibleModal: boolean;
  onToggleModalVisibleHandler: (p: any) => void;
}

export default function videoModalStory({
  isVisibleModal,
  urlVideo,
  onToggleModalVisibleHandler,
}: stateProp) {
  return (
    <div className="wrapperModalLesoon">
      <Modal
        isOpen={isVisibleModal}
        onRequestClose={onToggleModalVisibleHandler}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <button
          onClick={onToggleModalVisibleHandler}
          className="js_btn_toggleModal"
        >
          <CloseRoundedIcon />
        </button>

        <iframe
          width="100%"
          height="90%"
          src={urlVideo}
          title="YouTube video player"
          className="iframevideo"
        ></iframe>
      </Modal>
    </div>
  );
}
