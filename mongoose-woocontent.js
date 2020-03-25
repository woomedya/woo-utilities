const ObjectId = require('mongodb').ObjectId;

var models = {}, mongoose;

const init = ({ _mongoose }) => {
  mongoose = _mongoose;
}

const create = (fieldName) => {
  model = new mongoose.Schema({
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

  models[fieldName] = mongoose.main.model(fieldName, model, fieldName);

  return models[fieldName]
}

const get = (fieldName) => {
  if (!models[fieldName])
    create(fieldName);

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