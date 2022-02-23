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

  // Set Renderer False
  SET_RENDERER_MESSAGE_FALSE,
  SET_RENDERER_MESSAGE_TRUE,
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

// Lazy Loading 
rendererMessages: false,
lazyLoading: false

};
// kk
function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
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

      // Messages - Retrieve
      case MESSAGES:
        return {
          ...state,
          messages: [...state.messages, ...payload.data],
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
