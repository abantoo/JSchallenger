// Problem link: https://edabit.com/challenge/6R6gReGTGwzpwuffD

"use strict";
function sevenBoom(arr) {
  const str = arr.toString(arr);
  return str.includes("7") ? "Boom!" : "there is no 7 in the array";
}
