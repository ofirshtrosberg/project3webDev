const express = require('express');
const {homepage, addEmp} = require('../controllers/employees');
const router = express.Router();

router.get('/', homepage);
router.post('/addEmp', addEmp);

module.exports = router;