import { utils } from '../../shared'
const { apiMethods: { apiGet } } = utils

class Candidates {
  getCandidatesList = async () => {
    return await apiGet('candidates')
  }
}

export default new Candidates()
