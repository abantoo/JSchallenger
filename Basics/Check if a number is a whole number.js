// Problem Link: https://www.jschallenger.com/javascript-basics/check-if-number-is-whole

// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

"use strict";

function myFunction(number) {
  return Number.isInteger(number);
}
