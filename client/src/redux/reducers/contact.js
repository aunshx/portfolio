import { EMAIL_LOADING, EMAIL_LOADING_COMPLETE, EMAIL_RESET, EMAIL_ERROR } from '../actions/types'
//
const initialState = {
  emailLoading: false,
  emailError: false,
  emailSuccess: false,
  emailMessage: ''
};
// kk
function authReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case EMAIL_LOADING:
            return {
                ...state,
                emailLoading: true,
            }
        case EMAIL_LOADING_COMPLETE:
            return {
                ...state,
                emailSuccess: true,
                emailLoading: false,
            }
        case EMAIL_RESET:
            return {
              ...state,
              emailLoading: false,
              emailError: false,
              emailSuccess: false,
              emailMessage: ''
            };
        case EMAIL_ERROR:
            return {
                ...state,
                emailError: true,
                emailMessage: payload.message
            }
        default:
            return state
    }
}

export default authReducer
