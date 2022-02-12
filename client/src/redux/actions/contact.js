import api from '../../utils/api'

import {
    // Email 
    EMAIL_LOADING, EMAIL_LOADING_COMPLETE, EMAIL_RESET, EMAIL_ERROR
} from './types'

// Get details of challenge creator
export const sendEmail= (name, email, organisation, message) => async (dispatch) => {
    const value = {}

    const body = JSON.stringify({
        name, email, organisation, message
    })

    try {
        dispatch({
            type: EMAIL_LOADING,
        })
  
        dispatch({
            type: EMAIL_LOADING_COMPLETE,
        })

        const res = await api.post("/contact/send-email", body)

        setTimeout(
            () =>
                dispatch({
                    type: EMAIL_RESET,
                }),
            5000
        )

    } catch (error) {
        if (error.response.status === 500) {
          value.message = "Oops! Something went wrong. Please reload!";

          dispatch({
            type: EMAIL_ERROR,
            payload: value,
          });

          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            5000
          );
        } else if (error.response.status === 400) {
          value.message = error.response.data.errors[0].msg;

          dispatch({
            type: EMAIL_ERROR,
            payload: value,
          });

          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            5000
          );
        } else if (error.response.status === 401) {
          value.message = "You're unauthorized.";

          dispatch({
            type: EMAIL_ERROR,
            payload: value,
          });

          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            5000
          );
        } else {
          value.message =
            "Oops! Looks like something went wrong. Please reload!";

          dispatch({
            type: EMAIL_ERROR,
            payload: value,
          });

          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            5000
          );
        }
    }
}