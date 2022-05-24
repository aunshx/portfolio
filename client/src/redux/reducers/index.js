import { combineReducers } from 'redux'
import contact from './contact'
import sidebar from './sidebar'
import settings from './settings'
import auth from './auth'
import metrics from './metrics'
import blog from './blog'

const appReducer = combineReducers({
    contact,
    sidebar,
    settings,
    auth,
    metrics,
    blog
})


const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer
