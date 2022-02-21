import {
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
} from "../actions/types";
//
const initialState = {
  // Visitor Pie Chart
  visitorPieChartLoading: false,
  visitorPieChart: [],

  // Total Hits Block
  totalHitsBlockLoading: false,
  totalHitsBlock: [],

  // Total Hits Chart
  totalHitsChartLoading: false,
  totalHitsChart: [],
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //   Total Hits CHART
    case TOTAL_HITS_CHART:
      return {
        ...state,
        totalHitsChart: payload,
      };
    case TOTAL_HITS_CHART_LOADING:
      return {
        ...state,
        totalHitsChartLoading: true,
      };
    case TOTAL_HITS_CHART_LOADING_COMPLETE:
      return {
        ...state,
        totalHitsChartLoading: false,
      };

    //   Total Hits Block
    case TOTAL_HITS_BLOCK:
      return {
        ...state,
        totalHitsBlock: payload,
      };
    case TOTAL_HITS_BLOCK_LOADING:
      return {
        ...state,
        totalHitsBlockLoading: true,
      };
    case TOTAL_HITS_BLOCK_LOADING_COMPLETE:
      return {
        ...state,
        totalHitsBlockLoading: false,
      };

    //   Visitor Pie Chart
    case VISITOR_PIE_CHART:
      return {
        ...state,
        visitorPieChart: payload,
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
