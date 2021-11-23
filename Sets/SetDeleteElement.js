// Problem link: https://www.jschallenger.com/javascript-sets/delete-element-from-javascript-set

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

"use strict";

function myFunction(set, value) {
  set.delete(value);
  return set;
}
