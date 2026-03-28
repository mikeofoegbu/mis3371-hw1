/*
Name: Michael Ofoegbu
  Date created: 03/20/2026
  Date last edited: 03/27/2026
  Purpose: MIS 3371 Homework 2 HTML Form
*/

//dynamic date js code//
const d = new Date(); // creates new Date object containing current system date
let text = d.toLocaleDateString(); // converts date into readable local date format (MM/DD/YYYY)
document.getElementById("today").innerHTML = text; // inserts formatted date into span element with id="today" in HTML header

//range slider js code//
let slider = document.getElementById("range"); // selects the range input element from the form
let output = document.getElementById("range-scale"); // selects span element that displays current slider value
output.innerHTML = slider.value; // displays default slider value when page first loads

slider.oninput = function () {output.innerHTML = this.value;}; // updates displayed value dynamically whenever slider is moved

// first name validation js code
function validateFname() {
    let fname = document.getElementById("fname").value;
    const fnameR = /^[a-zA-Z']{1,30}$/;

    if (fname == "") {
        document.getElementById("fname-error").innerHTML =
        "First name cannot be empty.";
        return false;
    } else if (!fnameR.test(fname)) {
        document.getElementById("fname-error").innerHTML =
        "Letters, apostrophes, and dashes only.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

// middle initial validation js code
function validateMini() {
    let mini = document.getElementById("mini").value;
    const miniR = /^[a-zA-Z]{0,1}$/;

    if (!miniR.test(mini)) {
        document.getElementById("mini-error").innerHTML =
        "Middle initial must be one letter only.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

// last name validation js code
function validateLname() {
    let lname = document.getElementById("lname").value;
    const lnameR = /^[a-zA-Z']{1,30}$/;

    if (lname == "") {
        document.getElementById("lname-error").innerHTML =
        "Last name cannot be empty.";
        return false;
    } else if (!lnameR.test(lname)) {
        document.getElementById("lname-error").innerHTML =
        "Letters, apostrophes, and dashes only.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

// dob validation js code
function validateDob() {
    let dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML =
        "Date cannot be in the future.";
        dob.value="";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML =
        "Date cannot be more than 120 years ago.";
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // regex for ssn pattern thing
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML =
        "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// address 1 validation js code  
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML =
        "Please enter something on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// zip code validation js code
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); // removes any non-number and non-dash characters

    if (!zip) {
        document.getElementById("zip-error").innerHTML =
        "Zip code cannot be left blank.";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0,5); // removes all digits after first 5
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

// email validation js code
function validateEmail() {
    let email = document.getElementById("email").value;
    var emailR = /^\w+(([.-]?\w+)*)@\w+(([.-]?\w+)*)\.\w{2,3}+$/; //regex pattern thing for email

    if (email == "") {
        document.getElementById("email-error").innerHTML =
        "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// phone number validation js code
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes all non-number characters

    if (phone.length !== 10) {
        document.getElementById("phone-error").innerHTML =
        "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

// username validation js code
function validateUname() {
    let uname = document.getElementById("uname").value;
    const unameR = /^[a-zA-Z][a-zA-Z0-9]{4,14}$/; // must start with a letter, 5-15 chars total

    if (uname == "") {
        document.getElementById("uname-error").innerHTML =
        "Username cannot be empty.";
        return false;
    } else if (!unameR.test(uname)) {
        document.getElementById("uname-error").innerHTML =
        "Username must be 5-15 characters and cannot start with a number.";
        return false;
    } else {
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}

// password validation js code
function validatePass() {
    let pass = document.getElementById("pass").value;

    // regex checks for each password requirement
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass);
    const hasLength = pass.length >= 10;

    // display requirement messages dynamically as user types
    document.getElementById("msg1").innerHTML = hasLength ? "✓ At least 10 characters" : "✗ At least 10 characters";
    document.getElementById("msg2").innerHTML = hasUpper ? "✓ At least one uppercase letter" : "✗ At least one uppercase letter";
    document.getElementById("msg3").innerHTML = hasLower ? "✓ At least one lowercase letter" : "✗ At least one lowercase letter";
    document.getElementById("msg4").innerHTML = hasNumber ? "✓ At least one number" : "✗ At least one number";
    document.getElementById("msg5").innerHTML = hasSpecial ? "✓ At least one special character" : "✗ At least one special character";

    if (!hasLength || !hasUpper || !hasLower || !hasNumber || !hasSpecial) {
        document.getElementById("pass-error").innerHTML =
        "Password does not meet requirements.";
        return false;
    } else {
        document.getElementById("pass-error").innerHTML = "";
        return true;
    }
}
