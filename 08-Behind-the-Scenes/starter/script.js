"use strict";
//////              Understanding Scopes             ///////(/////////)

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName} ,you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = "steven";
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = "new output";
//     }
//     console.log(millenial);
//     console.log(output);
//     // console.log(add(2, 3));
//     // console.log(str);
//   }
//   printAge();
//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

/////////////       Hoisting in javascript       /////////////

// console.log(me);
// // console.log(teacher);
// // console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = "1991";

// //functions

// // console.log(addDecl(2, 3));
// // // console.log(addExpr(2, 3));
// // console.log(addExpr);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //example

// if (!numProducts) {
//   deleteShoppingCart();
// }
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("all products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

//////////////            This keyword/variable             ///////////////

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1971);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

/// regular functions vs arrow functions --this--

// var firstName = "Matilda"; // var goes to the window

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2022 - this.year);

//     //solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996); // wont work
//     // };

//     //solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`), // wont work with arrow function
// };
// jonas.greet();
// jonas.calcAge();

////////////       arguments keywords         /////////

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

/////////// source of confusion   //////

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Jonas",
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log("Friend:", friend);
// console.log("Me", me);

//////       primitave vs objects in practice        /////

//primitave types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName, oldLastName);
//reference types
const jessica = {
  fistName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("before marriage", jessica);
console.log("after marriage", marriedJessica);

//copying objects
const jessica2 = {
  fistName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["alice", "bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("mary");
jessicaCopy.family.push("john");

console.log("before marriage", jessica2);
console.log("after marriage", jessicaCopy);
