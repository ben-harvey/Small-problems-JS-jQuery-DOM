/*
input: a number
output: a number
rules:
  double number === if you split in half, left equals right
    3333, 103103, and 7676 are double numbers
  if double number
    return number
  else
    return number * 2
algorithm:
  isDoubleNumber
    input: number
    output: boolean

    return false if length is odd ?
    convert number to string
    split in half
      eg length = 6
      left = 0, 1 2
      right = 3, 4, 5
      inflection is length / 2
    return true if left equals right, false otherwise

  twice:
    return number if double
    return number * 2 otherwise
*/

function isDoubleNumber(number) {
  var string;
  var length;
  var halfIndex;
  var left;
  var right;

  string = String(number);
  length = string.length;
  halfIndex = length / 2;

  // if (length % 2 === 1) { return false; }

  left = string.slice(0, halfIndex);
  right = string.slice(halfIndex)
  return left === right;
}


function twice(number) {
  return isDoubleNumber(number) ? number : number * 2;
}


console.log(isDoubleNumber(103103)); // true
console.log(isDoubleNumber(334433)); // false
console.log(isDoubleNumber(3333)); // true
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676