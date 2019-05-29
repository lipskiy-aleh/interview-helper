const BaseRepositoryCOS = require('./BaseRepositoryMongo')
const connectionPool = require('./MongoDbConnectionPool')
const { mongoDB } = require('../../configs')

class QuestionRepository extends BaseRepositoryCOS {
  constructor (connectionPool, collectionName) {
    super(connectionPool, collectionName)
  }
}

const instance = new QuestionRepository(connectionPool, mongoDB.collections.questions)

module.exports = instance
