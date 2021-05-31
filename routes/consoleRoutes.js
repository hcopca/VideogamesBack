const router = require('express').Router();
const {getAllConsoles} = require('../controllers/consoleControllers')

router.get('/all', getAllConsoles)


module.exports = router