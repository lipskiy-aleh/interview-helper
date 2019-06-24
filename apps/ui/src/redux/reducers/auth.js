import {
  LOGIN,
} from '../actions/auth'

const initialState = {
  loggedIn: false,
  user: null,
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      }
    default:
      return state
  }
}

export default authReducer
