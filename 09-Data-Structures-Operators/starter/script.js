"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // openingHours: openingHours, // before es6
  openingHours, // es6 enhanced object literals

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//////////////////////
// // Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);
// // property values
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////////////////////
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// // with optional chaining
// console.log(restaurant.openingHours.mon?.open); // if it doesnt exist it will show undefined instead of an error
// console.log(restaurant.openingHours?.mon?.open);

// //example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "method does not exist");

// // arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// console.log(users[0]?.name ?? "Usere array empty");
////////////////////////////
//// for of loop through arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${[i + 1]} : ${el}`);
// }
//////////////
// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };
// const rest2 = {
//   name: "La Pizza",
//   owner: "Ermes Gasparini",
// };
// //// Or aaignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// ////nullish assignment operator ( null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //// AND assignment operator
// // rest1.owner = rest1.owner && "<ANONYMOUS>";
// // rest2.owner = rest2.owner && "<ANONYMOUS>";

// rest1.owner &&= "ANONYMOUS";
// rest2.owner &&= "ANONYMOUS";

// console.log(rest1);
// console.log(rest2);
/*
/////nullish coelesing operator
// Nullish = null and undefined ( 0 or "" = truthy)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
//////////////////////////////////////
///// Short circuiting || && operators

// OR operators use any data type, return any data type, short-circuiting
// OR will return first truthy value, or last value if all falsy
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // turnery operator
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// AND operator
// AND will return first falsy value or last value if all truthy
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

/*
///////////////////////
// 1, DESTRUCTURING WITH ... (spread,rest)
// spread, is on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);
// rest, is on LEFt side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// note there can only be one RESt in any destructuring assignments
const [pizza, , risotto, ...OtherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, OtherFood);
// REST with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2, FUNCTIONS

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(8, 1, 5, 6);
add(8, 3, 5, 5, 5, 87);

const x = [23, 5, 7];
add(...x);
console.log(...x);
////
restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
restaurant.orderPizza("mushrooms");
*/

// const ingredients = [
//   prompt(" Lets's make pasta! Ingredients 1? "),
//   prompt(" Lets's make pasta! Ingredients 2? "),
//   prompt(" Lets's make pasta! Ingredients 3? "),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// console.log(...ingredients);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

////////// iterables : arrays, strings ,maps, sets, NOT objects    ////////////
/// ... spread opperators can only be used when building an array or passing values into a FUNCTION
// const str = "Jonas";
// const letters = [...str, "", "s."];
// console.log(letters);
// console.log(...str);

// real world example spread operators
//objects

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guisepe" };
// console.log(newRestaurant);
// // console.table(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////// destructuring objects
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del sole, 21",
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); /// needs to be wrapped in brackets
// console.log(a, b);

///////////////////////////
// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/////////////////////////////////////
//// Destrucuting arrays
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// // recieve 2 return values from function
// const [starter, maincourse] = restaurant.order(2, 0);
// console.log(starter, maincourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

////////////       coding challange        ////////////////////

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are 
   field players. For Bayern Munich (team 1) create one variable ('gk') with the
   goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
   field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create
   a new array ('players1Final') containing all the original team1 players plus
  'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd 
  (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of 
   player names (NOT an array) and prints each of them to the console, along 
   with the number of goals that were scored in total (number of player names 
  passed in)
7. The team with the lower odd is more likely to win. Print to the console
  which team is more likely to win, WITHOUT using an if/else statement or
  the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
 Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals where scored`);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// team1 < team2 && console.log(" Team 1 is more likely to win ");
// team2 < team1 && console.log(" Team 2 is more likely to win ");
/////

/////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the
  console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
   (We already studied how to calculate averages, you can go check if you
    don't remember)
3. Print the 3 odds to the console, but in a nice formatted way,
   exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
 (except for "draw"). HINT: Note how the odds and the game objects have 
 the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of
       the players who scored as properties, and the number of goals 
       as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
