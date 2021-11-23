// Problem link: https://www.jschallenger.com/javascript-objects/extracting-information-ojects/

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

"use strict";

function myFunction(obj) {
  const { fn, ln, size, weight, ...rest } = obj;
  const obj2 = { fn, ln };
  if (size) obj2.size = `${size}cm`;
  if (weight) obj2.weight = `${weight}kg`;
  return obj2;
}
