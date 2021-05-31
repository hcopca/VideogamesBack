const router = require('express').Router();
const {getAllDevelopers} = require('../controllers/developerControllers')

router.get('/all', getAllDevelopers)


module.exports = router