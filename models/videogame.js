const {model, Schema, Mongoose} = require('mongoose')

const videogameSchema = new Schema({
  name: String,
  description: String,
  developer:{_id: Schema.Types.ObjectId, name: String},
  year: String,
  console: [{_id: Schema.Types.ObjectId, name: String}],
  image: String,
  isActive: Boolean
}, {
  timestamps: false,
  versionKey: false
})


module.exports = model('videogame', videogameSchema);
