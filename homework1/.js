/*
Name: Michale Ofoegbu
  Date created: 02/27/2026
  Date last edited: 02/27/2026
  Purpose: MIS 3371 Homework 1 HTML Form
*/

//dynamic date js code//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code//
let slider = document.getElementById("range")
  let output = document.getElementById("range-slider")
  output.innerHTML = slider.value;

slider.oninput = function () {output.innerHTML = this.value;};
