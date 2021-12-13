// Problem link: https://www.jschallenger.com/javascript-basics/incrementing-javascript-letters-alphabet/

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

"use strict";

function myFunction(string) {
  arr = [...string];
  const arr2 = arr.map((item) => String.fromCharCode(item.charCodeAt() + 1));
  return arr2.join("");
}
