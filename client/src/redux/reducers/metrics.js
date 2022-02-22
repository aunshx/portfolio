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

  // Total Hits Type
  TOTAL_HITS_TYPE,

  // Recent Messages 
  RECENT_MESSAGES_LIMIT,
  RECENT_MESSAGES_LIMIT_LOADING,
  RECENT_MESSAGES_LIMIT_LOADING_COMPLETE,
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
  totalHitsBlock: '0',

  // Total Cold Messages Block
  totalColdMessagesLoading: false,
  totalColdMessagesBlock: '0',

  // Total Ongoing Messages Block
  totalOngoingMessagesLoading: false,
  totalOngoingMessagesBlock: '0',

  // Total Success Messages Block
  totalSuccessMessagesLoading: false,
  totalSuccessMessagesBlock: '0',

  // Total Not Replied Messages Block
  totalNoReplyMessagesLoading: false,
  totalNoReplyMessagesBlock: '0',

  // Total Hits Synopsis
  totalHitsSynopsisLoading: false,
  totalHitsSynopsisToday: 0,
  totalHitsSynopsisWeek: '0',
  totalHitsSynopsisMonth: '0',
  totalHitsSynopsisYear: '0',
  totalHitsSynopsisAllTime: '0',
  totalHitsType: '',

  // Recent Messages Limit 
  recentMessagesLimit: [],
  recentMessagesLimitLoading: false
};
// kk
function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // Recent Messages Limit
    case RECENT_MESSAGES_LIMIT:
      return {
        ...state,
        recentMessagesLimit: payload,
      };

    case RECENT_MESSAGES_LIMIT_LOADING:
      return {
        ...state,
        recentMessagesLimitLoading: true,
      };

    case RECENT_MESSAGES_LIMIT_LOADING_COMPLETE:
      return {
        ...state,
        recentMessagesLimitLoading: false,
      };

    //   Total Hits Synopsis
    case TOTAL_HITS_SYNOPSIS_TODAY:
      return {
        ...state,
        totalHitsSynopsisToday: payload,
      };

    case TOTAL_HITS_SYNOPSIS_WEEK:
      return {
        ...state,
        totalHitsSynopsisWeek: payload,
      };

    case TOTAL_HITS_SYNOPSIS_MONTH:
      return {
        ...state,
        totalHitsSynopsisMonth: payload,
      };

    case TOTAL_HITS_SYNOPSIS_YEAR:
      return {
        ...state,
        totalHitsSynopsisYear: payload,
      };

    case TOTAL_HITS_SYNOPSIS_ALL_TIME:
      return {
        ...state,
        totalHitsSynopsisAllTime: payload,
      };

    case TOTAL_HITS_SYNOPSIS_LOADING:
      return {
        ...state,
        totalHitsSynopsisLoading: true,
      };

    case TOTAL_HITS_SYNOPSIS_LOADING_COMPLETE:
      return {
        ...state,
        totalHitsSynopsisLoading: false,
      };

    case TOTAL_HITS_TYPE:
      return {
        ...state,
        totalHitsType: payload,
      };

    // Total Not Replied Messages
    case TOTAL_NOT_REPLIED_MESSAGE:
      return {
        ...state,
        totalNoReplyMessagesBlock: payload,
      };
    case TOTAL_NOT_REPLIED_MESSAGE_LOADING:
      return {
        ...state,
        totalNoReplyMessagesLoading: true,
      };
    case TOTAL_NOT_REPLIED_MESSAGE_LOADING_COMPLETE:
      return {
        ...state,
        totalNoReplyMessagesLoading: false,
      };

    //   Total Success Messages
    case TOTAL_SUCCESS_MESSAGE:
      return {
        ...state,
        totalSuccessMessagesBlock: payload,
      };
    case TOTAL_SUCCESS_MESSAGE_LOADING:
      return {
        ...state,
        totalSuccessMessagesLoading: true,
      };
    case TOTAL_SUCCESS_MESSAGE_LOADING_COMPLETE:
      return {
        ...state,
        totalSuccessMessagesLoading: false,
      };

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
