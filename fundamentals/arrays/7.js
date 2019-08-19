/*
input: an array
output: the first element from input
rules:
  mutates input
algorithm:
  store first element
  splice first element
  return first element
*/

function shift(array) {
  return array.splice(0, 1)[0];
}

/*
input: array and 1 or more values
output: length of array after unshifting
rules:
  add to start of input
  mutate input
algorithm:
  for each arg after 1st
    splice arg to beginning of input array
  return array length

*/


function unshift(array) {
  for(var i = 1; i < arguments.length; i += 1) {
    currentArg = arguments[i];
    array.splice(0, 0, currentArg);
  }
  return array.length;
}

function unshift(array) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    array.splice(i - 1, 0, arguments[i]);
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5, 6, 7));           // 3
console.log(testArray);                       // [5, 2, 3]