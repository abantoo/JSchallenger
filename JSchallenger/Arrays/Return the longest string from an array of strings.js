// Problem link: https://www.jschallenger.com/javascript-arrays/return-longest-string-in-array

// Write a function that takes an array of strings as argument
// It should return the longest string

"use strict";

function myFunction(arr) {
  return arr.sort((a, b) => a.length - b.length).reverse()[0];
}
