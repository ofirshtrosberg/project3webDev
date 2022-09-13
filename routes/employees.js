const express = require('express');
const {homepage, addEmp, removeEmp, editEmp, showEmp} = require('../controllers/employees');
const router = express.Router();

router.get('/', homepage);
router.post('/addEmp', addEmp);
router.get('/removeEmp', removeEmp);
router.get('/editEmp', editEmp);
router.get('/employee', showEmp);
module.exports = router;