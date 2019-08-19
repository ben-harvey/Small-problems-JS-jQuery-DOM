/*
input: an integer rep upper bound, inclusive
output: an integer rep square of sums minus sum of squares
rules:
  input is always positive integer
  range is from one to upper bound
data structure:
  array for list processing abstraction
  number for math operations
algorithm:
  create a range from one to input
  reduce that range with addition, then square result
  map over that range to get squares, then reduce that result with addition
  return the difference between the two
*/

const sumSquareDifference = function (bound) {
  const range = [...Array(bound).keys()].map((number) => number + 1);
  const squaredSum = (range.reduce((total, number) => total + number)) ** 2;
  const summedSquare = range.map((number) => number ** 2)
    .reduce((total, number) => total + number);
  return squaredSum - summedSquare;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150