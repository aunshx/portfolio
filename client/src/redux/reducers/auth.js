import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_LOADING_COMPLETE,
  LOGIN_LOADING,
  SNACKBAR_RESET,
  ERROR_SNACKBAR,
  SUCCESS_200,
} from "../actions/types";

import { nanoid } from "nanoid";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
  loginLoading: false,
  message: "",
  type: "info",
  key: "",
  errorSnackbar: false,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SUCCESS_200:
      return {
        ...state,
        message: payload.message,
        type: payload.type,
        key: nanoid(),
      };
    case ERROR_SNACKBAR:
      return {
        ...state,
        message: payload.message,
        type: payload.type,
        key: nanoid(),
        errorSnackbar: true,
      };
    case SNACKBAR_RESET:
      return {
        ...state,
        message: "",
        key: "",
        errorSnackbar: false,
      };
    // Login Loading
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_LOADING_COMPLETE:
      return {
        ...state,
        loginLoading: false,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer;
