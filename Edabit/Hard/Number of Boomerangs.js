// Problem link: https://edabit.com/challenge/b7iHQDw72zzkmgCun

"use strict";

function countBoomerangs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) {
    count++
    };
  }

  return count;
}
