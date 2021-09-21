import { setUserData } from "./userActionsTypes";

interface stateProp {
  type: string;
  payload: object;
}

export default function userReducer(state = {}, { type, payload }: stateProp) {
  switch (type) {
    case setUserData:
      return { ...state, payload };
    default:
      return state;
  }
}
