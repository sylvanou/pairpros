// // Challenges Set A

// Challenge 1
// Create a function called subtractTwo that will accept a number, and return the number minus 2.

// Then create a function called map that takes two inputs:

// an array of numbers(a list of numbers)
// a 'callback' function - this function is applied to each element of the array(inside of the function 'map')

// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.please do not use the native map or forEach method.

const subtractTwo = num => num - 2;
// console.log(subtractTwo(10))

//   map([1, 2, 3, 4, 5], multiplyByTwo); //-> [2,4,6,8,10]
// multiplyByTwo(1); //-> 2
// multiplyByTwo(2); //-> 4

const multiplyByTwo = num => num * 2;
const map = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
};
const arr = [1, 2, 3, 4, 5];
console.log(map(arr, multiplyByTwo));

// Challenge 2

// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array.forEach does not return anything.Please do not use the native forEach or map method.

var alphabet = "";
var letters = ["a", "b", "c", "d"];
function forEach(letters, func) {
  let newArr = [];
  for (let i = 0; i < letters.length; i++){
    newArr.push(func(letters[i]));
  }
}
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

// Challenge 3
// In the first part of the extension, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
const mapWith = (arr, callback) => {
  let newArr = [];

  forEach(arr, function(elem) {
    newArr.push(arr, callback(elem))
  })
};

console.log(mapWith())
