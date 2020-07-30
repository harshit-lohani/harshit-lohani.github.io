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

function phoneValidation() {
    var phone = document.getElementById("txt-phone").value;
    
    var regex = /^[0-9]{10}$/;
    
    if(regex.test(phone))
    {
        document.getElementById("txt-phone").className = "input-valid";
        return true;
    }      
    else
    {
        document.getElementById("txt-phone").className = "input-invalid";
        return true;
    }
}


function countryValidation() {
    var countryLength = document.getElementById("txt-country").value.length;
    
    if(countryLength == 0)
    {
        document.getElementById("txt-country").className = "input-invalid";
        return false;
    }
    else
    {
        document.getElementById("txt-country").className = "input-valid";
        return true;
    }
        
}

function positionValidation() {
    var position = document.getElementById("select-position").value;
    
    if(position == "select")
    {
        document.getElementById("select-position").className = "input-invalid";
        return false;
    }
    else
    {
        document.getElementById("select-position").className = "input-valid";
        return true;
    }
        
}


function passwordValidation() {
    var password = document.getElementById("txt-password1").value;
    var passwordLength = password.length;
    
    if(passwordLength < 8)
    {
        document.getElementById("txt-password1").className = "input-invalid";
        return false;
    }
    else
    {
        document.getElementById("txt-password1").className = "input-valid";
        return false;
    }
}

function rePasswordValidation() {
    var password = document.getElementById("txt-password1").value;
    var rePassword = document.getElementById("txt-password2").value;
    
    if(password != rePassword)
    {
        document.getElementById("txt-password2").className = "input-invalid";
        return false;
    }
    else
    {
        document.getElementById("txt-password2").className = "input-valid";
        return true;
    }
}


function validateForm(){
    var emailValid = emailValidation();
    var nameValid = nameValidation();
    var passwordValid = passwordValidation();
    var rePasswordValid = rePasswordValidation();
    var countryValid = countryValidation();
    var phoneValid = phoneValidation();
    var positionValid = positionValidation();
    
    
    if(emailValid || nameValid || passwordValid)
    {
        alert("Welcome!");
        document.getElementById("anchorID").click();
    }
    else
    {
        alert("Check the red marked fields!");
    }
}




