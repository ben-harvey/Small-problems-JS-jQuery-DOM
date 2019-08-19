/*
input: 1. a string rep version number 2. a string rep version number
output: an intege in (-1, 0  1) or null
rules:
  0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

  version numbers are integers 0-9 separated by a point

  scan the version number from left to right, let a place === a digit separated by a point
  if a version number has a greater number in an equivalent place, it is greater
  if a version number has a lesser number in an equivalent place, it is lesser
  if a version number has the same number in an equivalent place
    if it's the last place, the versions are equal
    else, check the next place


  eg in 1.2.3
    1st place is 1
    second place is 2
    third place is 3

  compare with 0.1.1
    1st place is 0 vs 1
    * 1.2.3 is greater

  compare with 1.2.4
    1st place is same
    2nd place is same
    3rd place is less
    * 1.2.4 is greater

  version numbers followed by any number of .0.0.0s are equal to the version number without them
  eg
    1.2 === 1.2.0.0.0

  If version1 > version2, we should return 1.
  If version1 < version2, we should return -1.
  If version1 === version2, we should return 0.
  If either version number contains characters other than digits and the . character, we should return null.

data structure:
  split on points to array of numbers
    step through by index to compare

algorithm:
  - guard clause
    return null if chars other than point or 0-9 in incorrect order
      test regex

  - split each array on points to an array of digits
  - determine which array is longer and use that value as break condition for loop

      subfunction longerLength(arr1, arr2)
        compare lengths and return longer length

    when shorter array returns undefined for out of bounds element
      use || 0 to compare to zero

                      - pad the shorter array with zeros
                          check length of array a and array b
                          if same, continue
                          else, find shorter array and pass to pad function

                            [1] [1, 2]
                            at index 0
                              1  1
                            at index 1
                              undefined  2


                            pad function
                              input: an 1. array 2. a desired length
                              output: a mutated array padded with zeroes to desired length
                                push zeros onto the input array until length === desired length
                                return mutated array

  - set default return value to 0

  - step through each array by index  // use a breakable loop structure eg 'for of'
    compare the two numbers
      if a < b, return -1
      if a > b, return  1

    if the last element is reached
      return 0

exactly one digit from 0-9

*/

const longerLength = function (array1, array2) {
  const length1 = array1.length;
  const length2 = array2.length;
  return length1 > length2 ? length1 : length2;
}

const VERSION_REGEX = /^([0-9]+)(\.[0-9]+)*$/

const compareVersions = function (versionA, versionB) {
  if ( !(VERSION_REGEX.test(versionA) && VERSION_REGEX.test(versionB)) ) { return null };

  const versionDigitsA = versionA.split('.').map(character => +character);
  const versionDigitsB = versionB.split('.').map(character => +character);
  const length = longerLength(versionDigitsA, versionDigitsB);

  for(let i = 0; i < length; i += 1) {
    const currentDigitA = versionDigitsA[i] || 0;
    const currentDigitB = versionDigitsB[i] || 0;

    if (currentDigitA < currentDigitB) { return - 1};
    if (currentDigitA > currentDigitB) { return 1};
  }

  return 0
}

console.log(compareVersions('0', '0')); // 0  [0] [0]
console.log(compareVersions('0', '1')); // -1
console.log(compareVersions('2', '1')); // 1
console.log(compareVersions('2.0', '1.0.0')); // 1 [2, 0, 0] [1, 0, 0]
console.log(compareVersions('2.0', '1.9')); // 1
console.log(compareVersions('2.0', '2.9')); // -1
console.log(compareVersions('0.1', '1')); // -1  [0, 1]
console.log(compareVersions('1.1', '1.2')); // -1
console.log(compareVersions('1.1', '1.18.2')); // -1
console.log(compareVersions('1.18.2', '13.37')); // -1
console.log(compareVersions('1.0.2', '1.0')); // 1   consider padding out shorter version with zeroes for such a case
console.log(compareVersions('1..2', '13.37')); // null
console.log(compareVersions('1.a', '13.37')); // null
console.log(compareVersions('1.a', '13.37')); // null
console.log(compareVersions('.1', '13.37')); // null
console.log(compareVersions('1,4,3', '13.37')); // null


