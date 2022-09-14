const express = require('express');
const {homepage, addEmp, removeEmp, editEmp, showEmp, searchEmp} = require('../controllers/employees');
const router = express.Router();

router.get('/', homepage);
router.post('/addEmp', addEmp);
router.get('/removeEmp', removeEmp);
router.post('/editEmp', editEmp);
router.get('/employee', showEmp);
router.get('/search', searchEmp);
module.exports = router;