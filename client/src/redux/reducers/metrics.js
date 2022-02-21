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

  // Total Cold Message Block
  TOTAL_COLD_MESSAGE_LOADING,
  TOTAL_COLD_MESSAGE,
  TOTAL_COLD_MESSAGE_LOADING_COMPLETE,

  // Total Ongoing Message Block
  TOTAL_ONGOING_MESSAGE_LOADING,
  TOTAL_ONGOING_MESSAGE,
  TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE,
} from "../actions/types";
//
const initialState = {
  // Visitor Pie Chart
  visitorPieChartLoading: false,
  visitorPieChart: [],

  // Total Hits Chart
  totalHitsChartLoading: false,
  totalHitsChart: [],

  // Total Hits Block
  totalHitsBlockLoading: false,
  totalHitsBlock: 0,

  // Total Cold Messages Block
  totalColdMessagesLoading: false,
  totalColdMessagesBlock: 0,

  // Total Cold Messages Block
  totalOngoingMessagesLoading: false,
  totalOngoingMessagesBlock: 0,
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //   Total Ongoing Messages
    case TOTAL_ONGOING_MESSAGE:
      return {
        ...state,
        totalOngoingMessagesBlock: payload,
      };
    case TOTAL_ONGOING_MESSAGE_LOADING:
      return {
        ...state,
        totalOngoingMessagesLoading: true,
      };
    case TOTAL_ONGOING_MESSAGE_LOADING_COMPLETE:
      return {
        ...state,
        totalOngoingMessagesLoading: false,
      };

    //   Total Cold Messages
    case TOTAL_COLD_MESSAGE:
      return {
        ...state,
        totalColdMessagesBlock: payload,
      };
    case TOTAL_COLD_MESSAGE_LOADING:
      return {
        ...state,
        totalColdMessagesLoading: true,
      };
    case TOTAL_COLD_MESSAGE_LOADING_COMPLETE:
      return {
        ...state,
        totalColdMessagesLoading: false,
      };

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
