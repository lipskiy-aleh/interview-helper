import {
  LOGIN,
} from '../actions/auth'

function checkToken() {
  const token = sessionStorage.getItem('id_token')
  return !!token
}

const initialState = {
  loggedIn: checkToken(),
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
