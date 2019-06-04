import { utils } from '../../shared'
const { apiMethods: { apiGet } } = utils

class Questions {
  getQuestionsList = async () => {
    return await apiGet('questions')
  }
}

export default new Questions()
