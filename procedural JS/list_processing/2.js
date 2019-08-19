/*
input: an array of integers
output: a sorted array
rules:

algorithm:
  associate each string with its index
  sort the strings by unicode
  map sorted strings to get index
  return array of indices

ds:
  object : {
  18: 'eighteen'
  or
  'eighteen': 18

  }
  array:
  [['zero', 0]]
*/




const numberStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
// [ 'eight',
//   'eighteen',
//   'eleven',
//   'fifteen',
//   'five',
//   'four',
//   'fourteen',
//   'nine',
//   'nineteen',
//   'one',
//   'seven',
//   'seventeen',
//   'six',
//   'sixteen',
//   'ten',
//   'thirteen',
//   'three',
//   'twelve',
//   'two',
//   'zero' ]

const alphabeticNumberSort = function (numbers) {
  const digitsAndNumbers = numberStrings.map( (string, index) => [string, index] );
  const sorted = digitsAndNumbers.sort( (first, second) => {
    const firstName = first[0];
    const secondName = second[0];

    if (firstName < secondName) return -1;
    if (firstName > secondName) return 1;
    return 0;
  });
  return sorted.map( (element) => element[1]);
}


console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]