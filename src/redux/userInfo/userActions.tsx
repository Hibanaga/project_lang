import {
  SET_USERID,
  SET_FIRSTAUTH,
  SET_COINCOUNT,
  SET_CROWNCOUNT,
  SET_PROGRESSINFO,
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

export {
  setAuthClientID,
  setFirstAuth,
  setCountCoin,
  setCountCrown,
  setCurrentProgress,
};