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

function validateDob() {
    dob = document.getElementById("dob");
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
