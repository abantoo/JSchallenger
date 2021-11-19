// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

function myFunction(arr, n) {
  return arr.slice(arr.length - n);
}

//Problem link: https://www.jschallenger.com/javascript-arrays/get-last-array-elements/
