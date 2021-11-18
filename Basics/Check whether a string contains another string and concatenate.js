// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(str1, str2) {
  if (!str1.includes(str2)) return str1 + str2;
  else return str2 + str1;
}

//Problem link: https://www.jschallenger.com/javascript-basics/check-if-string-contains-string
