const BaseRepositoryCOS = require('./BaseRepositoryMongo')
const connectionPool = require('./MongoDbConnectionPool')
const { mongoDB } = require('../../configs')

class QuestionRepository extends BaseRepositoryCOS {
}

const instance = new QuestionRepository(connectionPool, mongoDB.collections.questions)

module.exports = instance
