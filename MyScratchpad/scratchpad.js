const fullName = 'Coco Channel';
let lastName; 

lastName = fullName.substring(fullName.indexOf(' ')+1);

console.log(lastName);

lastName = fullName.split(' ')[1];

console.log(lastName);



let newLastName = 'Parker';
let newFullName;
let oldLastName;
let spacePosition;

// oldLastName = fullName.substring(fullName.indexOf(' ')+1);
newFullName=fullName;
spacePosition = newFullName.indexOf(' ');
oldLastName = newFullName.substring(spacePosition+1);
console.log(oldLastName);
console.log(newLastName);
newFullName = fullName.replace(oldLastName, newLastName);

console.log(newFullName);

const newName = 'Jerry garcia';
let capitalizeLastName;
let ln;
let lnFirst;
let lnUpper;

ln = newName.substring(newName.indexOf(' ')+1);
console.log(ln);
lnFirst = ln.split('')[0];
// console.log(lnFirst)
// lnUpper = ln.replace(ln.split('')[0], 'G');
// console.log(lnUpper);

lnUpper = ln.replace(ln.split('')[0], ln.split('')[0].toUpperCase());
console.log(lnUpper);
capitalizeLastName = newName.replace(ln,lnUpper);

console.log(capitalizeLastName);

const user = { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" };
const newEmail = "purr@gmail.com";

    const newUser = {...user};
    newUser.email = newEmail;
    console.log(newUser);

const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }];
const newItem = { name: "Popcorn", price: 5 };
const newShoppingCart = [...shoppingCart];
newShoppingCart.push(newItem);
console.log(newShoppingCart);

const printer = (name) => {
    console.log('**'+name+'**');
  };

const printNames = (studentArray,print) => {
    for (item of studentArray) {
      print(item);
    }
};

const sArray = ['dave','steve'];

let printTheNames = printNames(sArray,printer);


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