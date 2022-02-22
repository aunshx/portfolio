import api from "../../utils/api";

import {
  //   Resets
  ERROR_SNACKBAR,
  SNACKBAR_RESET,

  // Visitor Pie Chart
  VISITOR_PIE_CHART_LOADING,
  VISITOR_PIE_CHART_LOADING_COMPLETE,
  VISITOR_PIE_CHART,

  // Total Hits Block
  TOTAL_HITS_BLOCK_LOADING,
  TOTAL_HITS_BLOCK_LOADING_COMPLETE,
  TOTAL_HITS_BLOCK,

  // Total Hits CHART
  TOTAL_HITS_CHART_LOADING,
  TOTAL_HITS_CHART,
  TOTAL_HITS_CHART_LOADING_COMPLETE,

  // Total Cold Message Block
  TOTAL_COLD_MESSAGE_LOADING,
  TOTAL_COLD_MESSAGE,
  TOTAL_COLD_MESSAGE_LOADING_COMPLETE,

  // Total Ongoing Message Block
  TOTAL_ONGOING_MESSAGE_LOADING,
  TOTAL_ONGOING_MESSAGE,
  TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,

  // Total Success Message Block
  TOTAL_SUCCESS_MESSAGE_LOADING,
  TOTAL_SUCCESS_MESSAGE,
  TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,

  // Total Not Replied Message Block
  TOTAL_NOT_REPLIED_MESSAGE_LOADING,
  TOTAL_NOT_REPLIED_MESSAGE,
  TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,

  // Total Not Replied Message Block
  TOTAL_HITS_SYNOPSIS_LOADING,
  TOTAL_HITS_SYNOPSIS_TODAY,
  TOTAL_HITS_SYNOPSIS_WEEK,
  TOTAL_HITS_SYNOPSIS_MONTH,
  TOTAL_HITS_SYNOPSIS_YEAR,
  TOTAL_HITS_SYNOPSIS_ALL_TIME,
  TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
  TOTAL_HITS_TYPE,

  // Recent Messages 
  RECENT_MESSAGES_LIMIT,
  RECENT_MESSAGES_LIMIT_LOADING,
  RECENT_MESSAGES_LIMIT_LOADING_COMPLETE,
} from "./types";

// ----------------------------- RECENT MESSAGES -----------------------------
// Total No Reply Messages - today
export const getRecentMessagesLimit = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: RECENT_MESSAGES_LIMIT_LOADING,
    });

    const res = await api.get("/metrics/recent-messages-limit");

    dispatch({
      type: RECENT_MESSAGES_LIMIT,
      payload: res.data,
    });

    dispatch({
      type: RECENT_MESSAGES_LIMIT_LOADING_COMPLETE,
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
        type: RECENT_MESSAGES_LIMIT_LOADING_COMPLETE,
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
        type: RECENT_MESSAGES_LIMIT_LOADING_COMPLETE,
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
        type: RECENT_MESSAGES_LIMIT_LOADING_COMPLETE,
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
        type: RECENT_MESSAGES_LIMIT_LOADING_COMPLETE,
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

// ----------------------------- TOTAL NOT REPLIED BLOCK -----------------------------
// Total No Reply Messages - today
export const getTotalNoReplyMessagesToday = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-not-replied-messages-today");

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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

// Total No Reply Messages - seven days
export const getTotalNoReplyMessagesWeek = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-not-replied-messages-seven-days");

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
// Total No Reply Messages - monthly
export const getTotalNoReplyMessagesMonth = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-not-replied-messages-monthly");

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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

// Total No Reply Messages - yearly
export const getTotalNoReplyMessagesYear = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-not-replied-messages-yearly");

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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

// Total No Reply Messages - All Time
export const getTotalNoReplyMessagesAllTime = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-not-replied-messages-all-time");

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE,
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



// ----------------------------- TOTAL SUCCESS BLOCK -----------------------------
// Total Success Messages - today
export const getTotalSuccessMessagesToday = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-success-messages-today");

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
// Total Success Messages - seven days
export const getTotalSuccessMessagesWeek = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-success-messages-seven-days");

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
// Total Success Messages - monthly
export const getTotalSuccessMessagesMonth = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-success-messages-monthly");

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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

// Total Success Messages - yearly
export const getTotalSuccessMessagesYear = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-success-messages-yearly");

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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

// Total Success Messages - All Time
export const getTotalSuccessMessagesAllTime = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-success-messages-all-time");

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE,
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


// ----------------------------- TOTAL ONGOING BLOCK -----------------------------
// Total Ongoing Messages - today
export const getTotalOngoingMessagesToday = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-ongoing-messages-today");

    dispatch({
      type: TOTAL_ONGOING_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
// Total Ongoing Messages - seven days
export const getTotalOngoingMessagesWeek = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-ongoing-messages-seven-days");

    dispatch({
      type: TOTAL_ONGOING_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
// Total Ongoing Messages - monthly
export const getTotalOngoingMessagesMonth = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-ongoing-messages-monthly");

    dispatch({
      type: TOTAL_ONGOING_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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

// Total Ongoing Messages - yearly
export const getTotalOngoingMessagesYear = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-ongoing-messages-yearly");

    dispatch({
      type: TOTAL_ONGOING_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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

// Total Ongoing Messages - All Time
export const getTotalOngoingMessagesAllTime = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-ongoing-messages-all-time");

    dispatch({
      type: TOTAL_ONGOING_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
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


// ----------------------------- TOTAL COLDS BLOCK -----------------------------
// Total Hits - today
export const getTotalColdMessagesToday = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-cold-messages-today");

    dispatch({
      type: TOTAL_COLD_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
// Total COld Messages - seven days
export const getTotalColdMessagesWeek = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-cold-messages-seven-days");

    dispatch({
      type: TOTAL_COLD_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
// Total Cold Messages - monthly
export const getTotalColdMessagesMonth = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-cold-messages-monthly");

    dispatch({
      type: TOTAL_COLD_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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

// Total Cold Messages - yearly
export const getTotalColdMessagesYear = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-cold-messages-yearly");

    dispatch({
      type: TOTAL_COLD_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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

// Total Cold Messages - All Time
export const getTotalColdMessagesAllTime = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING,
    });

    const res = await api.get("/metrics/total-cold-messages-all-time");

    dispatch({
      type: TOTAL_COLD_MESSAGE,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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
        type: TOTAL_COLD_MESSAGE_LOADING_COMPLETE,
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

// ----------------------------- TOTAL HITS BLOCK -----------------------------
// Total Hits Synopsis - All
export const getTotalHitsSynopsis = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_SYNOPSIS_LOADING,
    });

    const res = await api.get("/metrics/total-hits-synopsis-today");
    const res2 = await api.get("/metrics/total-hits-synopsis-seven-days");
    const res3 = await api.get("/metrics/total-hits-synopsis-monthly");
    const res4 = await api.get("/metrics/total-hits-synopsis-yearly");
    const res5 = await api.get("/metrics/total-hits-synopsis-all-time");

    console.log(
      'today', res.data
    )

    dispatch({
      type: TOTAL_HITS_SYNOPSIS_TODAY,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_HITS_SYNOPSIS_WEEK,
      payload: res2.data,
    });

    dispatch({
      type: TOTAL_HITS_SYNOPSIS_MONTH,
      payload: res3.data,
    });

    dispatch({
      type: TOTAL_HITS_SYNOPSIS_YEAR,
      payload: res4.data,
    });

    dispatch({
      type: TOTAL_HITS_SYNOPSIS_ALL_TIME,
      payload: res5.data,
    });

    dispatch({
      type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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
        type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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
        type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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
        type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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
        type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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

// Total Hits - today
export const getTotalHitsToday = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING,
    });

    const res = await api.get("/metrics/total-hits-today");

    dispatch({
      type: TOTAL_HITS_BLOCK,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_HITS_TYPE,
      payload: 'today',
    });

    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
// Total Hits - seven days
export const getTotalHitsWeek = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING,
    });

    const res = await api.get("/metrics/total-hits-seven-days");

    dispatch({
      type: TOTAL_HITS_BLOCK,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_HITS_TYPE,
      payload: "week",
    });

    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
// Total Hits - monthly
export const getTotalHitsMonth = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING,
    });

    const res = await api.get("/metrics/total-hits-monthly");

    dispatch({
      type: TOTAL_HITS_BLOCK,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_HITS_TYPE,
      payload: "month",
    });

    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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

// Total Hits - yearly
export const getTotalHitsYear = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING,
    });

    const res = await api.get("/metrics/total-hits-yearly");

    dispatch({
      type: TOTAL_HITS_BLOCK,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_HITS_TYPE,
      payload: "year",
    });

    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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

// Total Hits - All Time
export const getTotalHitsAllTime = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING,
    });

    const res = await api.get("/metrics/total-hits-all-time");

    dispatch({
      type: TOTAL_HITS_BLOCK,
      payload: res.data,
    });

        dispatch({
      type: TOTAL_HITS_TYPE,
      payload: "all-time",
    });


    dispatch({
      type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
      });

          dispatch({
            type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
      });

          dispatch({
            type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
      });

          dispatch({
            type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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
        type: TOTAL_HITS_BLOCK_LOADING_COMPLETE,
      });

          dispatch({
            type: TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE,
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

// ----------------------------- VISITORS PIE CHART ----------------------------

// Visitors per country - monthly
export const getVisitorsPerCountryMonth = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: VISITOR_PIE_CHART_LOADING,
    });

    const res = await api.get("/metrics/visitors-per-country-monthly");

    dispatch({
      type: VISITOR_PIE_CHART,
      payload: res.data,
    });

    dispatch({
      type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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

// Visitors per country - all time
export const getVisitorsPerCountryAllTime = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: VISITOR_PIE_CHART_LOADING,
    });

    const res = await api.get("/metrics/visitors-per-country-all-time");

    dispatch({
      type: VISITOR_PIE_CHART,
      payload: res.data,
    });

    dispatch({
      type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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

// Visitors per country - yearly
export const getVisitorsPerCountryYear = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: VISITOR_PIE_CHART_LOADING,
    });

    const res = await api.get("/metrics/visitors-per-country-yearly");

    dispatch({
      type: VISITOR_PIE_CHART,
      payload: res.data,
    });

    dispatch({
      type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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

// Visitors per country - weekly
export const getVisitorsPerCountryWeek = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: VISITOR_PIE_CHART_LOADING,
    });

    const res = await api.get("/metrics/visitors-per-country-seven-days");

    dispatch({
      type: VISITOR_PIE_CHART,
      payload: res.data,
    });

    dispatch({
      type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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

// Visitors per country - today
export const getVisitorsPerCountryToday = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  console.log('Hit')

  try {
    dispatch({
      type: VISITOR_PIE_CHART_LOADING,
    });

    const res = await api.get("/metrics/visitors-per-country-today");

    dispatch({
      type: VISITOR_PIE_CHART,
      payload: res.data,
    });

    dispatch({
      type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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
        type: VISITOR_PIE_CHART_LOADING_COMPLETE,
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

// ----------------------------- HITS CHART -----------------------------
// Total Hits CHart - Weekly
export const getTotalHitsChartWeek = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_CHART_LOADING,
    });

    const res = await api.get("/metrics/total-hits-chart-seven-days");

    dispatch({
      type: TOTAL_HITS_CHART,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
// Total Hits  Chart - Monthly
export const getTotalHitsChartMonth = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_CHART_LOADING,
    });

    const res = await api.get("/metrics/total-hits-chart-monthly");

    let ans = []

    for(let i=0; i<res.data.length; i++){
      switch(res.data[i].name){
        case '01':
          ans.push({
            hits: res.data[i].hits,
            name: 'J'
          })
          break
        case '02':
          ans.push({
            hits: res.data[i].hits,
            name: 'F'
          })
          break
        case '03':
          ans.push({
            hits: res.data[i].hits,
            name: 'M'
          })
          break
        case '04':
          ans.push({
            hits: res.data[i].hits,
            name: 'A'
          })
          break
        case '05':
          ans.push({
            hits: res.data[i].hits,
            name: 'M'
          })
          break
        case '06':
          ans.push({
            hits: res.data[i].hits,
            name: 'J'
          })
          break
        case '07':
          ans.push({
            hits: res.data[i].hits,
            name: 'JU'
          })
          break
        case '08':
          ans.push({
            hits: res.data[i].hits,
            name: 'A'
          })
          break
        case '09':
          ans.push({
            hits: res.data[i].hits,
            name: 'S'
          })
          break
        case '10':
          ans.push({
            hits: res.data[i].hits,
            name: 'O'
          })
          break

        case '11':
          ans.push({
            hits: res.data[i].hits,
            name: 'N'
          })
          break

        case '12':
          ans.push({
            hits: res.data[i].hits,
            name: 'D'
          })
          break

        default:
          return 'None'
      }
    }

    dispatch({
      type: TOTAL_HITS_CHART,
      payload: ans,
    });

    dispatch({
      type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
// Total Hits Chart - Year
export const getTotalHitsChartYear = () => async (dispatch) => {
  let value = {
    message: "1",
    type: "info",
  };

  try {
    dispatch({
      type: TOTAL_HITS_CHART_LOADING,
    });

    const res = await api.get("/metrics/total-hits-chart-yearly");

    dispatch({
      type: TOTAL_HITS_CHART,
      payload: res.data,
    });

    dispatch({
      type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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
        type: TOTAL_HITS_CHART_LOADING_COMPLETE,
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