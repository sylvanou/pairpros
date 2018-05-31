// Challenge 4
// The function reduce takes an array and reduces the elements to a single value.For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

// var nums = [4, 1, 3];
// var add = function (a, b) { return a + b; }
// reduce(nums, add, 0);   //-> 8
// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value.The next loop executes with this new accumulator value.In the example above, the accumulator begins at 0. add(0, 4) is called.The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.

function reduce(arr, callback, initialVal) {
  var accumulator = initialVal || 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}

const add = (a, b) => a + b;
const mult = (a, b) => a * b;

// console.log(reduce([4, 1, 3], mult, 1));

// accumulator = {}, (a), array[i], (b);
const reducer = (a, b) => {
  // b.sort((x, y) => x - y);
  // console.log(a, b);
  for (let j = 0; j < b.length; j++) {
    if (a[b[j]]) {
      a[b[j]] += 1;
    } else {
      a[b[j]] = 1;
    }
  }

  return a;
};
// Challenge 5
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.BONUS: Use reduce!

function intersection(arrayOfArrays) {
  var result = [];
  var dict = {};

  dict = reduce(arrayOfArrays, reducer, dict);

  for (let key in dict) {
    if (dict.hasOwnProperty(key)) {
      if (dict[key] == arrayOfArrays.length) {
        result.push(+key);
      }
    }
  }

  return result.length > 0 ? result : null;
}

// console.log(intersection([[5, 10, 20, 15], [80, 1, 7, 5], [1, 10, 15, 5, 20]]));

const reducerA = (a, b) => {
  return a.filter(elem => {
    console.log(a);
    return b.includes(elem);
  });
};

function intersectionA(arrayOfArrays) {
  return reduce(arrayOfArrays, reducerA, arrayOfArrays[0]);
}

// console.log(intersectionA([[5, 10, 20, 15], [80, 1, 7, 5], [1, 10, 15, 5, 20]]));

// Challenge 6
// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements.If there are duplicate elements, only add it once to the new array.Preserve the order of the elements starting from the first element of the first input array.
//   BONUS: Use reduce!

let newArr = [];
function union(arrayOfArrays) {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (Array.isArray(arrayOfArrays[i])) {
      union(arrayOfArrays[i]);
    }
    if (
      !newArr.includes(arrayOfArrays[i]) &&
      Number.isInteger(arrayOfArrays[i])
    ) {
      newArr.push(arrayOfArrays[i]);
    }
  }
  return newArr;
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// [ 5, 10, 15, 88, 1, 7, 100 ]

// Challenge 7
// Construct a function objOfMatches that accepts two arrays and a callback.objOfMatches will build an object and return it.To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element(by index) of the second array.If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

function objOfMatches(arr1, arr2, callback) {
  return callback(arr1, arr2);
}

function arrCheck(arg1, arg2) {
  let match = {};
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] === arg2[i]) {
      match[arg1[i]] = arg2[i];
    }
  }
  // console.log(match);
  return match;
}

console.log(objOfMatches([5, 9, 9, 13, 20], [5, 0, 9, 12, 20], arrCheck));
// { '5': 5, '9': 9, '20': 20 }

//   Challenge 8
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks.multiMap will return an object whose keys match the elements in the array of values.The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(arr, arrOfCallbacks) {
  
}
