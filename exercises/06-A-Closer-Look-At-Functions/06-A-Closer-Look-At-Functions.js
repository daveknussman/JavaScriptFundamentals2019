/***
 *  a test
 *  Create a function that  returns an object.
 *  The object will be a simple object with just the key being name and the value being the students name
 *   objectMaker() // {'name':'matina'}
 *
 *
 */

function objectMaker() {
  return ({name:'Dave'});
}

/**
 *  As a programmer, I would like to be able to call on a function that returns an object that will allow me to
 *  interact with an array.
 *  The object will contain three methods that will allow the developer to interact with the array.
 *
 *
 *  1) The first method on the object will accept an argument of type string.
 *     The method will add an element to the grocery list array.
 *
 *     const groceryListObj =  groceryList() groceryListObj.add('apples');  groceryListObj.add('bananas')  groceryListObj.add('steak');
 *
 *  bonus question
 *  2) The second method on the object will accept an argument. The argument will be type `number`.
 *     Using the argument will remove the element from the array.
 *     const groceryListObj =  groceryList();
 *     groceryListObj.remove(2); // ['apples','steak']
 *
 *  3) The third method will return list.
 *     const groceryListObj =  groceryList();
 *      groceryListObj.getList() //['apples','steak'];
 *
 *   Important name the methods add,remove, and getList otherwise the tests will not work properly.
 *
 *
 */

function groceryList() {
  let groceryItems = [];
  return {
    add: (item) => {
      groceryItems.push(item);
     },
    getList: () => {
      return groceryItems;
    },
    remove: (nbr) => {
      groceryItems.splice(nbr,1);
    }
  };
}

// npm run test test/06-A-Closer-Look-At-Functions/06-A-Closer-Look-At-Functions-test.js
/**
 *  slides
 * https://slides.com/accjavascript/deck-2-11#/3
 *
 * Use CLOSURES to complete this exercise.
 * For those of you who are familar with object-orientened programming,
 * this exercise will use a similar pattern with "setters" and "getters".
 * @returns {Object} an object that has two methods. See comments below.
 */
  /**
   * Create a private variable called "sum"
   * @var {number}
   */
    /**
   * Return an object that has two methods:
   *
   * 1. The first is a "setter" function that a.) accepts a parameter of type number and
   *    b.) adds that number to the "sum" above.
   * @param {number}
   *
   * 2. The second function is a "getter" function
   * that should return the value of "sum" above.
   * @returns {number} the value of sum
   */
const calculator = () => {
  let sum = 0;
  return {
    set: (nbr) => {
      sum += nbr;
      return sum;
     },
    get: () => {
      return sum;
    }
  };
}

/**
 * Write a function called guessingGame which takes in one parameter amount.
 * The function should return another function that takes in a parameter called guess.
 * In the outer function, you should create a variable called answer which is
 * the result of a random integer between 0 and 10 as well as a variable called guesses which should be set to 0.
 *
 * In the inner function, if the guess passed in is the same as the random integer (defined in the outer function),
 * you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
 *
 * You will have to make use of closure to solve this problem.
 *
 * @example (yours might not be like this, since the answer is random every time):
 *
 * let guessRound1 = guessingGame(5); // Allowing only 5 guesses
 * guessRound1(1); // "You're too low!"
 * guessRound1(8); // "You're too high!"
 * guessRound1(5); // "You're too low!"
 * guessRound1(7); // "You got it!"
 *
 * let guessRound2 = guessingGame(3); // Allowing only 3 guesses
 * guessRound2(5); // "You're too low!"
 * guessRound2(3); // "You're too low!"
 * guessRound2(1); // "No more guesses. The answer was 0"
 */

const guessingGame = numberOfRounds => {
  let answer = Math.floor(Math.random() * 10);
  let guesses = 0;
  return (guess) => {
    guesses += 1;
    if (guesses > numberOfRounds) return ("No more guesses. The answer was " + answer);
    if (guess === answer) return ("You got it");
    if (guess > answer) return ("You're too high!");
    if (guess < answer) return ("You're too low!");
  };
}

/** CLOSURES END */

/** Currying Start */

/**
 * Write a function called "multiplier" which accepts two parameters.
 * If the function is passed both parameters, it should return the product of the two.
 * If the function is only passed one parameter, it should return a function which can later be passed another
 * parameter to return the product.
 * You will have to use closures and arguments to solve this.
 *  slide
 *  https://slides.com/accjavascript/deck-2-11#/17
 *
 * @example
 * multiplier(3,4); // 12
 * multiplier(3)(4); // 12
 * multiplier(3); // function(){}....
 *
 * @param {number} a
 * @param {number} b
 */
const multiplier = (a,b) => {
  if (b === undefined) {
      return (b) => {
          return a * b;
        };
  }
  return a * b;
};
/** Currying End */

/*** Callback Start */

/**
 * Given a student name, formats and prints out the value in a visually appealing way
 * (e.g. with hyphens or astericks before each value) with `console.log`
 * slide
 * https://slides.com/accjavascript/deck-2-11#/19
 * @example
 *  - Jamal
 *  - Matina
 *  - Eddy
 * @param {string} name instuctor name
 */
const printer = (name) => {
  console.log('**'+name+'**');
};

/**
 * Loops through the array of strings
 * and for each name, calls upon the function printer to print out the name
 * @param {array}
 * @param {function} callback printer function
 */

 // *** for the test,they are calling printNames with an array and the function named printer(above) 
 // which i have as a parameter to printNames called print (so printNames executing print executes printer)
 //
const printNames = (studentArray,print) => {
  for (let item of studentArray) {
    print(item);
  }
};


/*** callback ends */


// npm run test test/06-A-Closer-Look-At-Functions/06-A-Closer-Look-At-Functions-test.js

/*** Higher Order Functions Starts */

/**** ForEach */

/**
 * Build the forEach function yourself
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @param {array} arr
 * @param {function} callback
 */
const forEach = (arr, callback) => {
  for (let ii = 0; ii < arr.length; ii++) {
    callback(arr[ii],ii,arr);
  }
};

//arrItem.substring(0,0)+arrItem.substring((arrItem.length-1),(arrItem.length-1))
const showFirstAndLast = arr => {
  const names = [];
 forEach(arr,(arrItem,xxx,xxxx)=>{names.push(arrItem.substring(0,1)+arrItem.substring((arrItem.length)-1))});
   return names
 };
/***ForEach ends */

/**
 * Recreate the map function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param {array} arr
 * @param {function} callback
 * @returns {array} new array
 */
// const map = (arr, callback) => {
//   // let newArray = arr.map(callback); 
//   // return newArray;
// };
const map = (arr, callback) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push( callback(arr[i], i, arr) );
  }
  return newArray;
};

// const nouns = ["dog", "hat", "shoe"];
// const pluralize = (noun, index, array) => {
//   // console.log(index);
//   // console.log(array);
//   return noun;
// };

/**
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */
const doubleValues = arr => {
  let newArray = map(arr,(x => x * 2));
  return newArray;
  //  OR  return arr.map( number => number * 2 );
};


/**
 * Given an array nested with objects
 * and give the name of a shared key that is in all the nested objects,
 * extract the values from the object that have the given key
 * and returns the extracted values in an array
 * @param {array} arr array of objects
 * @param {string} key what, from the object you want to return in your new array
 * @returns {array} new array
 *
 * @example
 * const arrayOfNames = [
 *  {name: 'Ellie', age: 20},
 *  {name: 'Tim', age: 35},
 *  {name: 'Matt', age: 18},
 *  {name: 'Colt', age: 47}
 * ];
 * extractKey(arrayOfNames, 'name'); // ['Ellie', 'Tim', 'Matt', 'Colt']
 */
// const extractKey = (arr, key) => {

// };
const extractKey = (arr, key) => {
  let newArray =  arr.map((val, i, arr) => {
   return val[key];
 });
 return newArray;
};

/**
 * Build your own filter function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @param {array} arr
 * @param {function} callback
 * @returns {mixed} a array of values with the values with some of the values removed
 */
const filter = (arr, callback) => { 
  // let newArray = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (callback(arr[i],i,arr) != )
  // };
  // return newArray;

};
 
/**
 * Delete the matching user from an array of user objects
 * @param {array} arr array of objects, where each object represents a user
 * @param {number} id the user's id
 * @returns {object} the array of user objects, but the user object with the matching id is removed
 *
 * @example
 * const users = [{
 *  id: 1024,
 *  username: "smile134",
 *  email: "smile134@example.com"
 * },{
 *  id: 1025,
 *  username: "newyorkfarmer",
 *  email: "johndoe@example.com"
 * }]
 * findUser(users, 1025);
 * // [{ id: 1024, username:"smile134", email: "smile134@example.com" }]
 */
const deleteUser = (arr, id) => {
  let newArray = arr.filter(((val,idx,ary)=>(val.id!==id)));
  return newArray;
};

/*
 * Build your own find function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @param {array} arr
 * @param {function} callback
 * @returns {mixed} a single value in the array
 */
const find = (arr, callback) => {
  for (let i=0;i<arr.length;i++) {
    if (callback(arr[i],i,arr) === arr[i]) return arr[i];
  };
};

/**
 * Find and return the matching user in an array of user objects
 * @param {array} arr array of objects, where each object represents a user
 * @param {number} id the user's id
 * @returns {object} the user object that has the matching id
 *
 * @example
 * const users = [{
 *  id: 1024,
 *  username: "smile134",
 *  email: "smile134@example.com"
 * },{
 *  id: 1025,
 *  username: "newyorkfarmer",
 *  email: "johndoe@example.com"
 * }]
 * findUser(users, 1025);
 * // { id: 1025, username:"newyorkfarmer", email: "johndoe@example.com" }
 */
// const findUser = (arr, id) => {};
const findUser = (arr, id) => {
  let found = arr.find(itm => itm.id === id);
  return found;
};

/**
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
// const addItems = arr => {};
const addItems = arr => {
  let sum = arr.reduce((acc, val) => {
      return acc + val;
    });
  return sum;
};

/**
 * Create a function that flattens an array (that is, it should "unnest" a nested array).
 * @param {array} array e.g. `[[1, 3], [5, 10]]`
 * @returns {array} new, flattened array e.g. `[1, 3, 5, 10]`
 */
// const flattenArray = array => {};
const flattenArray = array => {
  let flatAry = array.reduce((accAry, itm) => {
    return accAry.concat(itm);
     }, []);
  return flatAry;
};

/**
 * Create a function that tallies the number of each kind of "thing" within the array
 * @param {array} array e.g. `['Apple', 'Orange', 'Apple', 'Blueberry']`
 * @returns {object} where the thing name is the key and the tally is the value
 * @example
 *   let fruits = ['Apple', 'Orange', 'Apple', 'Blueberry', 'Grape', 'Grape'];
 *   generateTally(generateTally); // {Apple: 2, Orange: 1, Blueberry: 1, Grape: 2}
 */
// const generateTally = array => {};

const reducer = (accum,element) => {
  if (!accum[element]) {
    accum[element] = 1;
  } else {
    accum[element] += 1;
  }
  return accum;
};

const generateTally = (array) => array.reduce(reducer,{});

/**
 * Create a function, that when given an array of object literals, will index the object literals by a single column
 * (in this case, the ID). The function should return an object where the ID is the key and value is the the
 * object literal.
 *
 * @param {array} arr an array of nested objects, where each object as a key called "ID"
 * @returns {object} an object where the key is the ID and the value is the entire nested object
 * @example
 *
 * let people = [
 *  {id: 123, name: 'Dave', age: 23},
 *  {id, 456, name: 'Rachel', age: 35}
 * ];
 *
 * let result =  arrayToObject();
 *
 * // result should be:
 * {
 *   123: {id: 123, name: 'Dave', age: 23},
 *   456: {id, 456, name: 'Rachel', age: 35}
 * }
 */
const arrayToObject = arr => {
  let obj = arr.reduce((acc,val) => {
    acc[val.id] = val;
    return acc;
  }, {});
  return obj;
};

module.exports = {
  objectMaker,
  groceryList,
  printer,
  printNames,
  multiplier,
  forEach,
  showFirstAndLast,
  map,
  doubleValues,
  filter,
  deleteUser,
  extractKey,
  find,
  findUser,
  addItems,
  generateTally,
  flattenArray,
  arrayToObject,
  calculator,
  guessingGame
};
