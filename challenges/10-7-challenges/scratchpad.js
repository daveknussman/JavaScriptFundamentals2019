const pname = "Eddie Willard";
const pgraduationYear = 2019;
const pskills = {1:'Javascript',2:'React',3:'CSS'};
const plinks = ['https://github.com/example/profile', 'https://linkedin.com/profile'];

const graduate = {
    name:' ',
    graduationYear:' ',
    skills:[],
    links : {}
};

graduate.name = pname;
graduate.graduationYear = pgraduationYear;
graduate.skills = Object.values(pskills);

for (i=0;i<2;i++) {
    if (i==0) graduate['links']['github'] = plinks[i]; 
    if (i==1) graduate['links']['linkedIn'] = plinks[i];
 }

 console.log(graduate);

//  let collection = {
//     // id
//     "2548": {
//       album: "Slippery When Wet",
//       artist: "Bon Jovi",
//       tracks: ["Let It Rock", "You Give Love a Bad Name"]
//     },
//     // id
//     "2468": {
//       album: "1999",
//       artist: "Prince",
//       tracks: ["1999", "Little Red Corvette"]
//     },
//     // id
//     "1245": {
//       artist: "Robert Palmer",
//       tracks: []
//     },
//     // id
//     "5439": {
//       album: "ABBA Gold"
//     }
//   };
//   // Only change the code after this line
//   // Logic Here
//     const id = "2468";
//     const property = 'pizza';
//     const value = 'Nikki'
//     //console.log(id);
//   for (let colitem in collection) {
//     if (colitem == id) {
//         //console.log(colitem);
//         //console.log(collection);
//         //console.log(collection[1245])
//         //console.log(collection[colitem][property])
//         // for (let album in collection[colitem]) {
//         if (Array.isArray(collection[colitem][property])) {
//             //console.log('array')
//             collection[colitem][property].push(value);
//         }
//             else {
//                 //console.log('not array')
//                 collection[colitem][property]=value;
//             }
//             console.log(collection[colitem])
//     }
//   }

let collection = {
  // id
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  // id
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  // id
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  // id
  "5439": {
    album: "ABBA Gold"
  }
};
// Only change the code after this line
// Logic Here

//   for (let colitem in collection) {
//     if (colitem == id) {
//         if (Array.isArray(collection[colitem][prop])) {
//               collection[colitem][prop].push(value);
//             }
//                 else {
//                    collection[colitem][prop]=value;
//                 }
//      }
//    }
//console.log(collection[id][prop]);

const id = "2468";
const prop = "tracks";
const value = "";

if (prop == 'tracks') {
  if (value) {
      // value passed is not empty - set
      if (!collection[id][prop]) {
          // there is no tracks so create before we add
          collection[id][prop] = []; 
      }
      collection[id][prop].push(value);
  }
  else {
      // value passed is empty - remove
      delete collection[id][prop];        
  }
}
  else {
      if (value) {
          // value passed is not empty - set
          collection[id][prop] = value;
      }
      else {
          // value passed is empty - delete
          delete collection[id][prop];
      }
  }
