import api from '../../utils/api'

import {
  // Snackbar
  SNACKBAR_RESET,
  ERROR_SNACKBAR,
  SUCCESS_200,

  // Email
  EMAIL_LOADING,
  EMAIL_LOADING_COMPLETE,
  EMAIL_RESET,
  EMAIL_ERROR,

  // Messages
  MESSAGES,
  MESSAGES_LOADING,
  MESSAGES_LOADING_COMPLETE,

  // Messages  - Update Status
  UPDATE_MESSAGE_STATUS,

  // Messages - Delete
  REMOVE_MESSAGE_FROM_ARRAY,

  // Set Renderer False
  SET_RENDERER_MESSAGE_FALSE,
  SET_RENDERER_MESSAGE_TRUE,
} from "./types";

// Set Renderer False 
export const setRendererMessagesFalse = (messageId) => async (dispatch) => {
  dispatch({
    type: SET_RENDERER_MESSAGE_FALSE
  })
};

//  Delete Message
export const deleteMessage = (messageId) => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  const body = JSON.stringify({
    messageId,
  });

  try {
    const res = await api.post("/contact/message-delete", body);

    dispatch({
      type: REMOVE_MESSAGE_FROM_ARRAY,
      payload: messageId
    });

    value={
      message: 'Message deleted successfully!',
      type: 'success'
    }

    dispatch({
      type: SUCCESS_200,
      payload: value
    });

    setTimeout(
      () =>
        dispatch({
          type: SNACKBAR_RESET,
        }),
      5000
    );
  } catch (error) {
    if (error.response.status === 500) {
      value.message = "Something went wrong. Pl reload!";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
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

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        5000
      );
    } else if (error.response.status === 401) {
      value.message = "Session expired. Pl login again.";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        5000
      );
    } else {
      value.message = "Something went wrong. Pl reload!";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
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

// Retrieve Latest Messages
export const updateMessageStatus = (status, messageId, previousStatus) => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  const body = JSON.stringify({
    messageId,
    status,
  });

  try {

    const returnedData = {
      messageId,
      status
    };

    dispatch({
      type: UPDATE_MESSAGE_STATUS,
      payload: returnedData,
    });

    const res = await api.post("/contact/message-status-change", body);

  } catch (error) {

    const returnedData = {
      messageId,
      status: previousStatus,
    };

    if (error.response.status === 500) {
      value.message = "Something went wrong. Pl reload!";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

      dispatch({
        type: UPDATE_MESSAGE_STATUS,
        payload: returnedData,
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
            type: UPDATE_MESSAGE_STATUS,
            payload: returnedData,
          });

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        5000
      );
    } else if (error.response.status === 401) {
      value.message = "Session expired. Pl login again.";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

          dispatch({
            type: UPDATE_MESSAGE_STATUS,
            payload: returnedData,
          });

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        5000
      );
    } else {
      value.message = "Something went wrong. Pl reload!";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

          dispatch({
            type: UPDATE_MESSAGE_STATUS,
            payload: returnedData,
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

// Retrieve Latest Messages
export const getMessages = (skipNow) => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  const body = JSON.stringify({
    skipNow,
  });

  try {
    dispatch({
      type: MESSAGES_LOADING,
    });

    const res = await api.post("/contact/retrieve-messages-latest", body);

    console.log(res.data)

    dispatch({
      type: MESSAGES_LOADING_COMPLETE,
    });

    dispatch({
      type: SET_RENDERER_MESSAGE_TRUE,
    });

     const dataPack = {};

     dataPack.data = res.data;     

     if (dataPack.data.length < 8) {
       dataPack.lazyLoading = false;

    dispatch({
      type: MESSAGES,
      payload: dataPack,
    });

     } else {

       dataPack.lazyLoading = true;

    dispatch({
      type: MESSAGES,
      payload: dataPack,
    });

     }

  } catch (error) {
    if (error.response.status === 500) {
      value.message = "Something went wrong. Pl reload!";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

      dispatch({
        type: MESSAGES_LOADING_COMPLETE,
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
        type: MESSAGES_LOADING_COMPLETE,
      });

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        5000
      );
    } else if (error.response.status === 401) {
      value.message = "Session expired. Pl login again.";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

      dispatch({
        type: MESSAGES_LOADING_COMPLETE,
      });

      setTimeout(
        () =>
          dispatch({
            type: SNACKBAR_RESET,
          }),
        5000
      );
    } else {
      value.message = "Something went wrong. Pl reload!";
      value.type = "error";

      dispatch({
        type: ERROR_SNACKBAR,
        payload: value,
      });

      dispatch({
        type: MESSAGES_LOADING_COMPLETE,
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