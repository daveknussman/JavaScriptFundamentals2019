/**
 * Count the number of digits in an integer
 * @param {number} num an integer
 * @returns {number} number of digits
 *
 * @example
 * countNumberOfDigits(1); // 1
 * countNumberOfDigits(123); // 3
 * countNumberOfDigits(1000); // 4
 */
// npm run test test/03-intro-challenges/intro-challenges-test.js
function countNumberOfDigits(num) {
  let count = 0;
  
  if (num !== 0) ++count;

while (num / 10 >= 1) {
  num /= 10;
  ++count;
}

return count;
}

/**
 * Given a number of seconds, return how long ago something happened.
 * @param {number} seconds
 * @returns {string} a relative time formatted like one of the following:
 * - when less than a minute: "seconds ago"
 * - when less than an hour: "minutes ago"
 * - when less than a day: "hours ago"
 * - equal to or greater than a day: "days ago"
 *
 * @example
 *
 * getRelativeTime(59); // seconds ago
 * getRelativeTime(60); // minutes ago
 */
function getRelativeTime(seconds) {

if (seconds >= 86400) return ("days ago");
if (seconds >= 3600) return ("hours ago");
if (seconds >= 60) return ("minutes ago");
return ('seconds ago');
}

/**
 * Round to the nearest 100th decimal point.
 * @param {number} num a float
 * @returns {number} a float with, at most, two decimal points
 *
 * @example
 * roundToNearestHundredth(14.511); // 14.51
 * roundToNearestHundredth(14.499); // 14.5
 */
function roundToNearestHundredth(num) {
let newNum;

newNum = (Math.trunc(num * 100))/100;
if ((num - newNum ) > .004) newNum += .01;

return newNum;
}

// Ignore this. It is for the tests.
module.exports = {
  countNumberOfDigits,
  getRelativeTime,
  roundToNearestHundredth
};
