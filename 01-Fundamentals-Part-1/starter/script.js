// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(20);

// let firstname = "Matilda";

// console.log(firstname);
// console.log(firstname);
// console.log(firstname);

// let myFirstJob = "programmer";
// let myCurrentJob = "teacher";

// console.log(myFirstJob);

//true;

// let javascriptIsFun = true;
// console.log(true);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);
// let age = 30;
// age = 31;

// const birthyear = 1991;
// // birthyear = 1992 is not possible because birth year is const;

// //  var is the old way of defining variable
// var job = "programmer";
// job = "teacher";

// =============      operators     ==============
// math operators

// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);
// // added a string space in the middle

// //========  assignment operators ============

// let x = 10 + 5; //15
// x += 10; // x= x+10   =25
// x *= 4; // x=   x*4       =100
// x++; // x = x+1
// x--; // x = x-1
// console.log(x);

// // comparision opperators _ produce boolean values

// console.log(ageJonas > ageSarah); // <, >, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

//=======   coding challange =========()
// task1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;
// //task 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;
// const johnBmi = massJohn / heightJohn ** 2;
// const markBmi = massMark / heightMark ** 2;
// console.log(markBmi, johnBmi);
// console.log(markBmi > johnBmi);

// const firstName = `Joshua`;
// const lastName = "Fielies";
// const birthYear = "1998";
// const year = 2021;
// const job = "teacher";
// const joshua =
//   "I'm " + firstName + ", a " + (year - birthYear) + "year old " + job;

// console.log(joshua);

// const joshuaNew = `I'm ${firstName}, a ${year - birthYear}year old ${job} `;

// console.log(joshuaNew);
// console.log(`just a regular string`);

// console.log("string with\n\
// multiple\n\
// lines");

// console.log(`string
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("sarah can start driving🙌");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is to young wait ${yearsLeft}years`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// //coding challange if else

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;
// const johnBmi = massJohn / heightJohn ** 2;
// const markBmi = massMark / heightMark ** 2;
// console.log(`marks bmi is ${markBmi}, johns bmis is ${johnBmi}`);
// console.log(markBmi > johnBmi);

// if (johnBmi > markBmi) {
//   console.log(`Johns ${johnBmi}BMI is higher than Marks.`);
// } else {
//   console.log(`Marks ${markBmi}BMI is higher than Johns ${johnBmi}BMI.`);
// }

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear, "hello");
// console.log(Number(inputYear) + 18);

// console.log(Number("jonas"));

// console.log(String(23), 23);

// //type coercion
// console.log("i am " + 23 + " years old");
// console.log("23" + "10" + 3);
// console.log("23" * "2");

// 5 falsy values: 0, "",undefiend, nun, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("dont spend it all");
// } else {
//   console.log("you should get a job");
// }
// let height = 0;
// if (height) {
//   console.log("yayheight is defined");
// } else {
//   console.log("height undefined");
// }

// const age = 18;
// if (age === 18) {
//   console.log("you just became an adult (strict)");
// }

// if (age == 18) {
//   console.log("you just became an adult(loose)");
// }

// // === does not do type coersion strict
// // == does therefore "18" == 18   loose

// const favourite = Number(prompt("whats your favourite number?"));
// console.log(favourite);

// if (favourite === 23) {
//   console.log("23 is cool number");
// } else if (favourite === 7) {
//   console.log("7 is cool");
// } else {
//   ("you favourite number is boring");
// }

// if (favourite !== 23) console.log("but why not 23?");

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const istired = true;

// console.log(hasDriversLicense && hasGoodVision); // and
// console.log(hasDriversLicense || hasGoodVision); //or
// console.log(!hasDriversLicense); // not

// if (hasGoodVision && hasDriversLicense && !istired) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive ...");
// }
// if (hasGoodVision && hasDriversLicense && istired) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive ...");
// }

// let dolphinScore1 = 97;
// let dolphinScore2 = 112;
// let dolphinScore3 = 101;

// let koalaScore1 = 109;
// let koalaScore2 = 95;
// let koalaScore3 = 123;

// const dolphineAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// console.log("dolphins: ", dolphineAverage);

// const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
// console.log(koalaAverage);

// if (dolphineAverage > koalaAverage && dolphineAverage >= 100) {
//   console.log("dolphines win the tourney");
// } else if (dolphineAverage < koalaAverage && koalaAverage >= 100) {
//   console.log("Koalas win the tourney");
// } else if (
//   dolphineAverage === koalaAverage &&
//   (dolphineAverage || koalaAverage) >= 100
// ) {
//   console.log("its a draw🤪");
// } else {
//   console.log("nobody wins🥲");
// }

// const day = "tuesday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code example");
//     break;
//   case "friday":
//     console.log("record video");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enyoj the weekend");
//     break;
//   default:
//     console.log("not a valid day");
// }

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === ("wednesday" || "thursday")) {
//   console.log("write code example");
// } else if (day === "friday") {
//   console.log("record video");
// } else if (day === ("saturday" || "sunday")) {
//   console.log("enyoj the weekend");
// } else {
//   console.log("not a valid day");
// }

// const age = 27;
//age >= 10
//   ? console.log("i like to drink wine👙")
//   : console.log("i like to drink wine");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;

// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

const bill = 275;

// if (bill >= 50 && bill <= 300) {
//   tip = bill * 0.15;
// } else if (bill < 50) {
//   tip = 0;
// } else if (bill > 300) {
//   tip = bill * 0.2;
// }

// let finalValue = bill + tip;
// console.log(tip);
// console.log(finalValue);

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
const finalValue = bill + tip;
console.log(
  `the total value is ${finalValue} the tip alone is ${tip} the bill alone was${bill}`
);
