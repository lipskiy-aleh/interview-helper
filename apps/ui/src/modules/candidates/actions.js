import candidatesApi from './services/candidatesApi'
import {
  MODULE_NAME,
} from './constants'

// ------------------------------------
// Constants
// ------------------------------------

export const SET_CANDIDATES_LIST = `${MODULE_NAME}/SET_CANDIDATES_LIST`

// ------------------------------------
// Actions
// ------------------------------------

export const fetchCandidatesList = () => async (dispatch, getState) => {
  try {
    const result = await candidatesApi.getCandidatesList()
    dispatch({
      type: SET_CANDIDATES_LIST,
      payload: result,
    })
  } catch (error) {
    console.error(error)
  }
}
