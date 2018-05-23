// These challenges may seem accessible, but make sure you diagram them out or talk through them aloud in the same way we did in class.Understanding this precise approach to communicating your code will ensure that all the hard challenges to come follow much more naturally

// // Challenge 1A

// Create a function addTwo that accepts a number, and returns the number plus 2.
const addTwo = num => num + 2;
console.log(addTwo(5));
// Challenge 1

// Create a function addS that accepts a string, and returns the string with an "s" added to the end.
const addS = str => str + "s";
console.log(addS("Shark"));
//   Challenge 2

// Examine the code given to you.Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.

const x = 3;

function isX1(num) {
  const x = 5;
  return num === x;
}

function isX2(num) {
  return num === x;
}

console.log(isX1(5));
console.log(isX2(3));

// Challenge 3

// Examine the code given to you.Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry, as done in the commented out lines below the code given to you.You may add code to the places marked ADD CODE HERE ?, though it might not be necessary to add code to all four places.

let calls = "";

function jerry(str) {
  calls += "Jerry";
  kramer();
}

function george(str) {
  calls += "George";
  elaine();
}

function elaine(str) {
  calls += "Elaine";
}

function kramer(str) {
  calls += "Kramer";
  george();
}

jerry();
console.log(calls); // should log out JerryKramerGeorgeElaine
