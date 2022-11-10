"use strict";
console.log("edabit.js");

//^ Write a function redundant that takes in a string str and returns a function that returns str.

function redundant() {
  let string = "Hey There";
  function stringFunction() {
    console.log(string);
  }
  stringFunction();
}
redundant();

console.log("redundant ===", redundant);

//^ Create a function which returns the number of true values there are in an array.

const trueOrNot = [true, true, false, true, false, false, false];

function filterItems(trueOrNot) {
  return trueOrNot.filter((el) => el === true).length;
}
filterItems(trueOrNot);
console.log(filterItems(trueOrNot));

//^
