// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    let email = document.loginForm.email.value;
    let password = document.loginForm.password.value;

	// Defining error variables with a default value
    let emailErr = passErr = true;
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    
    // Validate gender
    if(password == "") {
        printError("passErr", "Please Enter the Password");
    } else {
        printError("passErr", "");
        passErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((emailErr || passErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        let dataPreview = "Hello \n" +
                          "Email Address: " + email;
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};