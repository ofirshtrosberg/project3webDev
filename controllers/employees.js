const empModel = require('../models/employees');

function validation(fullName, age, phoneNumber, salary, jobDesc){
    const onlyLettersAndSpaces = /^[A-Za-z\s]*$/
    const onlyNumbers = /[0-9]+/
    const PhoneStart = /(050|054|053|052)\d+/
    
    if(fullName == "")
    {
        $(".invalidError").text("Invalid input - Full Name is required");
        return false;
    }
    else if(!onlyLettersAndSpaces.test(fullName))
    {
        $(".invalidError").text("Invalid input - Name must have only letters and spaces");
        return false;
    }
    else if(!onlyNumbers.test(age))
    {
        $(".invalidError").text("Invalid input - Age must have only numbers");
        return false;
    }
    else if(onlyNumbers.test(age) && (age > 150))
    {
        $(".invalidError").text("Invalid input - Age is max 150");
        return false;
    }
    else if(!onlyNumbers.test(phoneNumber))
    {
        $(".invalidError").text("Invalid input - Phone Number must have only numbers");
        return false;
    }
    else if(onlyNumbers.test(phoneNumber) && !PhoneStart.test(phoneNumber))
    {
        $(".invalidError").text("Invalid input - Phone Number must start with one of the following: 050/052/053/054");
        return false;
    }
    else if(onlyNumbers.test(phoneNumber) && PhoneStart.test(phoneNumber) && (phoneNumber.length != 10))
    {
        $(".invalidError").text("Invalid input - Phone Number must have 10 digits");
        return false;
    }
    else if(!onlyNumbers.test(salary))
    {
        $(".invalidError").text("Invalid input - Salary must have only numbers");
        return false;
    }
    else if(onlyNumbers.test(salary) && ((salary < 30) || (salary > 100000)))
    {
        $(".invalidError").text("Invalid input - Salary must be between 30 and 100,000");
        return false;
    }
    else if(jobDesc == "")
    {
        $(".invalidError").text("Invalid input - Job Description is required");
        return false;
    }
    else
    {
        // empModel.addEmp(fullName, age, phoneNumber, salary, jobDesc);
        // res.redirect('/');
        $(".invalidError").text("");
        return true;
    }
}

function homepage(req, res){
    res.render('homepage.ejs', {employees: empModel.getEmlpyees()});
}
function addEmp(req, res){
    //extract all the information from the body of the post request 
    const fullName= req.body.fullName;
    const age = req.body.age;
    const phoneNumber = req.body.phoneNumber;
    const salary= req.body.salary;
    const jobDesc = req.body.jobDesc;
    if(validation(fullName, age, phoneNumber, salary, jobDesc)){
        empModel.addEmp(fullName, age, phoneNumber, salary, jobDesc);
        res.redirect('/');
    }
}
function removeEmp(req, res){
    const id = req.body.id;
    empModel.removeEmp(id);
    res.redirect('/');
}
function editEmp(req, res){
    const oldId = req.body.oldId;
    const fullName = req.body.fullName;
    const age = req.body.age;
    const phoneNumber = req.body.phoneNumber;
    const salary = req.body.salary;
    const jobDesc = req.body.jobDesc;
    empModel.editEmp(oldId, fullName, age, phoneNumber, salary, jobDesc);
    res.redirect('/');   
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