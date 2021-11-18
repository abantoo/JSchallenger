// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(number) {
  output = [];
  while (number) {
    output.push(number % 10);
    number = Math.floor(number / 10);
  }

  return output.reverse();
}

//Problem link: https://www.jschallenger.com/javascript-basics/split-number-into-digits/
