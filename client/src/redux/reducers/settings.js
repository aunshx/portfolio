import {
  DARK_MODE_ON,
  DARK_MODE_OFF,
  SOUND_ON,
  SOUND_OFF,
  MUSIC_ON,
  MUSIC_OFF,
} from "../actions/types";
//
const initialState = {
  displayMode: false,
  sound: true,
  music: false
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // Dark Mode
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
      // Sound
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
    // Music
    case MUSIC_ON:
      return {
        ...state,
        music: true,
      };
    case MUSIC_OFF:
      return {
        ...state,
        music: false,
      };
    default:
      return state;
  }
}

export default authReducer;
