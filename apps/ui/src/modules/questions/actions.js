import questionsApi from './services/questionsApi'
import {
  MODULE_NAME,
} from './constants'

// ------------------------------------
// Constants
// ------------------------------------

export const SET_QUESTIONS_LIST = `${MODULE_NAME}/SET_QUESTIONS_LIST`

// ------------------------------------
// Actions
// ------------------------------------

export const fetchQuestionsList = () => async (dispatch, getState) => {
  try {
    const result = await questionsApi.getQuestionsList()
    dispatch({
      type: SET_QUESTIONS_LIST,
      payload: result,
    })
  } catch (error) {
    console.error(error)
  }
}
