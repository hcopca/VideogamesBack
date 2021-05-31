const {model, Schema} = require('mongoose')

const consoleSchema = new Schema({
  name: String
}, {
  timestamps: false,
  versionKey: false
})


module.exports = model('console', consoleSchema);
