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
} from "./types";

// ----------------------------- TOTAL HITS BLOCK -----------------------------
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

    console.log(res.data)

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