import {
  SET_USERID,
  SET_FIRSTAUTH,
  SET_COINCOUNT,
  SET_CROWNCOUNT,
  SET_PROGRESSINFO,
  SET_PROGRESSSTORYINFO,
  UPDATE_PROGRESSSTORYINFO,
  UPDATE_PROGRESS,
  UPDATE_AVATARINFO,
  SET_IMAGES
} from "./userActionsTypes";

interface stateProp {
  type: string;
  payload: object;
}

const initialState = {
  clientID: "",
  isFirstAuth: false,
  progress: {},
  progressStory: [],
  coin: 0,
  crown: 0,
  images: [],
};

export default function userReducer(
  state = initialState,
  { type, payload }: stateProp
) {
  switch (type) {
    case SET_USERID:
      return { ...state, clientID: payload };
    case SET_FIRSTAUTH:
      return { ...state, isFirstAuth: payload };
    case SET_COINCOUNT:
      return { ...state, coin: payload };
    case SET_CROWNCOUNT:
      return { ...state, crown: payload };
    case SET_PROGRESSINFO:
      return { ...state, progress: payload };
    case SET_IMAGES:
      return { ...state, images: payload };
    case SET_PROGRESSSTORYINFO:
      return { ...state, progressStory: payload };
    case UPDATE_PROGRESS:
      return { ...state, progress: { ...state.progress, ...payload } };
    case UPDATE_PROGRESSSTORYINFO:
      return { ...state, progressStory: [...state.progressStory, payload] };
    case UPDATE_AVATARINFO:
      return { ...state, images: [...state.images, payload] };
    default:
      return state;
  }
}
