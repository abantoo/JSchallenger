// Problem link: https://www.jschallenger.com/javascript-objects/remove-property-from-object

// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

"use strict";

function myFunction(obj) {
  delete obj.country;
  return obj;
}

//authors sol:

// function myFunction(obj) {
//     const { country, ...rest } = obj;
//     return rest;
//   }
