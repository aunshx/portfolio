import {
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

};
// kk
function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
      // Messages - Delete
      case REMOVE_MESSAGE_FROM_ARRAY:
        return {
          ...state,
          messages: state.messages.filter((element, map) => element._id !== payload ),
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

      // Messages - Retrieve
      case MESSAGES:
        return {
          ...state,
          messages: payload,
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
