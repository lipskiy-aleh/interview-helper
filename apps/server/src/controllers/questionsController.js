const questionRepository = require('../repositories/questionRepository')

class QuestionsController {
  constructor() {
    this._repository = questionRepository
  }

  async getList(query = {}) {
    const result = await this._repository.find(query)
    return result
  }
}

const instance = new QuestionsController()

module.exports = instance
