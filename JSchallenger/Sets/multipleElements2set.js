// Problem Link : https://www.jschallenger.com/javascript-sets/add-multiple-elements-to-javascript-set

// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set

"use strict";

function myFunction(set, array) {
  array.forEach((item) => set.add(item));
  return set;
}
