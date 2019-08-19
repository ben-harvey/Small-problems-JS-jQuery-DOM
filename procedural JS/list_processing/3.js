/*
input: 1. an array of integers 2. an array of integers
output: an array of integers
rules:
  output contains all possible products of combos of input arrays
  include duplicates
  return array sorted ascending
  no empty inputs
  algorithm:
  for each number in first array
    multiply with each number in second array
  return result

  map
*/

// const multiplyAllPairs = function (array1, array2) {
//   const result = [];
//   array1.forEach((number1) => {
//     result.push(array2.map((number2) => number1 * number2 ))
//   });

//   return [...result[0], ...result[1]].sort((a, b) => a - b)
// }

const multiplyAllPairs = function (array1, array2) {
  const result = [];
  array1.forEach((number1) => {
    array2.forEach((number2) => result.push(number1 * number2))
  });

  return result.sort((a, b) => a - b)
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

