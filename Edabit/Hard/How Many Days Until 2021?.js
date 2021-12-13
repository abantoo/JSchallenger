// Problem link: https://edabit.com/challenge/ztPMg7FBJbeRYTnag

"use strict";

function daysUntil2021(date) {
  const date1 = new Date(date);
  const date2 = new Date("January 1, 2021");

  // as date returns milliseconds, to convert it into days we need to divide the difference by (1000 * 60 * 60 * 24)
  const diff = (date2 - date1) / (3600000 * 24); 

  const result = diff === 1 ? `${diff} day` : `${diff} days`;
  return result;
}
