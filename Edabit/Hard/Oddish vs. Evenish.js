// Problem link: https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

"use strict";

function oddishOrEvenish(num) {
  const str = new String(num);
  const arr = Array.from(str);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }

  return sum % 2 === 0 ? "Evenish" : "Oddish";
}
