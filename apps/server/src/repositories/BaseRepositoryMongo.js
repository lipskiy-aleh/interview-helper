const mongodb = require('mongodb')

/**
 * Base repository for persisting data in MongoDB. Repository uses MongoDB API.
 */
class BaseRepositoryCOS {
  constructor(connectionPool, collectionName) {
    this.connectionPool = connectionPool
    this.collectionName = collectionName
  }

  /**
     * Convert string to identifier in repository format.
     *
     * @param {string | ObjectId} id - string representing identifier or identifier in repository format.
     * @returns {ObjectId} - identifier in repository format.
     */
  buildId(id) {
    return mongodb.ObjectID(id)
  }

  /**
     * Retrieve a document by id.
     *
     * @param {string | ObjectId} id - string representing identifier or identifier in repository format.
     * @param {object} projection - object defining projection of resulting document.
     *                              Projection uses MongoDB format (https://docs.mongodb.com/manual/reference/operator/projection/)
     * @returns {Promise<object>} - document if it exists, otherwise returns null.
     */
  async get(id, projection = null) {
    const filter = {
      _id: this.buildId(id),
    }

    const collection = await this._getCollection()
    const document = await collection.findOne(filter, projection)
    return document
  }

  /**
     * Retrieve all documents in repository collection.
     *
     * @returns {Promise<Array<object>>} - array of all documents in collection.
     */
  getAll() {
    return this.find({})
  }

  /**
     * Retrieve page of documents that match specified conditions.
     *
     * @param {object} filter - object defining filtering conditions; if not specified, then all documents will be returned.
     *                          Filtering uses MongoDB format (https://docs.mongodb.com/manual/reference/operator/query/).
     * @param {object} projection - object defining projection of resulting documents.
     * @param {object} sort - object defining fields by which results should be sorted; if not specified, then documents will be sorted by id.
     * @param {object} page - object limiting results to particular page of documents. If specified, should contain property
     *                        size that defines page size and property number that defines page number (starting from 1);
     *                        if not specified, then all documents matching filter will be returned.
     * @returns {Promise<Array<object>>} - array of documents that match specified parameters.
     */
  async find({
    filter,
    projection,
    sort,
    page,
  }) {
    const collection = await this._getCollection()
    let cursor = await collection.find(filter || {})
    try {
      if (projection) {
        cursor = cursor.project(projection)
      }
      if (sort) {
        cursor = cursor.sort(sort)
      }
      if (page) {
        const firstDocumentIndex = page.size * (page.number - 1)
        cursor = cursor.skip(firstDocumentIndex).limit(page.size)
      }
      const documents = await cursor.toArray()
      return documents
    } finally {
      await cursor.close()
    }
  }

  /**
     * Retrieve count of documents that match specified conditions.
     *
     * @param {object} filter - object defining filtering conditions; if not specified, then all documents will be returned.
     *                          Filtering uses MongoDB format (https://docs.mongodb.com/manual/reference/operator/query/).
     * @returns {Promise<Array<object>>} - array of documents that match specified parameters.
     */
  async count({
    filter,
  }) {
    const collection = await this._getCollection()
    const cursor = await collection.find(filter || {})
    try {
      const total = await cursor.count()
      return total
    } finally {
      await cursor.close()
    }
  }

  /**
     * @param {array} pipeline - a sequence of data aggregation operations or stages. See the aggregation pipeline operators
     *                           for details (https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/).
     * @returns {Promise<Array<object>>} - array of the data produced by the final stage of the aggregation pipeline operation.
     */
  async aggregate(pipeline) {
    const collection = await this._getCollection()
    const cursor = await collection.aggregate(pipeline)
    try {
      const result = await cursor.toArray()
      return result
    } finally {
      await cursor.close()
    }
  }

  /**
     * Inserts a new document in the database and assigns uniqie identifier to it.
     *
     * @param {object} document - object containing document properties.
     * @returns {Promise<Object>} - inserted document.
     */
  async create(document) {
    const collection = await this._getCollection()
    const result = await collection.insertOne(document)
    return result.ops[0] // Property ops contains inserted document
  }

  /**
     * Updates existing document in the database.
     *
     * @param {object} propertyChanges - object with updated properties. Properties not included in this object won't be
     *                                   affected by the operation (unless there're advanced operations for them).
     * @param {object} operators - advanced operators for update operation. Please, refer to documentation for details:
     *                             https://docs.mongodb.com/manual/reference/operator/update/
     * @returns {Promise} - promise to track operation completion.
     */
  async update(propertyChanges, operators) {
    const filter = {
      _id: this.buildId(propertyChanges._id),
    }
    const update = {
      $set: {
        ...propertyChanges,
      },
      ...operators,
    }
    delete update.$set._id // Don't alter _id property of the document

    const collection = await this._getCollection()
    return collection.updateOne(filter, update)
  }

  /**
     * Updates multiple documents in the database.
     *
     * @param {object} filter - conditions to select documents for update.
     *                          To update multiple documents by id, use filter { _id: { $in: [id1, id2, id3, id4] } }.
     * @param {object} propertyChanges - object with updated properties. Properties not included in this object won't be
     *                                   affected by the operation.
     * @returns {Promise} - promise to track operation completion.
     */
  async updateMany(filter, propertyChanges, operators) {
    const update = {
      $set: {
        ...propertyChanges,
      },
      ...operators,
    }

    const collection = await this._getCollection()
    return collection.updateMany(filter, update)
  }

  /**
     * Creates new or replaces existing document in the database.
     *
     * @param {object} document - document to store in the database. If contains _id, then existing document will be
     *                            replaced; otherwise new document will be created.
     * @returns {Promise<object>} - the resulting document in the database.
     */
  async put(document) {
    const filter = {
      _id: this.buildId(document._id),
    }
    const options = {
      upsert: true,
    }
    // eslint-disable-next-line no-param-reassign
    delete document._id // Don't alter _id property of the document

    const collection = await this._getCollection()
    const result = await collection.replaceOne(filter, document, options)

    if (result.upsertedId) {
      return this.get(result.upsertedId._id)
    }
    return document
  }

  /**
     * Deletes existing document from the database.
     *
     * @param {string | ObjectId} id - identifier of document that should be deleted.
     * @returns {Promise<number>} - number of deleted documents (1 if document was deleted, 0 if it wasn't found).
     */
  async delete(id) {
    const filter = {
      _id: this.buildId(id),
    }

    const collection = await this._getCollection()
    const result = await collection.deleteOne(filter)

    return result.deletedCount
  }

  /**
     * Deletes multiple existing document from the database.
     *
     * @param {Object} filter - filter that selects documents that should be deleted.
     * @returns {Promise<number>} - number of deleted documents.
     */
  async deleteMany(filter) {
    const collection = await this._getCollection()
    const result = await collection.deleteMany(filter)

    return result.deletedCount
  }

  /**
     * Connects to the database collection that is associated with this repository.
     *
     * @returns {Promise<Collection>} - collection instance.
     * @protected
     */
  async _getCollection() {
    const db = await this.connectionPool.connect()
    return db.collection(this.collectionName)
  }
}

module.exports = BaseRepositoryCOS
