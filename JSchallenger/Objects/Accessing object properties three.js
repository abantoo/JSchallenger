// Problem ink: https://www.jschallenger.com/javascript-objects/access-object-properties-dynamic-key

// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

"use strict";

function myFunction(obj, str) {
  return obj[str];
}
