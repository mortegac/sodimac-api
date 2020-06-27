const express = require('express');
const router = express.Router();

router.use('/api/users', require('./users.routes'));

module.exports = router