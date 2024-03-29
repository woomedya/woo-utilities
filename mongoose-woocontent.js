const ObjectId = require('mongodb').ObjectId;

var models = {},
  opts = {
    mongoose: null
  };

const init = ({
  mongoose
}) => {
  opts.mongoose = mongoose;
}

const create = (fieldName, dbName = '') => {
  dbName = dbName || 'main';

  model = new opts.mongoose.Schema({
    id: {
      type: String,
      unique: true,
      default: () => {
        return new ObjectId().toString();
      },
      index: true
    },
    title: {
      type: String
    },
    content: {
      type: Object
    },
    tags: {
      type: Array
    },
    updatedDate: {
      type: Date,
      default: () => {
        return new Date();
      },
    },
    createdDate: {
      type: Date,
      default: () => {
        return new Date();
      },
    },
    deleted: {
      type: Boolean,
      default: false
    }
  });

  models[fieldName] = opts.mongoose[dbName].model(fieldName, model, fieldName);

  return models[fieldName]
}

const get = (fieldName, dbName) => {
  if (!models[fieldName])
    create(fieldName, dbName);

  return models[fieldName];
}

const deleteModel = (fieldName) => {
  delete models[fieldName];

  return true;
}

module.exports = {
  init,
  create,
  get,
  deleteModel
}