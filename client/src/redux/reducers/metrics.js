import {
  // Visitor Pie Chart
  VISITOR_PIE_CHART_LOADING,
  VISITOR_PIE_CHART_LOADING_COMPLETE,
  VISITOR_PIE_CHART,
} from "../actions/types";
//
const initialState = {
  visitorPieChartLoading: false,
  visitorPieChart: []
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VISITOR_PIE_CHART:
      return {
        ...state,
        visitorPieChart: payload
      };
    case VISITOR_PIE_CHART_LOADING:
      return {
        ...state,
        visitorPieChartLoading: true,
      };
    case VISITOR_PIE_CHART_LOADING_COMPLETE:
      return {
        ...state,
        visitorPieChartLoading: false,
      };
    default:
      return state;
  }
}

export default authReducer;
