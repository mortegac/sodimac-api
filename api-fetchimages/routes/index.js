const express = require("express");
const router = express.Router();


router.use('/images', require('./images.routes'));


module.exports = router;