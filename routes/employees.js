const express = require('express');
const {homepage} = require('../controllers/employees');
const router = express.Router();

router.get('/', homepage);

module.exports = router;