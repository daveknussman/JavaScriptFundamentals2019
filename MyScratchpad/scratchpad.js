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