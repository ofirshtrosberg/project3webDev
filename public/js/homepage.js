$(()=>{
    $("body").on('click', '.editBtn', function(){
        const editBtn = $(this).html();
        const editBtnCopy = $(editBtn);
        const id = $(editBtnCopy)[0].innerHTML;
        const fullName = $(editBtnCopy)[2].innerHTML;
        const age = $(editBtnCopy)[4].innerHTML;
        const phoneNumber = $(editBtnCopy)[6].innerHTML;
        const salary = $(editBtnCopy)[8].innerHTML;
        const level = $(editBtnCopy)[10].innerHTML;
        const jobDesc = $(editBtnCopy)[12].innerHTML;
        $("#oldIdInput").val(id);
        $("#fullNameEdit").val(fullName);
        $("#ageEdit").val(age);
        $("#phoneNumberEdit").val(phoneNumber);
        $("#salaryEdit").val(salary);
        $("#levelEdit").val(level);
        $("#jobDescEdit").val(jobDesc);
    });

    function validation(fullName, age, phoneNumber, salary, level, jobDesc, errorDiv){
        const onlyLettersAndSpaces = /^[A-Za-z\s]*$/
        const onlyNumbers = /[0-9]+/
        const PhoneStart = /(050|054|053|052)\d+/
        
        if(fullName == "")
        {
            $(errorDiv).text("Invalid input - Full Name is required");
            return false;
        }
        else if(!onlyLettersAndSpaces.test(fullName))
        {
            $(errorDiv).text("Invalid input - Name must have only letters and spaces");
            return false;
        }
        if(age == "")
        {
            $(errorDiv).text("Invalid input - Age is required");
            return false;
        }
        else if(!onlyNumbers.test(age))
        {
            $(errorDiv).text("Invalid input - Age must have only numbers");
            return false;
        }
        else if(onlyNumbers.test(age) && (age > 150))
        {
            $(errorDiv).text("Invalid input - Age is max 150");
            return false;
        }
        if(phoneNumber == "")
        {
            $(errorDiv).text("Invalid input - Phone Number is required");
            return false;
        }
        else if(!onlyNumbers.test(phoneNumber))
        {
            $(errorDiv).text("Invalid input - Phone Number must have only numbers");
            return false;
        }
        else if(onlyNumbers.test(phoneNumber) && !PhoneStart.test(phoneNumber))
        {
            $(errorDiv).text("Invalid input - Phone Number must start with one of the following: 050/052/053/054");
            return false;
        }
        else if(onlyNumbers.test(phoneNumber) && PhoneStart.test(phoneNumber) && (phoneNumber.length != 10))
        {
            $(errorDiv).text("Invalid input - Phone Number must have 10 digits");
            return false;
        }
        if(salary == "")
        {
            $(errorDiv).text("Invalid input - Salary is required");
            return false;
        }
        else if(!onlyNumbers.test(salary))
        {
            $(errorDiv).text("Invalid input - Salary must have only numbers");
            return false;
        }
        else if(onlyNumbers.test(salary) && ((salary < 30) || (salary > 100000)))
        {
            $(errorDiv).text("Invalid input - Salary must be between 30 and 100,000");
            return false;
        }
        else if(level == ""){
            $(errorDiv).text("Invalid input - Level is required");
            return false;
        }
        else if((level != "Junior") && (level != "Senior")&& (level != "Expert") )
        {
            $(errorDiv).text("Invalid input - Level must be one of the following: Junior/Senior/Expert");
            return false;
        }
        else if(jobDesc == "")
        {
            $(errorDiv).text("Invalid input - Job Description is required");
            return false;
        }
        else
        {
            $(errorDiv).text("");
            return true;
        }
    }
    $("body").on('click', '#addBtn', function(){
            const fullName = $("#fullNameAdd").val();
            const age = $("#ageAdd").val(); 
            const phoneNumber = $("#phoneNumberAdd").val(); 
            const salary =$("#salaryAdd").val();
            const level = $("#levelAdd").val();
            const jobDesc = $("#jobDescAdd").val();
            const errorDiv = "#invalidErrorAdd";
            if(validation(fullName,age,phoneNumber,salary,level, jobDesc, errorDiv)){
                $("#addBtn").attr('type', 'submit');
            } 
    });

    $("body").on('click', '#editBtn', function(){
        const fullName = $("#fullNameEdit").val();
        const age = $("#ageEdit").val(); 
        const phoneNumber = $("#phoneNumberEdit").val(); 
        const salary =$("#salaryEdit").val();
        const level = $("#levelEdit").val();
        const jobDesc = $("#jobDescEdit").val();
        const errorDiv = "#invalidErrorEdit";
         if(validation(fullName,age,phoneNumber,salary,level, jobDesc, errorDiv)){
            $("#editBtn").attr('type', 'submit');
        }
       
});
});