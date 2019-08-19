/*
input: string of digit and non digit characters
output: boolean rep valid or invalid by the luhn formula
rules:
  to check a number
  starting at the rightmost digit, double every second digit
      1111 becomes 2121
    if the doubled value is > 10, subtract 9
      8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
  reduce the resulting number to a sum
    1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
    8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
  check if sum ends in 0
    if yes, valid, else invalid

  ignore all non-alpha characters
    eg 2345-2345-3445-2345
    eg 2345 2345 3445 2345
    would be equal to 2345234534452345

data structure:
  index access
  reducing
  --> array
 split and map to integers

algorithm:
  clean string of non digits
    use regex on string
  split cleaned string to an array of characters
  map over array to an array of digits

  guard clause: return null if length of digit array is 0

  transform the digit array by doubling every second digit
    [8,7,6,3]
    reverse the digit array
    [3,6,7,8]
    for every element with an odd index
      double the current digit
      if result is greater than 10, subtract 9
      return the result
    [3, 3, 7, 7]
  reduce the transformed array by addition
  check if the resulting sum % 10 === 0
  return the boolean result
*/

const doubleDigits = function (digits) {
  return digits.map((digit, index) => {
    if (index % 2 === 1) {
      let doubled = digit * 2;
      return doubled > 9 ? doubled - 9 : doubled;
    }

    return digit;
  });
}

const isLuhnNumber = function (numberString) {
  const cleanedNumberString = numberString.replace(/[^0-9]/g, '');
  const cleanedDigits = cleanedNumberString.split('').map(Number).reverse();
  if (cleanedDigits.length === 0) { return null };

  const doubledDigits = doubleDigits(cleanedDigits);
  const checksum = doubledDigits.reduce((total, current) => current + total);

  return checksum % 10 === 0;
}

console.log(isLuhnNumber('1111')); // false
console.log(isLuhnNumber('8763')); // true
console.log(isLuhnNumber('34')); // true
console.log(isLuhnNumber("2323 2005 7766 3554")); // true
console.log(isLuhnNumber("2323-2005-7766.3554sodf")); // true
console.log(isLuhnNumber("")); // false or null
console.log(isLuhnNumber("asd;foiaer")); // false



//