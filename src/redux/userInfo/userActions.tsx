import {
  SET_USERID,
  SET_FIRSTAUTH,
  SET_COINCOUNT,
  SET_CROWNCOUNT,
  SET_PROGRESSINFO,
  SET_PROGRESSSTORYINFO,
  UPDATE_PROGRESSSTORYINFO,
  UPDATE_PROGRESS,
  SET_IMAGES,
  UPDATE_AVATARINFO,
} from "./userActionsTypes";

const setAuthClientID = (clientID: any) => ({
  type: SET_USERID,
  payload: clientID,
});

const setFirstAuth = (isFirstAuth: boolean) => ({
  type: SET_FIRSTAUTH,
  payload: isFirstAuth,
});

const setCountCoin = (count: number) => ({
  type: SET_COINCOUNT,
  payload: count,
});

const setCountCrown = (count: number) => ({
  type: SET_CROWNCOUNT,
  payload: count,
});

const setImages = (images: string[]) => ({
  type: SET_IMAGES,
  payload: images
})

const setCurrentProgress = (objProgress: any) => ({
  type: SET_PROGRESSINFO,
  payload: objProgress,
});

const setProgressStory = (progressItem: any) => ({
  type: SET_PROGRESSSTORYINFO,
  payload: progressItem,
});

const updateProgressStory = (progressItem: string) => ({
  type: UPDATE_PROGRESSSTORYINFO,
  payload: progressItem,
});

const updateProgress = (progress:any) => ({
  type: UPDATE_PROGRESS,
  payload: progress
})

const updateImages = (images: any) => ({
  type: UPDATE_AVATARINFO,
  payload: images,
});

export {
  setAuthClientID,
  setFirstAuth,
  setCountCoin,
  setCountCrown,
  setCurrentProgress,
  setProgressStory,
  updateProgressStory,
  updateProgress,
  setImages,
  updateImages,
};
