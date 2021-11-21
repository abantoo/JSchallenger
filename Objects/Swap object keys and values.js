// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  const obj2 = {};
  for (key in obj) {
    obj2[obj[key]] = key;
  }
  return obj2;
}

//Problem link : https://www.jschallenger.com/javascript-objects/swap-object-keys-values
