const empModel = require('../models/employees');

function homepage(req, res){
    res.render('homepage.ejs', {employees: empModel.getEmlpyees()});
}
function addEmp(req, res){
    //extract all the information from the body of the post request 
    const id = req.body.id;
    const fullName= req.body.fullName;
    const age = req.body.age;
    const phoneNumber = req.body.phoneNumber;
    const salary= req.body.salary;
    const jobDesc = req.body.jobDesc;
    empModel.addEmp(id, fullName, age, phoneNumber, salary, jobDesc);
    res.redirect('/');
}
function removeEmp(req, res){
    const id = req.query.id;
    empModel.removeEmp(id);
    res.redirect('/');
}
function editEmp(req, res){
    // const oldId = req.query.oldId;
    // console.log(oldId);
    //res.redirect('/');
}
function showEmp(req, res){
    const id = req.query.id;
    res.render('employee.ejs', {employee: empModel.getEmpByID(id)});
}
function searchEmp(req, res){
    const searchedValue = req.query.searchedValue;
    res.json(empModel.searchEmp(searchedValue));    
}
module.exports = {homepage, addEmp, removeEmp, editEmp, showEmp, searchEmp};