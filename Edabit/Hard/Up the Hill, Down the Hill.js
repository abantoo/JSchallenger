// Problem link: https://edabit.com/challenge/vEY5A5Kq8xsPTQG8S

"use strict";

function aveSpd(upTime, upSpd, downSpd) {
  const total_distance = upTime * upSpd;
  const downTime = total_distance / downSpd;
  return (total_distance + downSpd * downTime) / (upTime + downTime);
}
