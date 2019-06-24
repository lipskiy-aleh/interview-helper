import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth'
import { moduleReducer as questions } from '../../modules/questions'
import { moduleReducer as candidates } from '../../modules/candidates'

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  questions,
  candidates,
})
