// Problem Link: https://www.jschallenger.com/javascript-arrays/check-if-array-elements-are-equal

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

"use strict";

function myFunction(arr) {
  return arr.every((elm) => elm === arr[0]);
}
