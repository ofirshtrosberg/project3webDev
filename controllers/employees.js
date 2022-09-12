const empModel = require('../models/employees');

function homepage(req, res){
    res.render('homepage.ejs', {employees: empModel.getEmlpyees()});
}
module.exports = {homepage};