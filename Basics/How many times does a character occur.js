// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(str1, str2) {
  return str2.toLowerCase().split(str1.toLowerCase()).length - 1;
}

//Problem Link: https://www.jschallenger.com/javascript-basics/times-character-occurs-string
