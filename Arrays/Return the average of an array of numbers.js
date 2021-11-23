// Problem link: https://www.jschallenger.com/javascript-arrays/return-average-of-array/

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

"use strict";

function myFunction(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
