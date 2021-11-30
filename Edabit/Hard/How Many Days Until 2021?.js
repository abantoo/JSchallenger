// Problem link: https://edabit.com/challenge/ztPMg7FBJbeRYTnag

"use strict";

function daysUntil2021(date) {
  const date1 = new Date(date);
  const date2 = new Date("January 1, 2021");

  const diff = (date2 - date1) / (3600000 * 24);

  const res = diff === 1 ? `${diff} day` : `${diff} days`;
  return res;
}
