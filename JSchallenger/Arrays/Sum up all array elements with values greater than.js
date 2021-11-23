// Problem link: https://www.jschallenger.com/javascript-arrays/sum-up-array-greater/

// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

"use strict";

function myFunction(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > n ? (sum += arr[i]) : sum;
  }
  return sum;
}
