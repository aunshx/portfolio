import { combineReducers } from 'redux'
import contact from './contact'
import sidebar from './sidebar'
import settings from './settings'
import auth from './auth'

export default combineReducers({
    contact,
    sidebar,
    settings,
    auth
})
