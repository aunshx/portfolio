import api from "../../utils/api";

import {
    // Auth
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_LOADING_COMPLETE,
  LOGIN_LOADING,

// Errors
  ERROR_400,
  ERROR_401,
  ERROR_500,
  SUCCESS_200,
  ERROR_SOMETHING_ELSE,
  SNACKBAR_RESET,
  ERROR_SNACKBAR,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/users/get-data");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
}

// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    let value = {
      message: '1',
      type: 'info'
    }
    const body = JSON.stringify({ email, password });

    try {

        dispatch({
        type: LOGIN_LOADING,
        });

      const res = await api.post("/auth/login", body);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (error) {
      if (error.response.status === 500) {
        value.message = "Something went wrong. Please reload!";
        value.type = "error";

        dispatch({
          type: ERROR_SNACKBAR,
          payload: value,
        });

        dispatch({
          type: LOGIN_FAIL,
        });

               dispatch({
                 type: LOGIN_LOADING_COMPLETE,
               });

        setTimeout(
          () =>
            dispatch({
              type: SNACKBAR_RESET,
            }),
          5000
        );
      } else if (error.response.status === 400) {
        value.message = error.response.data.errors[0].msg;
        value.type = "error";

        dispatch({
          type: ERROR_SNACKBAR,
          payload: value,
        });

        dispatch({
          type: LOGIN_FAIL,
        });

               dispatch({
                 type: LOGIN_LOADING_COMPLETE,
               });

        setTimeout(
          () =>
            dispatch({
              type: SNACKBAR_RESET,
            }),
          5000
        );
      } else if (error.response.status === 401) {
        value.message = 'Your session has expired. Please login again.';
        value.type = "error";

        dispatch({
          type: ERROR_SNACKBAR,
          payload: value,
        });

        dispatch({
          type: LOGIN_FAIL,
        });

               dispatch({
                 type: LOGIN_LOADING_COMPLETE,
               });

        setTimeout(
          () =>
            dispatch({
              type: SNACKBAR_RESET,
            }),
          5000
        );
      } else {
        value.message = "Oops! Looks like something went wrong. Please reload!";
        value.type = "error";

        dispatch({
          type: ERROR_SNACKBAR,
          payload: value,
        });

        dispatch({
          type: LOGIN_FAIL,
        });

               dispatch({
                 type: LOGIN_LOADING_COMPLETE,
               });

        setTimeout(
          () =>
            dispatch({
              type: SNACKBAR_RESET,
            }),
          5000
        );
      }

    }
  };

// Logout
export const logout = () => async (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
};
