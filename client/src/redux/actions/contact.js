import api from '../../utils/api'

import {
    // Email 
    EMAIL_LOADING, EMAIL_LOADING_COMPLETE, EMAIL_RESET, EMAIL_ERROR
} from './types'

// Get details of challenge creator
export const sendEmail= (name, email, organisation, message) => async (dispatch) => {
    const value = {}

    const body = JSON.stringify({
        name, email, organisation, message
    })

    try {
        dispatch({
            type: EMAIL_LOADING,
        })
  
        dispatch({
            type: EMAIL_LOADING_COMPLETE,
        })

        const res = await api.post("/contact/send-email", body)

        setTimeout(
            () =>
                dispatch({
                    type: EMAIL_RESET,
                }),
            5000
        )

    } catch (error) {
        value.message = error.response.data.errors[0].msg;
        value.type = "error";

        dispatch({
            type: EMAIL_ERROR,
            payload: value
        })

        setTimeout(
            () =>
                dispatch({
                    type: EMAIL_RESET,
                }),
            5000
        )
    }
}