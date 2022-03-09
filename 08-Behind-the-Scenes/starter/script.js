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

if (1 === 1) {
  console.log(`Jonas is a ${job}`);
  const age = 2022 - 1991;
  console.log(age);
  const job = "teacher";
}
