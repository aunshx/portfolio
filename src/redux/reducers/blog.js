import {
  // Blog Check Auth
  BLOG_CHECK_AUTH_LOADING,
  BLOG_CHECK_AUTH,
} from "../actions/types";
//
const initialState = {
  // Blog Check Auth
  isBlogCheckAuth: false,
  blogAuthLoading: false,
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // Blog Check Auth
    case BLOG_CHECK_AUTH:
      return {
        ...state,
        isBlogCheckAuth: payload,
      };

    case BLOG_CHECK_AUTH_LOADING:
      return {
        ...state,
        blogAuthLoading: payload,
      };
    default:
      return state;
  }
}

export default authReducer;
