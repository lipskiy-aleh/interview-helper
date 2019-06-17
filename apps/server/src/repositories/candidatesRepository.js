const BaseRepositoryCOS = require('./BaseRepositoryMongo')
const connectionPool = require('./MongoDbConnectionPool')
const { mongoDB } = require('../../configs')

class CandidateRepository extends BaseRepositoryCOS {
}

const instance = new CandidateRepository(connectionPool, mongoDB.collections.questions)

module.exports = instance
