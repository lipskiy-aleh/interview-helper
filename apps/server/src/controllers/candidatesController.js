const candidatesRepository = require('../repositories/candidatesRepository')
const candidateValidator = require('../validators/candidateValidator')

class CandidatesController {
  constructor() {
    this._repository = candidatesRepository
  }

  async getList(query = {}) {
    const result = await this._repository.find(query)
    return result
  }

  async addCandidate(candidate) {
    candidateValidator.validate(candidate)

    return { success: true }
  }
}

const instance = new CandidatesController()

module.exports = instance
