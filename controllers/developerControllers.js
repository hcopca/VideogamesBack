const developer = require('../models/developer')

exports.getAllDevelopers = (req, res) =>{
  developer.find()
  .then(developers => res.status(201).json({ developers}))
  .catch(err => res.status(500).json({ err }))
}