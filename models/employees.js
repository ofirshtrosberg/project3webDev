let currId = 6;
const employees = [
    {id:1, fullName:"Moshe Cohen", age:21, phoneNumber:"0541234561", salary:10001,level:"Junior", jobDesc: "QA Engineer"  },
    {id:2, fullName:"Dana Foo",  age:22, phoneNumber:"0541234562", salary:10002,level:"Junior", jobDesc: "Software Engineer"  },
    {id:3, fullName:"Yossi Bar", age:23, phoneNumber:"0541234563", salary:10003,level:"Senior", jobDesc: "Software Engineer"  },
    {id:4, fullName:"Maya Baz",  age:24, phoneNumber:"0541234564", salary:10004,level:"Junior", jobDesc: "QA Engineer"  },
    {id:5, fullName:"Yuval Alice", age:25, phoneNumber:"0541234565", salary:10004,level:"Expert", jobDesc: "DevOps"  }    
];
function getEmlpyees(){
    return employees;
}
function getEmpByID(id){
    return employees.find(emp=> emp.id == id);
}
function addEmp(fullName, age, phoneNumber, salary,level, jobDesc){
    employees.push({id:currId, fullName:fullName, age:age, phoneNumber:phoneNumber, salary:salary,level:level, jobDesc:jobDesc});
    currId++;
}
function removeEmp(id){
    const empIndex = employees.findIndex(emp => {
        return emp.id == id;
    });
    employees.splice(empIndex, 1);
}
function editEmp(oldId,fullName, age, phoneNumber, salary,level, jobDesc){
   removeEmp(Number(oldId));
   addEmp(fullName, age, phoneNumber, salary,level, jobDesc);
}
function searchEmp(searchedValue){
    return employees.filter(emp => emp.fullName.toUpperCase().indexOf(searchedValue.toUpperCase())>=0);
}
module.exports = {getEmlpyees, getEmpByID, addEmp, removeEmp, editEmp, searchEmp};