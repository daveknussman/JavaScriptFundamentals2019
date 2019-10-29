// const fullName = 'Coco Channel';
// let lastName; 

// lastName = fullName.substring(fullName.indexOf(' ')+1);

// console.log(lastName);

// lastName = fullName.split(' ')[1];

// console.log(lastName);



// let newLastName = 'Parker';
// let newFullName;
// let oldLastName;
// let spacePosition;

// // oldLastName = fullName.substring(fullName.indexOf(' ')+1);
// newFullName=fullName;
// spacePosition = newFullName.indexOf(' ');
// oldLastName = newFullName.substring(spacePosition+1);
// console.log(oldLastName);
// console.log(newLastName);
// newFullName = fullName.replace(oldLastName, newLastName);

// console.log(newFullName);

// const newName = 'Jerry garcia';
// let capitalizeLastName;
// let ln;
// let lnFirst;
// let lnUpper;

// ln = newName.substring(newName.indexOf(' ')+1);
// console.log(ln);
// lnFirst = ln.split('')[0];
// // console.log(lnFirst)
// // lnUpper = ln.replace(ln.split('')[0], 'G');
// // console.log(lnUpper);

// lnUpper = ln.replace(ln.split('')[0], ln.split('')[0].toUpperCase());
// console.log(lnUpper);
// capitalizeLastName = newName.replace(ln,lnUpper);

// console.log(capitalizeLastName);

// const user = { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" };
// const newEmail = "purr@gmail.com";

//     const newUser = {...user};
//     newUser.email = newEmail;
//     console.log(newUser);

// const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }];
// const newItem = { name: "Popcorn", price: 5 };
// const newShoppingCart = [...shoppingCart];
// newShoppingCart.push(newItem);
// console.log(newShoppingCart);

// const printer = (name) => {
//     console.log('**'+name+'**');
//   };

// const printNames = (studentArray,print) => {
//     for (item of studentArray) {
//       print(item);
//     }
// };

// const sArray = ['dave','steve'];

// let printTheNames = printNames(sArray,printer);


// const forEach = (arr, callback) => {
//     for (let ii = 0; ii < arr.length; ii++) {
//       callback(arr[ii],ii,arr);
//     };
//   };
// const showFirstAndLast = arr => {
//     const names = [];
//    forEach(arr,(arrItem,xxx,xxxx)=>{names.push(arrItem.substring(0,1)+arrItem.substring((arrItem.length)-1))});
//      return names
//    };
 
// const arr1 = ['dave','steve'];
// arr2 = showFirstAndLast(arr1);

// console.log(arr2);
// console.log('test'.substring(0,1))

// const arrayOfNames = [
//     {name: 'Ellie', age: 20},
//     {name: 'Tim', age: 35},
//     {name: 'Matt', age: 18},
//     {name: 'Colt', age: 47}
//     ];

// console.log(arrayOfNames);



// let aaa = extractKey(arrayOfNames, 'name');
// console.log(aaa);

// const users = [
//   {id: 1024,username: "smile134",email: "smile134@example.com"},
//   {id: 1025,username: "newyorkfarmer",email: "johndoe@example.com"}
// ];
// console.log(users);

// const deleteUser = (arr, id) => {
  
// };
// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// // acc initilaized as object so looping thru array to create object with key of value (banana) that is unique and count them
// const tally = fruitBasket.reduce( (acc,fruit)=>{
// //   acc[fruit] = acc[fruit] ? acc[fruit] + 1 : 1;  see below with if (not ternary)
//   if (!acc[fruit]) {
//     acc[fruit] = 1
//   } else {
//     acc[fruit] += 1
//   }
//   return acc;
// },{});


// console.log(tally);

// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// // acc initilaized as object so looping thru array to create object with key of value (banana) that is unique and count them
// const tally = fruitBasket.reduce( (acc,fruit)=>{
//   if (!acc[fruit]) {
//     acc[fruit] = 1
//   } else {
//     acc[fruit] += 1
//   }
//   return acc;
// },{});


// console.log(tally); // { banana: 1, cherry: 3, orange: 3, apple: 2, fig: 1 }

// ************************************************************************
const users = [
    {id: 1024, username: "smile134",email: "smile134@example.com"},
    {id: 1025, username: "newyorkfarmer",email: "johndoe@example.com"}
];

const findUser = (arr, id) => {
    let found = arr.find(itm => itm.id === id);
    return found;
};

 const itmF = findUser(users,1024); 
 console.log(itmF);
// ************************************************************************

const nbrsAry = [5,7,9,11];  

const addItems = arr => {
    let sum = arr.reduce((acc, val) => {
        return acc + val;
      });
    return sum;
};

sumIt = addItems(nbrsAry);
console.log(sumIt);
// // ************************************************************************

const nestedNbrsAry = [[5,7],[9,11],[13,15]]; 

const flattenArray = array => {
    let flatAry = array.reduce((accAry, itm) => {
    return accAry.concat(itm);
  }, []);
  return flatAry;
};

let flattened = flattenArray(nestedNbrsAry);
console.log(flattened);
// ************************************************************************

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const reducer = (accum,element) => {
  if (!accum[element]) {
    accum[element] = 1;
  } else {
    accum[element] += 1;
  }
  return accum;
};

const generateTally = (array) => array.reduce(reducer,{});
  
const tally = generateTally(fruitBasket);

console.log(tally);
// ************************************************************************