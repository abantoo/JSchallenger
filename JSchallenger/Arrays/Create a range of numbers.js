// Problem link: https://www.jschallenger.com/javascript-arrays/create-range-of-numbers/

// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max
"use strict";

function myFunction(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}
