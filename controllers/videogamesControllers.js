const videogame = require('../models/videogame')

exports.createVideogame = (req, res) => {
  videogame.create({...req.body})
  .then(videogame => res.status(201).json({ videogame }))
  .catch(err => res.status(500).json({ err }))
}

exports.getAllVideogames = (req, res) =>{
  videogame.find()
  .then(videogames => res.status(201).json({ videogames }))
  .catch(err => res.status(500).json({ err }))
}

exports.getVideogame = (req, res) => {
  const {id} = req.params
  videogame.findById(id)
  .then(videogame => res.status(201).json({ videogame }))
  .catch(err => res.status(500).json({ err }))
}

exports.updateVideogame = (req,res) =>{
  const {id} = req.params
  videogame.findByIdAndUpdate(id)
  .then(videogame => res.status(201).json({ videogame }))
  .catch(err => res.status(500).json({ err }))
}

exports.deleteVideogame = (req,res) =>{
  const {id} = req.params
  videogame.findByIdAndDelete(id)
  .then(videogame => res.status(201).json({ videogame }))
  .catch(err => res.status(500).json({ err }))
}