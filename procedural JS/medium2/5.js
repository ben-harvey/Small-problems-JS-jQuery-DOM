/*
input: an integer
output: an integer rep next featured number larger than input
rules:
  featured number:
    is odd
    is divisible by 7
    each digit occurs once

  issue error if no greater featured number
data structure:
  numbers for math operations
  array to store generated numbers
algorithm:
  find number larger than input that is divisible by 7
  check if odd
  check if unique digits
    convert to array of strings
    check if indexOf === lastIndexOf
  if so, return number
  else, increment that number by 7 and recheck
  raise error condition?
    find largest featured number
      generate all possible featured numbers
      take max
*/

const uniqueDigits = function(number) {
  const digits = String(number).split('');
  let unique = true;
  digits.forEach((digit) => {
    if (digits.indexOf(digit) !== digits.lastIndexOf(digit)) { unique = false; }
  });

  return unique;
}

const nextOddFactorOfSeven = function (number) {
  let next = (7 - (number % 7)) + number;
  return (next % 2 !== 0) ? next : next + 7;
}

const isFeatured = function (number) {
  return number % 2 !== 0 && number % 7 == 0 && uniqueDigits(number);
};

const featured = function (bound) {
  let nextFactor = nextOddFactorOfSeven(bound);
  let featured = null;

  for (let i = nextFactor;; i += 14) {
    if (isFeatured(i)) { return i; }
  }
};

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987