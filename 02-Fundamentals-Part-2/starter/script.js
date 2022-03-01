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

// const friends = ["Micheal", "Steven", "Peter"];
// const newLength = friends.push("Jay"); // adds to the end of the array

// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); // adds to the beginning of the array
// console.log(friends);

// // Remove elements
// friends.pop(); // remove last element
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); // first
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven")); // displays boolean
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("you have a friend called Steven");

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

// const calcTip = function (billValue) {
//   let tip;
//   if (billValue >= 50 && billValue <= 300) {
//     tip = billValue * 0.15;
//   } else {
//     tip = billValue * 0.2;
//   }
//   return tip;
// };

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[2]) + bills[2],
// ];
// console.log(total);

////////// objects     ////////

// const jonas = {
//   // curly braces
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2022 - 1991,
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";

// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends "
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtmann";
// console.log(jonas);

// //// Challange
// // Jonas has 3 friends, and his best friend is called micheal
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

/////// object methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthyear) {
//   //   return 2037 - birthyear;
//   // },
//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     } and he has ${this.driversLicense ? "a" : "no"} drivers license`;
//   },
// };

// console.log(jonas.calcAge());
// // console.log(jonas["calcAge"](1991));

// //challenge
// // "Joans is a 56-year old Teacher"

// console.log(jonas.getSummary());

///////// coding Challange    ///////////

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter)

1. For each of them, create an object with properties for
  their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the 
  BMI (the same method on both objects). Store the BMI value to
  a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with 
  the full name and the respective BMI. Example: "John Smith's BMI 
  (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall.
 John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBmi: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBmi: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// console.log(john.calcBmi(), mark.i());
// console.log(
//   `${john.fullName}'s BMI(${john.calcBmi()}) is ${
//     john.calcBmi() > mark.calcBmi() ? "higher" : "lower"
//   } than ${mark.fullName}'s BMI(${mark.calcBmi()})`
// );
// hold options and click to select multiple cursors

/////////////////      for Loops     /////////////////

// console.log("lifting eights repetition 1 🏋🏼");
// console.log("lifting eights repetition 2 🏋🏼");
// console.log("lifting eights repetition 3 🏋🏼");
// console.log("lifting eights repetition 4 🏋🏼");
// console.log("lifting eights repetition 5 🏋🏼");

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep} 🏋🏼`);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2022 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   //Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
//   //filling tpes array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //// continue and break

// console.log("---only strings-----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("-----Break with number-----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }
///// looping backwards /////

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2022 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];
// //// 0, 1, 2, 3...
// //// 4, 3, 2, 1...

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// ////loop inside of loop

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋🏼`);
//   }
// }

//////    While lopp    //////

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep} 🏋🏼`);
// }

// let rep = 1;

// while (rep <= 10) {
//   // console.log(`While: lifting weights repetition ${rep} 🏋🏼`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1; /// if you dont add this you will create an infinite loop
//   if (dice === 6) console.log("loop is about to end...");
// }

//////////////    Coding challange     //////////////

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat)
 to calculate tips and total values (bill + tip) for every bill value
  in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values
 to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called
 'arr' as an argument. This function calculates the average of all 
 numbers in the given array. This is a DIFFICULT challenge 
 (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array.
   To do the addition, start by creating a variable 'sum' 
   that starts at 0. Then loop over the array using a for loop. 
   In each iteration, add the current value to the 'sum' variable.
    This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated 
  before by the length of the array (because that's the number of
   elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (billValue) {
  let tip;
  if (billValue >= 50 && billValue <= 300) {
    tip = billValue * 0.15;
  } else {
    tip = billValue * 0.2;
  }
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  console.log(
    "the bill",
    bills[i],
    "tip",
    calcTip(bills[i]),
    "total =",
    bills[i] + calcTip(bills[i])
  );
  tips.push(calcTip(bills[i]));
  total.push(calcTip(bills[i]) + bills[i]);
}

console.log("tips", tips);
console.log("total", total);

//bonus
let sum = 0;

const calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // shorter version would be sum += arr[i]
  }
  return sum / arr.length;
};
console.log(calcAverage(total));
