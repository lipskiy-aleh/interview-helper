import {
  SET_QUESTIONS_LIST,
} from './actions'

const initialState = {
  list: [],
}

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUESTIONS_LIST:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default questionsReducer
