const router = require('express').Router();
const {createVideogame, getAllVideogames, getVideogame, updateVideogame, deleteVideogame} = require('../controllers/videogamesControllers')

router.post('/create', createVideogame)
router.get('/all', getAllVideogames)
router.get('/detail/:id', getVideogame)
router.patch('update/:id', updateVideogame)
router.delete('/delete/:id', deleteVideogame)

module.exports = router