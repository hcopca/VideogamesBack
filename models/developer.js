const {model, Schema} = require('mongoose')

const developerSchema = new Schema({
  name: String
}, {
  timestamps: false,
  versionKey: false
})


module.exports = model('developer', developerSchema);
