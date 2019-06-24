import { auth as firebaseAuth } from 'firebase'
import { utils } from '../../modules/shared'

const { routerActions } = utils
const auth = firebaseAuth()

// ------------------------------------
// Constants
// ------------------------------------

const MODULE_NAME = 'AUTH'
export const LOGIN = `${MODULE_NAME}/LOGIN`

// ------------------------------------
// Actions
// ------------------------------------

export const loginRequest = ({ username, password }) => async (dispatch, getState) => {
  try {
    const user = await auth.signInWithEmailAndPassword(username, password)
    dispatch({
      type: LOGIN,
      payload: user,
    })
    routerActions.goTo('/home')
    console.log(user)
  } catch (error) {
    console.error(error)
  }
}

// FIXME: Move from here.
auth.onAuthStateChanged((authUser) => {
  if (authUser) {
    return auth.currentUser.getIdToken()
      .then((idToken) => {
        console.log('idToken was setup')
        sessionStorage.setItem('id_token', idToken)
      }).catch()
  }
})
