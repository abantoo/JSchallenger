// Problem link: https://www.jschallenger.com/javascript-basics/round-2-decimal-digits/

// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

"use strict";

function myFunction(number) {
  return Math.round(number * 100) / 100;
}
