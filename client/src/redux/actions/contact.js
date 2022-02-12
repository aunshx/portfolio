import api from '../../utils/api'
import moment from 'moment'

import {
    // Email 
    EMAIL_LOADING, EMAIL_LOADING_COMPLETE, EMAIL_RESET, EMAIL_ERROR, EMAIL_ERROR_RESET
} from './types'

// Get details of challenge creator
export const sendEmail= (name, email, organisation, message) => async (dispatch) => {
    const value = {}

    const body = JSON.stringify({
        name, email, organisation, message
    })

    const res = await api.post()

    try {
        dispatch({
            type: EMAIL_LOADING,
        })
  
        dispatch({
            type: EMAIL_LOADING_COMPLETE,
        })

        setTimeout(
                () =>
                    dispatch({
                        type: EMAIL_RESET,
                    }),
                5000
            )

    } catch (error) {
        
        dispatch({
            type: EMAIL_ERROR,
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