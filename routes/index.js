const router = require('express').Router();
const uploadCloud = require('../config/cloudinary')
const { upload } = require('../controllers/uploadControllers')

router.post('/upload', uploadCloud.single('photo'), upload)


module.exports = router;