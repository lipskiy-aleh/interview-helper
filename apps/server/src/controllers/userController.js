const firebaseAdmin = require('../controllers/firebaseAdmin')
const roles = require('../constants/roles.json')

class UserController {
  async getUser(user) {
    const snapshot = await firebaseAdmin.database().ref(`users/${user.uid}`).once('value')
    return snapshot.val()
  }

  async createUser(user, { name, surname, hr, developer }) {
    const userInfo = {
      name,
      surname,
      isAdmin: false,
      roles: [],
    }

    if (hr) {
      userInfo.roles.push(roles.HR)
    }
    if (developer) {
      userInfo.roles.push(roles.DEVELOPER)
    }

    await firebaseAdmin.database().ref(`users/${user.uid}`).set(userInfo)
    return userInfo
  }
}

const instance = new UserController()

module.exports = instance
