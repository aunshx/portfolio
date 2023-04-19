import api from "../../utils/api";
import { logout } from "./auth";

import {
  // Snackbar
  SNACKBAR_RESET,
  ERROR_SNACKBAR,
  
    // Blog Check Auth 
    BLOG_CHECK_AUTH_LOADING,
    BLOG_CHECK_AUTH
} from "./types";

// Blog Check Auth
export const blogCheckAuth = (password) => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };
  const body = JSON.stringify({
    password,
  });

  try {
    dispatch({
      type: BLOG_CHECK_AUTH_LOADING,
      payload: true,
    });

    const res = await api.post("/blog/check-auth", body);

    dispatch({
      type: BLOG_CHECK_AUTH,
      payload: true
    });

      dispatch({
        type: BLOG_CHECK_AUTH_LOADING,
        payload: false,
      });

  } catch (error) {
    if (error.response.status === 500) {
      value.message = "Something went wrong. Pl reload!";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

            dispatch({
              type: BLOG_CHECK_AUTH_LOADING,
              payload: false,
            });

                dispatch({
                  type: BLOG_CHECK_AUTH,
                  payload: false,
                });

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        3000
      );
    } else if (error.response.status === 400) {
      value.message = error.response.data.errors[0].msg;
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

            dispatch({
              type: BLOG_CHECK_AUTH_LOADING,
              payload: false,
            });

            
                dispatch({
                  type: BLOG_CHECK_AUTH,
                  payload: false,
                });

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        3000
      );
    } else if (error.response.status === 401) {
      value.message = "Session expired. Pl login again.";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

            dispatch({
              type: BLOG_CHECK_AUTH_LOADING,
              payload: false,
            });

            
                dispatch({
                  type: BLOG_CHECK_AUTH,
                  payload: false,
                });

      dispatch(logout());

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        3000
      );
    } else {
      value.message = "Something went wrong. Pl reload!";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

            dispatch({
              type: BLOG_CHECK_AUTH_LOADING,
              payload: false,
            });

            
                dispatch({
                  type: BLOG_CHECK_AUTH,
                  payload: false,
                });

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        3000
      );
    }
  }
};
