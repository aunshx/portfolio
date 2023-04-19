import {
 MOUSE_ENTER,
 MOUSE_LEAVE
} from "../actions/types";
//
const initialState = {
  hover: false,
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MOUSE_ENTER:
      return {
        ...state,
        hover: true,
      };
    case MOUSE_LEAVE:
      return {
        ...state,
        hover: false,
      };
    default:
      return state;
  }
}

export default authReducer;
