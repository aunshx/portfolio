import {
  // Dark Mode
  DARK_MODE_ON,
  DARK_MODE_OFF,

//   Sound
  SOUND_ON,
  SOUND_OFF,
} from "./types";

// Toggle To Light Mode
export const toggleLightMode= () => async (dispatch) => {
    dispatch({
        type: DARK_MODE_OFF
    })
}
// Toggle To Dark Mode
export const toggleDarkMode= () => async (dispatch) => {
    dispatch({
        type: DARK_MODE_ON
    })
}
// Sound On
export const soundOn= () => async (dispatch) => {
    dispatch({
        type: SOUND_ON
    })
}
// Sound Off
export const soundOff= () => async (dispatch) => {
    dispatch({
        type: SOUND_OFF
    })
}
