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