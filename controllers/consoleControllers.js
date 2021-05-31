const consoleV = require('../models/console')

exports.getAllConsoles = (req, res) =>{
  consoleV.find()
  .then(consoles => res.status(201).json({ consoles }))
  .catch(err => res.status(500).json({ err }))
}