const Joi = require('joi')
const BaseError = require('../errors/BaseError')

class CandidateValidator {
  constructor() {
    this._schema = Joi.object().keys({
      name: Joi.number().required(),
    })
  }

  validate(comment) {
    const { error } = Joi.validate(comment, this._schema, { allowUnknown: true })
    if (error) {
      throw new BaseError(error.message)
    }
  }
}

const instance = new CandidateValidator()

module.exports = instance
