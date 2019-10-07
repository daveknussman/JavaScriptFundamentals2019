/***
 * 
 * ** Using the modulus operator determine if the argument is an even or odd number
 *   if the number is odd return the word 'Odd'
 *   if the number is even return the word 'Even'
 *   @example
 *   isOdd  // 'Odd'
 *   isEven // 'Even'
 *
 *  */

 // npm run test test/challenges/9-30-challenges-test.js

function isEvenOrOdd(number) {
  if (number % 2 == 0) return 'Even';

  return 'Odd';
}

/****
 *  Create a function that returns a function.
 *  The returned function when invoked should say "Second Function"
 *  @example
 *  functionMaker()() // "Second Function"
 *
 */
function functionMaker() {
 return () => 'Second Function';
  //return newFunc;
}

/***
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @example
 *  confirmEnding("Jamal", "l") // true
 *  confirmEnding("Matina", "a") // true
 *  confirmEnding("stacy", "l") // false
 *  confirmEnding("andrea", "a") // true
 *  confirmEnding("Clifford", "ord"); // true
 *
 */

function confirmEnding(str, target) {
  if ((str.indexOf(target,(str.length-target.length))) > -1) {
    return true;
  }  else return false;
}

module.exports = {
  isEvenOrOdd,
  functionMaker,
  confirmEnding
};
