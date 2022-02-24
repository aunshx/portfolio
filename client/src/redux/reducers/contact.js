import {
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
} from "../actions/types";
//
const initialState = {
    // Email
  emailLoading: false,
  emailError: false,
  emailSuccess: false,
  emailMessage: '',

// Messages 
messages: [],
messagesLoading: false,
messagesOldest: [],

// Lazy Loading 
rendererMessages: false,
lazyLoading: false,

// Messages total Count 
messagesTotalCount: 0,
messagesUnseenCount: 0

};
// kk
function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
      // Set Count
      case SET_MESSAGES_TOTAL_COUNT:
        return {
          ...state,
          messagesTotalCount: payload,
        };
      case SET_MESSAGES_UNSEEN_COUNT:
        return {
          ...state,
          messagesUnseenCount: payload,
        };
      case SET_MESSAGES_UNSEEN_COUNT_INCREASE:
        return {
          ...state,
          messagesUnseenCount: state.messagesUnseenCount + 1,
        };

      // Renderer Message
      case SET_RENDERER_MESSAGE_TRUE:
        return {
          ...state,
          rendererMessages: true,
        };
      case SET_RENDERER_MESSAGE_FALSE:
        return {
          ...state,
          rendererMessages: false,
        };

      // Messages - Delete
      case REMOVE_MESSAGE_FROM_ARRAY:
        return {
          ...state,
          messages: state.messages.filter(
            (element, map) => element._id !== payload
          ),
        };

      // Messages - Update Status
      case UPDATE_MESSAGE_STATUS:
        return {
          ...state,
          messages: state.messages.map((element, index) =>
            element._id === payload.messageId
              ? {
                  ...element,
                  status: payload.status,
                }
              : element
          ),
        };

      // Messages - Comment Update
      case COMMENT_ON_MESSAGE:
        return {
          ...state,
          messages: state.messages.map((element, index) =>
            element._id === payload.id
              ? {
                  ...element,
                  comment: payload.comment,
                }
              : element
          ),
        };

      // Messages - Retrieve
      case MESSAGES:
        return {
          ...state,
          messages: [...state.messages, ...payload.data],
          lazyLoading: payload.lazyLoading,
        };
      case MESSAGES_RESET:
        return {
          ...state,
          messages: [],
        };
      case MESSAGES_OLDEST:
        return {
          ...state,
          messagesOldest: [...state.messagesOldest, ...payload.data],
          lazyLoading: payload.lazyLoading,
        };
      case MESSAGES_OLDEST_RESET:
        return {
          ...state,
          messagesOldest: [],
        };
      case MESSAGES_ON_RELOAD:
        return {
          ...state,
          messages: payload.data,
          lazyLoading: payload.lazyLoading,
        };
      case MESSAGES_ON_RELOAD_OLDEST:
        return {
          ...state,
          messagesOldest: payload.data,
          lazyLoading: payload.lazyLoading,
        };
      case MESSAGES_LOADING:
        return {
          ...state,
          messagesLoading: true,
        };
      case MESSAGES_LOADING_COMPLETE:
        return {
          ...state,
          messagesLoading: false,
        };

      // Email
      case EMAIL_LOADING:
        return {
          ...state,
          emailLoading: true,
        };
      case EMAIL_LOADING_COMPLETE:
        return {
          ...state,
          emailSuccess: true,
          emailLoading: false,
        };
      case EMAIL_RESET:
        return {
          ...state,
          emailLoading: false,
          emailError: false,
          emailSuccess: false,
          emailMessage: "",
        };
      case EMAIL_ERROR:
        return {
          ...state,
          emailError: true,
          emailSuccess: false,
          emailMessage: payload.message,
        };
      default:
        return state;
    }
}

export default authReducer
