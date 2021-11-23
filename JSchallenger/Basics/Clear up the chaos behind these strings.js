// Problem link: https://www.jschallenger.com/javascript-basics/clean-sort-join-strings/

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

"use strict";

function myFunction(str1, str2) {
  const str = str1.concat(str2.split("").reverse().join("")).replace("%", "");
  return str.charAt(0).toUpperCase() + str.slice(1);
}
