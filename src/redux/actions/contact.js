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
  MESSAGES_ON_RELOAD,
  MESSAGES_LOADING,
  MESSAGES_LOADING_COMPLETE,
  MESSAGES_OLDEST,
  MESSAGES_OLDEST_RESET,
  MESSAGES_RESET,
  MESSAGES_ON_RELOAD_OLDEST,
  COMMENT_ON_MESSAGE,

  // Messages  - Update Status
  UPDATE_MESSAGE_STATUS,

  // Messages - Delete
  REMOVE_MESSAGE_FROM_ARRAY,

  // Set Renderer False
  SET_RENDERER_MESSAGE_FALSE,
  SET_RENDERER_MESSAGE_TRUE,

  // Set Counts
  SET_MESSAGES_TOTAL_COUNT,
  SET_MESSAGES_UNSEEN_COUNT,
  SET_MESSAGES_UNSEEN_COUNT_INCREASE,
} from "./types";

// Comment on message 
export const commentOnMessage = (messageId, comment) => async (dispatch) => {
   let value = {
     message: "1",
     type: "info",
   };

   const body = JSON.stringify({
     messageId,
     comment
   });

   try {
      dispatch({
        type: COMMENT_ON_MESSAGE,
        payload: {
          id: messageId,
          comment,
        },
      });

     const res = await api.post("/contact/message-add-comment", body);

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
         3000
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
         3000
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
         3000
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
         3000
       );
     }
   }
}


// Reduce Unseen Messages Value
export const reduceSeenValue = (count) => async (dispatch) => {
  dispatch({
    type: SET_MESSAGES_UNSEEN_COUNT,
    payload: count - 1
  });
};

// Increase Unseen Messages Value
export const increaseSeenValue = (count) => async (dispatch) => {
  dispatch({
    type: SET_MESSAGES_UNSEEN_COUNT_INCREASE,
  });
};

// Set Renderer False 
export const setRendererMessagesFalse = () => async (dispatch) => {
  dispatch({
    type: SET_RENDERER_MESSAGE_FALSE
  })
};

// Set Renderer True 
export const setRendererMessagesTrue = () => async (dispatch) => {
  dispatch({
    type: SET_RENDERER_MESSAGE_TRUE
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
      3000
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
        3000
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
        3000
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
        3000
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
        3000
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

    if(status === 'unseen') {
      dispatch(increaseSeenValue())
    }

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
            type: UPDATE_MESSAGE_STATUS,
            payload: returnedData,
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
            type: UPDATE_MESSAGE_STATUS,
            payload: returnedData,
          });

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
            type: UPDATE_MESSAGE_STATUS,
            payload: returnedData,
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

//  Retrieve Latest Messages ON RELOAD
export const getMessagesOnReload = (skipNow) => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  const body = JSON.stringify({
    skipNow,
  });

  try {

    const res = await api.post("/contact/retrieve-messages-latest", body);

    
    const res2 = await api.get("/metrics/messages-total-count");
    const res3 = await api.get("/metrics/messages-unseen-count");

    dispatch({
      type: SET_MESSAGES_TOTAL_COUNT,
      payload: res2.data,
    });

    dispatch({
      type: SET_MESSAGES_UNSEEN_COUNT,
      payload: res3.data,
    });

    dispatch({
      type: SET_RENDERER_MESSAGE_TRUE,
    });

    const dataPack = {};

    dataPack.data = res.data;
    dataPack.lazyLoading = true


    dispatch({
      type: MESSAGES_ON_RELOAD,
      payload: dataPack,
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
        type: MESSAGES_LOADING_COMPLETE,
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
        type: MESSAGES_LOADING_COMPLETE,
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
        type: MESSAGES_LOADING_COMPLETE,
      });

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
        type: MESSAGES_LOADING_COMPLETE,
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

//  Retrieve Oldest Messages ON RELOAD
export const getMessagesOldestOnReload = (skipNow) => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  const body = JSON.stringify({
    skipNow,
  });

  try {

    const res = await api.post("/contact/retrieve-messages-oldest", body);

    
    const res2 = await api.get("/metrics/messages-total-count");
    const res3 = await api.get("/metrics/messages-unseen-count");

    dispatch({
      type: SET_MESSAGES_TOTAL_COUNT,
      payload: res2.data,
    });

    dispatch({
      type: SET_MESSAGES_UNSEEN_COUNT,
      payload: res3.data,
    });

    dispatch({
      type: SET_RENDERER_MESSAGE_TRUE,
    });

    const dataPack = {};

    dataPack.data = res.data;
    dataPack.lazyLoading = true


    dispatch({
      type: MESSAGES_ON_RELOAD_OLDEST,
      payload: dataPack,
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
        type: MESSAGES_LOADING_COMPLETE,
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
        type: MESSAGES_LOADING_COMPLETE,
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
        type: MESSAGES_LOADING_COMPLETE,
      });

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
        type: MESSAGES_LOADING_COMPLETE,
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

    const dataPack = {};

    dispatch({
      type: MESSAGES_OLDEST_RESET,
      payload: [],
    });

    dispatch({
      type: MESSAGES_LOADING,
    });

    const res = await api.post("/contact/retrieve-messages-latest", body);

    const res2 = await api.get("/metrics/messages-total-count");
    const res3 = await api.get("/metrics/messages-unseen-count");

    dispatch({
      type: SET_MESSAGES_TOTAL_COUNT,
      payload: res2.data,
    });

    dispatch({
      type: SET_MESSAGES_UNSEEN_COUNT,
      payload: res3.data,
    });

    dispatch({
      type: MESSAGES_LOADING_COMPLETE,
    });

    dispatch({
      type: SET_RENDERER_MESSAGE_TRUE,
    });

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
        type: MESSAGES_LOADING_COMPLETE,
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
        type: MESSAGES_LOADING_COMPLETE,
      });

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
        type: MESSAGES_LOADING_COMPLETE,
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

// Retrieve Oldest Messages
export const getMessagesOldest = (skipNow) => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  const body = JSON.stringify({
    skipNow,   
  });

  try {
    const dataPack = {};

    dispatch({
      type: MESSAGES_RESET,
      payload: [],
    });

    dispatch({
      type: MESSAGES_LOADING,
    });

    const res = await api.post("/contact/retrieve-messages-oldest", body);

    
    const res2 = await api.get("/metrics/messages-total-count");
    const res3 = await api.get("/metrics/messages-unseen-count");

    dispatch({
      type: SET_MESSAGES_TOTAL_COUNT,
      payload: res2.data,
    });

    dispatch({
      type: SET_MESSAGES_UNSEEN_COUNT,
      payload: res3.data,
    });


    dispatch({
      type: MESSAGES_LOADING_COMPLETE,
    });

    dispatch({
      type: SET_RENDERER_MESSAGE_TRUE,
    });

    dataPack.data = res.data;

    if (dataPack.data.length < 8) {
      dataPack.lazyLoading = false;

      dispatch({
        type: MESSAGES_OLDEST,
        payload: dataPack,
      });
    } else {
      dataPack.lazyLoading = true;

      dispatch({
        type: MESSAGES_OLDEST,
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
        type: MESSAGES_LOADING_COMPLETE,
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
        type: MESSAGES_LOADING_COMPLETE,
      });

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
        type: MESSAGES_LOADING_COMPLETE,
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

        await api.post("/contact/save-message", body);

        dispatch({
          type: SUCCESS_200,
          payload: {
            message: "Message Sent Successfully!",
            type: "success",
          },
        })

        setTimeout(
          () =>
            dispatch({
              type: SNACKBAR_RESET,
            }),
          3000
        );

          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            3000
          );

    } catch (error) {
        if (error.response.status === 500) {
          value.message = "Oops! Something went wrong. Please reload!";

          dispatch({
            type: EMAIL_ERROR,
            payload: value,
          });

          dispatch({
            type: ERROR_SNACKBAR,
            payload: {
              message: "Message Sending Error :(",
              type: "error",
            },
          });

          setTimeout(
            () =>
              dispatch({
                type: SNACKBAR_RESET,
              }),
            3000
          );

          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            3000
          );
        } else if (error.response.status === 400) {
          value.message = error.response.data.errors[0].msg;

          dispatch({
            type: EMAIL_ERROR,
            payload: value,
          });
          
dispatch({
  type: ERROR_SNACKBAR,
  payload: {
    message: "Message Sending Error :(",
    type: "error",
  },
});

setTimeout(
  () =>
    dispatch({
      type: SNACKBAR_RESET,
    }),
  3000
);
          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            3000
          );
        } else if (error.response.status === 401) {
          value.message = "You're unauthorized.";

          dispatch({
            type: EMAIL_ERROR,
            payload: value,
          });
dispatch({
  type: ERROR_SNACKBAR,
  payload: {
    message: "Message Sending Error :(",
    type: "error",
  },
});

setTimeout(
  () =>
    dispatch({
      type: SNACKBAR_RESET,
    }),
  3000
);
          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            3000
          );
        } else {
          value.message =
            "Oops! Looks like something went wrong. Please reload!";

          dispatch({
            type: EMAIL_ERROR,
            payload: value,
          });
dispatch({
  type: ERROR_SNACKBAR,
  payload: {
    message: "Message Sending Error :(",
    type: "error",
  },
});

setTimeout(
  () =>
    dispatch({
      type: SNACKBAR_RESET,
    }),
  3000
);
          setTimeout(
            () =>
              dispatch({
                type: EMAIL_RESET,
              }),
            3000
          );
        }
    }
}