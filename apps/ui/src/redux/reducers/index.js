import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { moduleReducer as questions } from '../../modules/questions'

export default history => combineReducers({
  router: connectRouter(history),
  questions,
})
