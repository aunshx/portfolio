import {
  DARK_MODE_ON,
  DARK_MODE_OFF,
  SOUND_ON,
  SOUND_OFF,
  MUSIC_ON,
  MUSIC_OFF,
  ANIMATION_CHANGE,
} from "../actions/types";
//
const initialState = {
  displayMode: true,
  sound: false,
  music: false,
  backgroundAnimation: true
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // Background Animation
    case ANIMATION_CHANGE:
      return {
        ...state,
        backgroundAnimation: payload
      }
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
