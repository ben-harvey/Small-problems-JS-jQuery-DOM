/*
input: 3 integers rep sides of triangle
output: a string rep type of triangle or invalid
rules:
  Equilateral: All three sides are of equal length.
  Isosceles: Two sides are of equal length, while the third is different.
  Scalene: All three sides are of different lengths.
  Invalid:
    all sides are greater than 0
    sum of 2 shorter sides > longest side
data structure:
  number: for comparing max/min
  array: for some/every
algorithm:
  conditional logic
  equilateral
    count elements, should be 3
  isosceles
    count elements, should be 2, 1
  scalene
    count elements, should be 1, 1, 1


  subfunction: invalid
    return true if array.some === 0
    subfunction
      find max side
        sort ascending
        pop last value
        sum remaining
      return true if sum > max



  subfunction: count occurrences of els in array
  input: an array of integers
  output: an array rep counts of input els
  algorithm:
    initialize result object
    for each el in input
      if object has key of el, increment value
      else create key of el with value of 1
    return Object.values of result object

  check if invalid, if so set return string to invalid
  get counts and set return string with switch statement
  return string
*/
const hasZero = function(sides) {
  return sides.some((el) => el === 0);
}

const invalidLengths = function (sides) {
  const sorted = sides.slice().sort((a, b) => a - b);
  const max = sorted.pop();
  const sum = sorted.reduce((total, side) => side + total);

  return sum < max;
}

const invalidTriangle = function (sides) {
  return hasZero(sides) || invalidLengths(sides);
}

// const countOfSides = function (sides) {
//   const result = {}
//   sides.forEach((side) => {
//     if (result[side]) {
//       result[side] += 1;
//     } else {
//       result[side] = 1;
//     }
//   });
//   return Object.values(result).length;
// }

const triangle = function (...sides) {
  if (invalidTriangle(sides)) { return "invalid" };
  // let count = countOfSides(sides);
  const distinctSides = new Set(sides).size;

  switch (distinctSides) {
    case 3:
      return "scalene";
    case 2:
      return "isosceles";
    case 1:
      return "equilateral"
  }

}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

// console.log(invalidTriangle([3, 4, 5]));

