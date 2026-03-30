/*
Name: Michael Ofoegbu
  Date created: 02/22/2026
  Date last edited: 03/02/2026
  Purpose: MIS 3371 Homework 1 HTML Form
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
