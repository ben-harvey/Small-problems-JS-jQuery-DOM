/*
input: 1 an integer to be rotated 2 an integer rep number of digits to rotate
output: an integer
rules:
  for 1, return original integer (since rotating 1 digit does nothing)
  leave unrotated portion alone
data structure:
  array -- for slicing and accessing by index
algorithm:
    convert input to array
      convert to string and split to array of numstrings
    slice portion to be rotated
      this should be destructive
      use negative (arg 2)
    rotate sliced portion
    re concat rotated portion to unrotated portion
    convert output to number
      join and convert to number
*/


const rotateRightmostDigits = function (number, index) {
  const numString = String(number)
  const notRotated = numString.slice(0, numString.length - index)
  const toRotate = numString.slice(numString.length - index)

  return +(notRotated + rotateString(toRotate))
}

const rotateString = function (input) {
  return input.slice(1).concat(input[0]);
}
// const rotateRightmostDigits = function (number, index) {
//   const numStrings = String(number).split('');
//   const toRotate = numStrings.splice(-index, index)
//   const rejoined = numStrings.concat(rotateArray(toRotate)).join('')
//   return +rejoined;
// }

// const rotateArray = function (input) {
//   if (!Array.isArray(input)) { return undefined };
//   if (input.length === 0) { return [] };

//   return input.slice(1)
//   .concat(input[0]);
// }


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 7352 19
console.log(rotateRightmostDigits(735291, 3));      // 735 912
console.log(rotateRightmostDigits(735291, 4));      // 73 2915
console.log(rotateRightmostDigits(735291, 5));      // 7 52913
console.log(rotateRightmostDigits(735291, 6));      // 352917