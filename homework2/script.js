/*
Name: Michael Ofoegbu
  Date created: 03/20/2026
  Date last edited: 03/25/2026
  Purpose: MIS 3371 Homework 1 HTML Form
*/

//dynamic date js code//
const d = new Date(); // creates new Date object containing current system date
let text = d.toLocaleDateString(); // converts date into readable local date format (MM/DD/YYYY)
document.getElementById("today").innerHTML = text; // inserts formatted date into span element with id="today" in HTML header

//range slider js code//
let slider = document.getElementById("range") // selects the range input element from the form
  let output = document.getElementById("range-scale") // selects span element that displays current slider value
  output.innerHTML = slider.value; // displays default slider value when page first loads

slider.oninput = function () {output.innerHTML = this.value;}; // updates displayed value dynamically whenever slider is moved

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
        return true
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

    if (email =="") {
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
        document.getElementById("phone-error");innerHTML
        "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6)
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true; 
}  
