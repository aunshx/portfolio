import { combineReducers } from 'redux'
import settings from './settings'
import sidebar from './sidebar'

const appReducer = combineReducers({
    sidebar,
    settings,
})


const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer
