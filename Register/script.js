function changeLanguageJA() {
       alert("Under development");
}

function changeLanguageEN() {
//       alert("Under development");
}

function nameValidation() {
	var name = document.getElementById("txt-full-name").value;
    var name_length = name.length;
    
    if(name_length == 0)
    {
        document.getElementById("txt-full-name").className = "input-invalid";
        return false;
    }
    else
    {
        document.getElementById("txt-full-name").className = "input-valid";
        return true;
    }   
}

function emailValidation() {
	var email = document.getElementById("txt-email").value;
    var email_length = email.length;
    
    if(email_length == 0)
    {
        document.getElementById("txt-email").className = "input-invalid";
        return false;
    }
    else
    {
        document.getElementById("txt-email").className = "input-valid";
        return true;
    }   
}



function validateForm(){
    
    var emailValid = emailValidation();
    var nameValid = nameValidation();
    
    if(emailValid || nameValid)
        alert("Welcome");
    else
        alert("ERROR");
}




