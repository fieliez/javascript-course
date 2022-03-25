"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//////////////////
///////////            WORKING WITH STRINGS           ////////////
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.toLowerCase().split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

const passenger = "jessica ann smith davis";
capitalizeName(passenger);
// padding
const message = "Got to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+")); // fills the given length with the given padding
console.log("Jonas".padStart(23, "+"));

//////// strings 2
// const airline = "Lufthanse Germany Airlines";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix capitalization in name
// const passenger = "jOnAs";
// const passengerLower = passenger.toLowerCase();
// const passangerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passangerCorrect);

// //compairing email
// const email = "hello@jonas.com";
// const loginEmail = "   Hello@Jonas.Com \n";

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim(); // delete whitespace and
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim(); // doing it all in one line
// console.log(normalizedEmail);
// console.log(normalizedEmail === trimmedEmail);

// //replacing
// const priceUK = "288,97£";
// const priceUS = priceUK.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcements =
//   "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcements.replace("door", "gate")); // only replace first occurance in string
// console.log(announcements.replaceAll("door", "gate")); // replaces all occurances

// //Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320")); // true
// console.log(plane.includes("boeing")); //false
// console.log(plane.startsWith("Airb"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("part of new airbus family");
// }
// // practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on the plane");
//   } else {
//     console.log("Welcome aboard");
//   }
// };
// checkBaggage("i have a laptop a string and a pocket knife");
// checkBaggage("some snacks and a camera");
// checkBaggage("got some socks and a gun for protection");
////////////
// const plane = "A320";
////basics
// console.log(plane[0]); // postition of letter in string
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[2]);

// console.log(airline.length); // number of letters
// console.log("B737".length);

// console.log(airline.indexOf("r")); // position of letter in string note: first occurance
// console.log(airline.lastIndexOf("e"));
// console.log(airline.indexOf("Germany"));

// console.log(airline.slice(4)); //begin perameter ie. where extration will start
// console.log(airline.slice(10, 17)); // begin and end defined by position of the two values

// console.log(airline.slice(0, airline.indexOf("Germany")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // starting from the last space (+1 to delete space)

// console.log(airline.slice(-2)); // gives the last two letter of the string
// console.log(airline.slice(0, -1)); // goes upto but not including last letter

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const pos = seat.slice(-1);

//   if (pos === ("B" || "E")) {
//     console.log(`${seat} is a middle seat😢`);
//   } else {
//     console.log(`${seat} is not a middle seat😎`);
//   }
// };
// checkMiddleSeat("11t");

// //how javascript does string methods
// console.log(new String("jonas"));
// console.log(typeof new String("jonas"));

/////////////////////////////////////////////////////////
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
//////////////

//////////////
//////////            MAPS         ////////////
/*
let question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct🎉"],
  [false, "try again!"],
]);
console.log(question);

//convert object to map
console.log(Object.entries(openingHours)); // similar to the map an arry within array
const hoursMap = new Map(Object.entries(openingHours));

//QUIZ APP
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt("your answer"));
console.log(answer);
// if (answer === question.get("correct")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
console.log(question.get(answer === question.get("correct")));
//covert map to array
console.log([...question]);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/
//////////////////////
/////////                MAPS-fundamentals           /////////////
/*
const rest = new Map();
rest.set("name", "Nandos");
rest.set(1, "CPT, South Africa");
rest.set(2, "lisbon, Portugale");

rest
  .set("catagories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("closed", 23)
  .set(true, "we are open")
  .set(false, "we are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("closed")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear(); // to clear the whole map
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading"); // h1 will become the key
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
//////////////////////
//////////////////          SETS               /////////////////
/*
const ordersSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "rissoto",
  "pasta",
  "pizza",
]);
console.log(ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size); /// sets use size not .length like arrays
console.log(ordersSet.has("pizza")); // .has makes boolean true
console.log(ordersSet.has("bread")); //  false
ordersSet.add("garlic bread");
ordersSet.add("garlic bread");
ordersSet.delete("rissoto");
console.log(ordersSet);

for (const orders of ordersSet) {
  console.log(orders);
} 
// example.. big use case for SETS (remove duplicate value for arrrays)
const staff = ["waiter", "chef", "waiter", "manager", "waiter", "chef"];
const staffUnique = [...new Set(staff)]; // putting it into a new array
console.log(staffUnique);
console.log(
  new Set(["waiter", "chef", "waiter", "manager", "waiter", "chef"]).size
); // how many unique positions there are

console.log(new Set("joshuafielies").size); // how many unique letters
*/
/////////////////////
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

//1,)
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2,)
let average = 0;
for (const x of Object.values(game.odds)) {
  average = average + x;
}
average = average / Object.values(game.odds).length;
console.log(average);

//3,)
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

///////////////////
////////////////       Coding Challenge #3       /////////////////

/* 
Let's continue with our football betting app! This time, we have a map with 
a log of the events that happened during the game. The values are the events
 themselves, and the keys are the minutes in which each event happened 
 (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened
 (no duplicates) 
2. After the game has finished, is was found that the yellow card from minute
 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average,
 every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in
 the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
// console.log(gameEvents);
// //1.)
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.)
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.)
// // const keyarr = [...gameEvents.keys()];
// // const averageEvent = 90 / keyarr.length;
// const average = 90 / gameEvents.size;
// console.log(average);
// console.log(`An event happend every ${average}min's`);

// //4.)
// for (const [key, value] of gameEvents) {
//   // if (key <= 45) {
//   //   console.log(`[FIRST HALF] ${key}: ${value}`);
//   // } else if (key > 45) {
//   //   console.log(`[SECOND HALF] ${key}: ${value}`);
//   // }
//   // more efficent way
//   const half = key <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }

////////////////
