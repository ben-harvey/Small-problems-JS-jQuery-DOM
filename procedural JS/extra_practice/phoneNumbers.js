// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.


/*
input: a string rep a phone number
output: a string rep a cleaned up phone number
rules:
  happy paths
    number is 10 digits
    number is 11 digits and first number is 1
  unhappy paths
    less than 10 digits
    11 digits but first number is not 1
    more than 11 digits

  for a good number
    for 10 digits, return the number
    for 11 digits, trim the 1 and return the number
  for a bad number
   return a string of 10 zeros

   input can contain non-digit characters such as -, .,  , (), etc.
   these are ignored
data structure:
  length


algorithm:

-  set an invalid string return value of 10 0's
  - clean the input of non-digit characters
      use a regex to replace any non-digit chars with ''

  if that array is less than 10 or greater than 11 in length, return invalid string

  if 10 digits
     return

  if array is 11 in length
    if first digit is not 1, return invalid string
    else
      slice from second character to end
      return that string
*/

const cleanPhoneNumbers = function (phoneNumber) {
  const cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const numberLength = cleanedNumber.length;
  const invalidNumberString = '0000000000';

  if (numberLength === 10) { return cleanedNumber };
  if (numberLength === 11 && cleanedNumber.slice(0, 1) === '1') { return cleanedNumber.slice(1); };

  return invalidNumberString;
}

console.log(cleanPhoneNumbers('123-456-7890')); // '1234567890'
console.log(cleanPhoneNumbers('(123)-456-7890')); // '1234567890'
console.log(cleanPhoneNumbers('(323).456 7890')); // '1234567890'
console.log(cleanPhoneNumbers('1(123).456 7890')); // '11234567890'
console.log(cleanPhoneNumbers('1(123).456aaa7890')); // '1234567890'
console.log(cleanPhoneNumbers('2(123).456 7890')); // '0000000000'  11 but starts with 2
console.log(cleanPhoneNumbers('1 233-456-78900')); // '0000000000'  starts with 1 but 12 digits
console.log(cleanPhoneNumbers('2 233-456-78900')); // '0000000000'  12 digits
console.log(cleanPhoneNumbers('23-456-7890')); // '0000000000'  9 digits
console.log(cleanPhoneNumbers('')); // '0000000000'  0 digits
// console.log(cleanPhoneNumbers(1234567890)); // '0000000000'  0 digits
