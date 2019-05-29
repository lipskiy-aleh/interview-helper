const mongoClient = require('mongodb').MongoClient

class CosmosDbConnectionPool {
    constructor(connectionInfo) {
        this.connectionInfo = connectionInfo
    }

    connect() {
        if (!this.connectPromise) {
            this.connectPromise = new Promise((resolve, reject) => {
                const options = {
                    useNewUrlParser: true
                }
                mongoClient.connect(this.connectionInfo.connectionString, options, (err, dbClient) => {
                    if (err) {
                        reject(err)
                    } else {
                        this.dbClient = dbClient
                        resolve(dbClient.db(this.connectionInfo.databaseName))
                    }
                })
            })
        }
        return this.connectPromise
    }

    close() {
        if (this.dbClient) {
            this.dbClient.close()
        }
    }
}

module.exports = CosmosDbConnectionPool