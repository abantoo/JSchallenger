// Problem link : https://www.jschallenger.com/javascript-arrays/remove-specific-array-element

// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

"use strict";

function myFunction(arr, val) {
  return arr.filter((item) => item !== val);
}
