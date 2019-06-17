class BaseError extends Error {
  constructor(message = 'Something went wrong', status = 500, originalError = '') {
    super(message)
    this.name = this.constructor.name
    this.status = status
    this.originalError = originalError
  }
}

module.exports = BaseError
