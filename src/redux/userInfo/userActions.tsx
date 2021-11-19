import {
  SET_USERID,
  SET_FIRSTAUTH,
  SET_COINCOUNT,
  SET_CROWNCOUNT,
  SET_PROGRESSINFO,
  SET_PROGRESSSTORYINFO,
  UPDATE_PROGRESSSTORYINFO,
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

export {
  setAuthClientID,
  setFirstAuth,
  setCountCoin,
  setCountCrown,
  setCurrentProgress,
  setProgressStory,
  updateProgressStory,
};
