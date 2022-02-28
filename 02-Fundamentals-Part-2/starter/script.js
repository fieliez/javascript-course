"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//   console.log("i can drive");
// }

// const interface = "audio"; reserved so wont work
// const private = 23;
// const if=20

// function logger() {
//   console.log("myname is Jonas");
// }
// // callling....running.....invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

////////////     funtiion declaration      /////////////
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// ///////////      funtion expression       ///////////

// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

////////////////     arrow function     ///////////

// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement}years`;
// };

// console.log(yearsUntilRetirement(1998, "Joshua"));
// console.log(yearsUntilRetirement(1995, "Julian"));

/////////////////////////////function calling functions///////////////////

// function cutFruitPieces(fruit) {
//   return fruit * 6;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

//   return juice;
// }
// console.log(fruitProcessor(2, 3));
/////////////////////////////////////////////////
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement}years`;
//   } else return `${firstName} is already retired🥳`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

/* /////////////////////   coding challange         /////////////////////////

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as 
parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console,
 together with the victory points, according to the rule above. Example: 
 "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

GOOD LUCK 😀
*/

// const calcAverage = (score1, score2, score3) => {
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// };

// const dolphineAverage = calcAverage(85, 54, 41);
// const koalaAverage = calcAverage(23, 34, 27);

// const checkWinner = (avgKoalas, avgDolphines) => {
//   let message;

//   if (avgKoalas >= avgDolphines * 2) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphines}`);
//     message = `Koalas win ${avgKoalas} vs ${avgDolphines}`;
//   } else if (avgDolphines >= avgKoalas * 2) {
//     console.log(`Dolphines win ${avgDolphines} vs ${avgKoalas}`);
//     message = `Dolphines win ${avgDolphines} vs ${avgKoalas}`;
//   } else {
//     console.log("nobody wins");
//     message = "nobody wins😭";
//   }
//   return message;
// };
// checkWinner(koalaAverage, dolphineAverage);
// console.log(checkWinner(koalaAverage, dolphineAverage));

////////////////////      Arrays        ////////////////////

// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// const year = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); /// show how many elements in the array
// console.log(friends[friends.length - 1]); // calculating the last element

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// ////// exercise  //////////
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const ageLast = calcAge(years[years.length - 1]);

// console.log(age1, age2, ageLast);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay"); // adds to the end of the array

console.log(friends);
console.log(newLength);

friends.unshift("John"); // adds to the beginning of the array
console.log(friends);

// Remove elements
friends.pop(); // remove last element
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // displays boolean
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("you have a friend called Steven");
}

//////////////       coding Challenge      ////////////////

/*
Steven is still building his tip calculator, using 
the same rules as before: Tip 15% of the bill if the 
bill value is between 50 and 300, and if the value is
 different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value
 as an input and returns the corresponding tip, calculated
  based on the rules above (you can check out the code from 
    first tip calculator challenge if you need to). Use the 
    function type you like the most. Test the function using 
    a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing
 the test data below.
3. Create an array 'tips' containing the tip value for each bill,
 calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values,
 so the bill + tip.

TEST DATA: 125, 555 and 44

GOOD LUCK 😀
*/

const calcTip = function (billValue) {
  let tip;
  if (billValue >= 50 && billValue <= 300) {
    tip = billValue * 0.15;
  } else {
    tip = billValue * 0.2;
  }
  return tip;
};

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];
console.log(total);
