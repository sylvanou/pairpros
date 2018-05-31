// Challenge 9
// Create a function majority that accepts an array and a callback.The callback will return either true or false.majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true.If the number of true returns is equal to the number of false returns, majority should return false.

function majority(arr, callback) {
  let tru = 0;
  let fals = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      tru += 1;
    } else {
      fals += 1;
    }
  }
  return tru > fals ? "true" : "false";
}

function check(arg) {
  return arg ? arg : 0;
}

// console.log(
//   majority([1, 1, 0, 1, null, 10, false, "potato", true, false, "true"], check)
// );
// true

//   Challenge 10
// Create a function prioritize that accepts an array and a callback.The callback will return either true or false.prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

function prioritize(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.unshift(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function sort(arg) {
  return arg ? true : false;
}

// console.log(
//   prioritize([1, 1, 0, 1, null, 10, false, "potato", true, false, "true"], sort)
// );
// [ 'true', true, 'potato', 10, 1, 1, 1, 0, null, false, false ]

//   Challenge 11
// Create a function countBy that accepts an array and a callback, and returns an object.countBy will iterate through the array and perform the callback on each element.Each return value from the callback will be saved as a key on the object.The value associated with each key will be the number of times that particular return value was returned.

function countBy(arr, callback) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    console.log(callback(arr[i]));
    if (obj[callback([arr[i]])] === arr[i]) {
      obj[callback([arr[i]])] += 1;
      // console.log(obj[callback([arr[i]])]);
    }
  }
  return obj;
}

function count(arg1) {
  return arg1;
}

console.log(
  countBy([1, 1, 0, 1, null, 10, false, "potato", true, false, "true"], count)
);
//   Challenge 12
// Create a function groupBy that accepts an array and a callback, and returns an object.groupBy will iterate through the array and perform the callback on each element.Each return value from the callback will be saved as a key on the object.The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

//   Challenge 13
// Create a function goodKeys that accepts an object and a callback.The callback will return either true or false.goodKeys will iterate through the object and perform the callback on each value.goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
