"use strict";
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 2,
  price = 199 * numPassangers
) {
  //   numPassangers = numPassangers || 1; ES5
  //   price = price || 199; ES5

  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 100);
*/
///////////////////

//primitive and objects in functions

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24356781,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 24356781) {
    alert("check in");
  } else {
    alert("wrong passport");
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas); // the function will override the main value if eddited

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
