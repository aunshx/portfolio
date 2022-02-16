import { DARK_MODE_ON, DARK_MODE_OFF, SOUND_ON, SOUND_OFF } from "../actions/types";
//
const initialState = {
  displayMode: false,
  sound: false
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DARK_MODE_ON:
      return {
        ...state,
        displayMode: true,
      };
    case DARK_MODE_OFF:
      return {
        ...state,
        displayMode: false,
      };
    case SOUND_ON:
      return {
        ...state,
        sound: true,
      };
    case SOUND_OFF:
      return {
        ...state,
        sound: false,
      };
    default:
      return state;
  }
}

export default authReducer;
