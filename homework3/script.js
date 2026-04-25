/*
Name: Michael Ofoegbu
Date created: 02/22/2026
Date last edited: 04/11/2026
Version: 4.0
Purpose: MIS 3371 Homework 3 JavaScript - builds on Homework 2 with a validateEverything()
         function that gates form submission behind a full JS validation sweep.
*/

// DYNAMIC DATE
// runs immediately on page load and inserts today's date into the header
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// RANGE SLIDER
// displays default slider value on page load and updates it as user slides
let slider = document.getElementById("range");
let output = document.getElementById("range-scale");
output.innerHTML = slider.value; // shows "1" on page load

slider.oninput = function () { output.innerHTML = this.value; }; // updates value as slider moves

// FIRST NAME VALIDATION
// required, 1-30 characters, letters/apostrophes/dashes only
function validateFname() {
    const fname = document.getElementById("fname").value.trim();
    const fnameR = /^[a-zA-Z'\-]{1,30}$/;

    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name cannot be empty.";
        return false;
    } else if (!fnameR.test(fname)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

// MIDDLE INITIAL VALIDATION
// optional, but if entered must be a single letter
// converts to uppercase and redisplays on blur
function validateMini() {
    const miniInput = document.getElementById("mini");
    let mini = miniInput.value.trim();

    if (mini === "") {
        document.getElementById("mini-error").innerHTML = "";
        return true; // field is optional, blank is fine
    }

    mini = mini.toUpperCase();
    miniInput.value = mini; // redisplay as uppercase

    const miniR = /^[A-Z]$/;
    if (!miniR.test(mini)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be a single letter.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

// LAST NAME VALIDATION
// required, 1-30 characters, letters/apostrophes/dashes only
function validateLname() {
    const lname = document.getElementById("lname").value.trim();
    const lnameR = /^[a-zA-Z'\-]{1,30}$/;

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name cannot be empty.";
        return false;
    } else if (!lnameR.test(lname)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}

// DATE OF BIRTH VALIDATION
// required, cannot be in the future, cannot be more than 120 years ago
// min and max dates calculated dynamically based on today's date
function validateDob() {
    const dobInput = document.getElementById("dob");
    const dob = new Date(dobInput.value);
    const today = new Date();
    const maxAge = new Date();
    maxAge.setFullYear(today.getFullYear() - 120); // 120 years ago from today

    if (!dobInput.value) {
        document.getElementById("dob-error").innerHTML = "Date of birth cannot be empty.";
        return false;
    } else if (dob > today) {
        document.getElementById("dob-error").innerHTML = "Date of birth cannot be in the future.";
        dobInput.value = "";
        return false;
    } else if (dob < maxAge) {
        document.getElementById("dob-error").innerHTML = "Date of birth cannot be more than 120 years ago.";
        dobInput.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// SSN VALIDATION
// required, must match format XXX-XX-XXXX (dashes optional)
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssn) {
        document.getElementById("ssn-error").innerHTML = "SSN cannot be empty.";
        return false;
    } else if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN in the format: XXX-XX-XXXX.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// ADDRESS LINE 1 VALIDATION
// required, 2 to 30 characters
function validateAddress1() {
    const ad1 = document.getElementById("address1").value.trim();

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Address must be at least 2 characters.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// ADDRESS LINE 2 VALIDATION
// optional, but if entered must be 2 to 30 characters
function validateAddress2() {
    const ad2 = document.getElementById("address2").value.trim();

    if (ad2.length > 0 && ad2.length < 2) {
        document.getElementById("address2-error").innerHTML = "Apt/Suite must be at least 2 characters if entered.";
        return false;
    } else {
        document.getElementById("address2-error").innerHTML = "";
        return true;
    }
}

// CITY VALIDATION
// required, 2 to 30 characters
function validateCity() {
    const city = document.getElementById("city").value.trim();

    if (city.length < 2) {
        document.getElementById("city-error").innerHTML = "City must be at least 2 characters.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// STATE VALIDATION
// required, user must select a valid state from the dropdown
function validateState() {
    const state = document.getElementById("state").value;

    if (!state) {
        document.getElementById("state-error").innerHTML = "Please select a state.";
        return false;
    } else {
        document.getElementById("state-error").innerHTML = "";
        return true;
    }
}

// ZIP CODE VALIDATION
// required, accepts 5-digit or zip+4 format (e.g. 77002-1234)
// truncates to first 5 digits and redisplays the corrected value
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.trim();

    if (!zip) {
        document.getElementById("zip-error").innerHTML = "Zip code cannot be empty.";
        return false;
    }

    // strip everything except digits and dash
    zip = zip.replace(/[^\d-]/g, "");

    // truncate to first 5 digits if longer than 5
    const digitsOnly = zip.replace(/-/g, "");
    if (digitsOnly.length > 5) {
        zip = digitsOnly.slice(0, 5);
    }

    // validate: must be exactly 5 digits after truncation
    if (!/^[0-9]{5}$/.test(zip)) {
        document.getElementById("zip-error").innerHTML = "Please enter a valid 5-digit zip code.";
        return false;
    }

    zipInput.value = zip; // redisplay truncated value
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

// EMAIL VALIDATION
// required, must match format name@domain.tld
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailR = /^\w+(([.\-]?\w+)*)@\w+(([.\-]?\w+)*)\.\w{2,20}$/;

    if (email === "") {
        document.getElementById("email-error").innerHTML = "Email address cannot be empty.";
        return false;
    } else if (!emailR.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address (e.g. name@domain.com).";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// PHONE NUMBER VALIDATION
// required, must be 10 digits, auto-formatted to XXX-XXX-XXXX on blur
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ""); // strip all non-digits

    if (phone.length === 0) {
        document.getElementById("phone-error").innerHTML = "Phone number cannot be empty.";
        return false;
    } else if (phone.length !== 10) {
        document.getElementById("phone-error").innerHTML = "Please enter a valid 10-digit phone number (e.g. 123-456-7890).";
        return false;
    } else {
        // auto-format to XXX-XXX-XXXX and redisplay
        phoneInput.value = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 10);
        document.getElementById("phone-error").innerHTML = "";
        return true;
    }
}

// USERNAME VALIDATION
// required, 5-15 characters, letters/numbers/underscores only
// cannot start with a number, no spaces, converted to lowercase on blur
function validateUname() {
    const unameInput = document.getElementById("uname");
    const uname = unameInput.value.trim();
    const unameR = /^[a-zA-Z_][a-zA-Z0-9_]{4,14}$/; // must start with letter or underscore, 5-15 chars total

    if (uname === "") {
        document.getElementById("uname-error").innerHTML = "Username cannot be empty.";
        return false;
    } else if (/^\d/.test(uname)) {
        document.getElementById("uname-error").innerHTML = "Username cannot start with a number.";
        return false;
    } else if (uname.includes(" ")) {
        document.getElementById("uname-error").innerHTML = "Username cannot contain spaces.";
        return false;
    } else if (!unameR.test(uname)) {
        document.getElementById("uname-error").innerHTML = "5 to 15 characters. Letters, numbers, and underscores only.";
        return false;
    } else {
        unameInput.value = uname.toLowerCase(); // convert to lowercase and redisplay
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}

// PASSWORD VALIDATION
// required, 10-30 characters
// must have: 1 uppercase, 1 lowercase, 1 number, 1 special character
// cannot contain the username
// no double quotes allowed
// displays real-time feedback messages as user types
function validatePass() {
    const pass = document.getElementById("pass").value;
    const uname = document.getElementById("uname").value.toLowerCase();
    const messages = [];

    // check minimum length
    if (pass.length < 10) {
        messages.push("Must be at least 10 characters.");
    }

    // check for lowercase letter
    if (!/[a-z]/.test(pass)) {
        messages.push("Must contain at least one lowercase letter.");
    }

    // check for uppercase letter
    if (!/[A-Z]/.test(pass)) {
        messages.push("Must contain at least one uppercase letter.");
    }

    // check for number
    if (!/[0-9]/.test(pass)) {
        messages.push("Must contain at least one number.");
    }

    // check for special character (double quotes not allowed)
    if (!/[!@#$%^&*()\-_+=\[\]{};':\\|,.<>\/?`~]/.test(pass)) {
        messages.push('Must contain at least one special character (e.g. !@#$%). Double quotes not allowed.');
    }

    // check double quotes not present
    if (pass.includes('"')) {
        messages.push('Double quotes (") are not allowed in the password.');
    }

    // check password does not contain username
    if (uname.length > 0 && pass.toLowerCase().includes(uname)) {
        messages.push("Password cannot contain your username.");
    }

    // display messages or clear them
    const msgSpans = ["msg1", "msg2", "msg3", "msg4", "msg5"];
    msgSpans.forEach(function(id) {
        document.getElementById(id).innerHTML = "";
    });

    messages.forEach(function(msg, index) {
        if (index < msgSpans.length) {
            document.getElementById(msgSpans[index]).innerHTML = msg;
        }
    });

    if (messages.length === 0) {
        document.getElementById("pass-error").innerHTML = "";
        return true;
    } else {
        document.getElementById("pass-error").innerHTML = "Please fix the password issues above.";
        return false;
    }
}

// CONFIRM PASSWORD VALIDATION
// must match the password field exactly
function validatePass2() {
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass2").value;

    if (pass2 === "") {
        document.getElementById("pass2-error").innerHTML = "Please re-enter your password.";
        return false;
    } else if (pass !== pass2) {
        document.getElementById("pass2-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("pass2-error").innerHTML = "";
        return true;
    }
}

// VALIDATE EVERYTHING
// called when the Validate button is pressed
// runs every validation function across the form
// if all pass, enables the Submit button
// if any fail, shows the alert box and keeps Submit disabled
function validateEverything() {
    let valid = true;

    if (!validateFname()) { valid = false; }
    if (!validateMini()) { valid = false; }
    if (!validateLname()) { valid = false; }
    if (!validateDob()) { valid = false; }
    if (!validateSsn()) { valid = false; }
    if (!validateAddress1()) { valid = false; }
    if (!validateAddress2()) { valid = false; }
    if (!validateCity()) { valid = false; }
    if (!validateState()) { valid = false; }
    if (!validateZip()) { valid = false; }
    if (!validateEmail()) { valid = false; }
    if (!validatePhone()) { valid = false; }
    if (!validateUname()) { valid = false; }
    if (!validatePass()) { valid = false; }
    if (!validatePass2()) { valid = false; }

    if (valid) {
        document.getElementById("submit").disabled = false; // unlock submit button
    } else {
        document.getElementById("submit").disabled = true; // keep submit locked
        showAlert(); // show the alert box
    }
}

// ALERT BOX
// shows alert box when Validate is pressed and errors are still present
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function () {
        alertBox.style.display = "none";
    };
}

// REVIEW BUTTON
// redisplays all entered form data below the form
// loops through all form elements and builds an output table
// skips buttons, passwords, empty fields, and unchecked boxes/radios
function reviewInput() {
    const formcontent = document.getElementById("signup");
    let formoutput = "<table class='output'><tr><th colspan='3'>Your Information:</th></tr>";

    for (let i = 0; i < formcontent.length; i++) {
        const el = formcontent.elements[i];
        const datatype = el.type;

        if (el.value !== "") {
            switch (datatype) {
                case "checkbox":
                    if (el.checked) {
                        formoutput += "<tr><td align='right'>" + el.name + "</td>";
                        formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;

                case "radio":
                    if (el.checked) {
                        formoutput += "<tr><td align='right'>" + el.name + "</td>";
                        formoutput += "<td class='outputdata'>" + el.value + "</td></tr>";
                    }
                    break;

                case "password":
                case "button":
                case "submit":
                case "reset":
                    break; // skip passwords and buttons from review display

                default:
                    formoutput += "<tr><td align='right'>" + el.name + "</td>";
                    formoutput += "<td class='outputdata'>" + el.value + "</td></tr>";
            }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

// REMOVE REVIEW
// clears the review output area
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
