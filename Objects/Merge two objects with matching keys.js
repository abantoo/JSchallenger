// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

function myFunction(obj1, obj2) {
  for (let key in obj2)
    if (key === "country") {
      obj2.city = obj2[key];
      delete obj2[key];
    }
  return { ...obj1, ...obj2 };
}

//Problem link: https://www.jschallenger.com/javascript-objects/merge-objects-same-key/
