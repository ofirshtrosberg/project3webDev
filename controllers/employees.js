const empModel = require('../models/employees');

function homepage(req, res){
    res.render('homepage.ejs', {employees: empModel.getEmlpyees()});
}
function addEmp(req, res){
    //extract all the information from the body of the post request 
    const id = req.body.id;
    const  firstName= req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const phoneNumber = req.body.phoneNumber;
    const salary= req.body.salary;
    const jobDesc = req.body.jobDesc;
    empModel.addEmp(id, firstName, lastName, age, phoneNumber, salary, jobDesc);
    res.redirect('/');
}
function removeEmp(req, res){
    const id = req.query.id;
    empModel.removeEmp(id);
    res.redirect('/');
}
module.exports = {homepage, addEmp, removeEmp};