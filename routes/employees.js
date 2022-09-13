const express = require('express');
const {homepage, addEmp, removeEmp} = require('../controllers/employees');
const router = express.Router();

router.get('/', homepage);
router.post('/addEmp', addEmp);
router.get('/removeEmp', removeEmp);

module.exports = router;