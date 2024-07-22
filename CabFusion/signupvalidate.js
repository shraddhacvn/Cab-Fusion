// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm2() {
    // Retrieving the values of form elements 
    let email2 = document.signupForm.email2.value;
    let password2 = document.signupForm.password2.value;

	// Defining error variables with a default value
    let emailErr2 = passErr2 = true;
    
    // Validate email address
    if(email2 == "") {
        printError("emailErr2", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email2) === false) {
            printError("emailErr2", "Please enter a valid email address");
        } else{
            printError("emailErr2", "");
            emailErr2 = false;
        }
    }
    
    
    // Validate gender
    if(password2 == "") {
        printError("passErr2", "Please Enter the Password");
    } else {
        if (password2.length<8)
        {
            printError("passErr2", "**Password length must be 8 characters");
        }
        else{
        printError("passErr2", "");
        passErr2 = false;
         }
    }
    
    // Prevent the form from being submitted if there are any errors
    if((emailErr2 || passErr2) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        let dataPreview = "Signed Up Succeesfully !!! \n" +
                          "Your Username: " + email2;
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};