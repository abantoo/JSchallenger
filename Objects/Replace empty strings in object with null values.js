// Probem link: https://www.jschallenger.com/javascript-objects/replace-empty-strings-null/

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

"use strict";

function myFunction(obj) {
  for (key in obj) {
    if (obj[key].trim() === "") obj[key] = null;
  }
  return obj;
}
