const employees = [
    {id:1, firstName:"Moshe", lastName:"Cohen", age:21, phoneNumber:0541234561, salary:10001, jobDesc: "QA Engineer"  },
    {id:2, firstName:"Dana", lastName:"Foo", age:22, phoneNumber:0541234562, salary:10002, jobDesc: "Software Engineer"  },
    {id:3, firstName:"Yossi", lastName:"Bar", age:23, phoneNumber:0541234563, salary:10003, jobDesc: "Software Engineer"  },
    {id:4, firstName:"Maya", lastName:"Baz", age:24, phoneNumber:0541234564, salary:10004, jobDesc: "QA Engineer"  },
    {id:5, firstName:"Yuval", lastName:"Alice", age:25, phoneNumber:0541234565, salary:10004, jobDesc: "DevOps"  }    
];
function getEmlpyees(){
    return employees;
}
function getEmpByID(id){
    return employees.find(emp=> emp.id == id);
}
function addEmp(id, firstName, lastName, age, phoneNumber, salary, jobDesc){
    employees.push({id, firstName, lastName, age, phoneNumber, salary, jobDesc});
}
function removeEmp(){

}
module.exports = {getEmlpyees, getEmpByID, addEmp, removeEmp};