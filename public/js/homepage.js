$(()=>{
    $("body").on('click', '.editBtn', function(){
        const editBtn = $(this).html();
        const editBtnCopy = $(editBtn);
        const id = $(editBtnCopy)[0].innerHTML;
        $("#oldIdInput").val(id);
        
    });

    function validation(fullName, age, phoneNumber, salary, jobDesc, errorDiv){
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
            const jobDesc = $("#jobDescAdd").val();
            const errorDiv = "#invalidErrorAdd";
            if(validation(fullName,age,phoneNumber,salary,jobDesc, errorDiv)){
                console.log("true");
                $("#addBtn").attr('type', 'submit');
            }
            else{
                console.log("false");
            }   
    });

    $("body").on('click', '#editBtn', function(){
        const fullName = $("#fullNameEdit").val();
        const age = $("#ageEdit").val(); 
        const phoneNumber = $("#phoneNumberEdit").val(); 
        const salary =$("#salaryEdit").val();
        const jobDesc = $("#jobDescEdit").val();
        const errorDiv = "#invalidErrorEdit";
        if(validation(fullName,age,phoneNumber,salary,jobDesc, errorDiv)){
            console.log("true");
            $("#editBtn").attr('type', 'submit');
        }
        else{
            console.log("false");
        }   
});
});