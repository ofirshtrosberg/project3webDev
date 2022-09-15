$(()=>{
    $("body").on('click', '.editBtn', function(){
        const editBtn = $(this).html();
        const editBtnCopy = $(editBtn);
        const id = $(editBtnCopy)[0].innerHTML;
        console.log(id);
        $("#oldIdInput").val(id);
    });

    function validation(fullName, age, phoneNumber, salary, jobDesc){
        const onlyLettersAndSpaces = /^[A-Za-z\s]*$/
        const onlyNumbers = /[0-9]+/
        const PhoneStart = /(050|054|053|052)\d+/
        
        if(fullName == "")
        {
            $("#invalidErrorAdd").text("Invalid input - Full Name is required");
            return false;
        }
        else if(!onlyLettersAndSpaces.test(fullName))
        {
            $("#invalidErrorAdd").text("Invalid input - Name must have only letters and spaces");
            return false;
        }
        else if(!onlyNumbers.test(age))
        {
            $("#invalidErrorAdd").text("Invalid input - Age must have only numbers");
            return false;
        }
        else if(onlyNumbers.test(age) && (age > 150))
        {
            $("#invalidErrorAdd").text("Invalid input - Age is max 150");
            return false;
        }
        // else if(!onlyNumbers.test(phoneNumber))
        // {
        //     $("#invalidErrorAdd").text("Invalid input - Phone Number must have only numbers");
        //     return false;
        // }
        // else if(onlyNumbers.test(phoneNumber) && !PhoneStart.test(phoneNumber))
        // {
        //     $("#invalidErrorAdd").text("Invalid input - Phone Number must start with one of the following: 050/052/053/054");
        //     return false;
        // }
        // else if(onlyNumbers.test(phoneNumber) && PhoneStart.test(phoneNumber) && (phoneNumber.length != 10))
        // {
        //     $("#invalidErrorAdd").text("Invalid input - Phone Number must have 10 digits");
        //     return false;
        // }
        else if(!onlyNumbers.test(salary))
        {
            $("#invalidErrorAdd").text("Invalid input - Salary must have only numbers");
            return false;
        }
        else if(onlyNumbers.test(salary) && ((salary < 30) || (salary > 100000)))
        {
            $("#invalidErrorAdd").text("Invalid input - Salary must be between 30 and 100,000");
            return false;
        }
        else if(jobDesc == "")
        {
            $("#invalidErrorAdd").text("Invalid input - Job Description is required");
            return false;
        }
        else
        {
            $("#invalidErrorAdd").text("");
            return true;
        }
    }
    $("body").on('click', '#addBtn', function(){
            const fullName = $("#fullNameAdd").val();
            const age = Number($("#ageAdd").val()); 
            const phoneNumber = $("#phoneNumberAdd").val(); 
            const salary =Number($("#salaryAdd").val());
            const jobDesc = $("#jobDescAdd").val();
            if(validation(fullName,age,phoneNumber,salary,jobDesc)){
                console.log("true");
            }
            else{
                console.log("false");
            }   
    });
});