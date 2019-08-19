/*
input: an integer
output: an integer, maximally rotated
rules:
  max rotation:
    735291 rotate from 6 to end
    352917 rotate from 5 to end
    329175 rotate from 4 to end
    321759 rotate from 3 to end
    321597 rotate from 2 to end
    321579

    break condition:  when only two digits have been rotated
    return integer itself for numbers less than 2 digits
data structure:
  string for slicing and concatenating

algorithm:
  set an index equal to length of input
    if index == 2
      rotate and return
    if index is greater than 2
      rotate input with index and capture in variable
      decrement index
      rotate until index == 2

*/


const maxRotation = function (integer) {
  const length = String(integer).length;
  if (length < 2) { return integer };

  let firstRotation = rotateRightmostDigits(integer, length);

  for (let i = length - 1; i >= 2; i -= 1){
    firstRotation = rotateRightmostDigits(firstRotation, i);
  }
  return firstRotation;
}

const rotateRightmostDigits = function (number, index) {
  const numString = String(number)
  const notRotated = numString.slice(0, numString.length - index)
  const toRotate = numString.slice(numString.length - index)

  return +(notRotated + rotateString(toRotate))
}

const rotateString = function (input) {
  return input.slice(1).concat(input[0]);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845