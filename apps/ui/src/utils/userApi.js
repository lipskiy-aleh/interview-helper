import { utils } from '../modules/shared'
import { apiGet } from '../modules/shared/utils/apiMethods';
const { apiMethods: { apiPost } } = utils

class User {
  getUserData = async () => {
    return await apiGet('user')
  }

  createUser = async (userInfo) => {
    return await apiPost('user', userInfo)
  }
}

export default new User()
