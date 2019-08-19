/*
input: 1. an array of sorted elements 2. a search term
output: an integer rep index of search term (or -1 for not found)
rules:
  input array is sorted
  input array elements respond to comparison operators
    string
    number

data structure:
  array for index access and slice
algorithm:

do
  find length of input array/current slice
  halve that truncate to integer for start index
  get el at that index
  if el === search term,
    return index
  else if el < search term
    slice elements from index + 1 to length
  else (el > search term)
    slice elements from 0 to index (exclusive)
while middle index > 0

return -1

[1, 5, 7, 11, 23, 45, 65, 89, 102], 77)
half = 4.5 => 4
middle = 23
middle < search term
slice from (4 + 1)
[1, 5, 7, 11]
trunc = 2
middle el = 7
7 < 77
slice from 0 (2 - 1)
[1, 5]
trunc = 1
middle el = 5
5 < 77
slice from 0 to (1 - 1)
[1]
middle el = 0
1
1 < 77
slice from 0 to 0 -1

[1, 5, 7, 11, 23, 45, 65, 89, 102], 89)
half = 4.5 => 4
middle = 23
middle < search term
slice from (4 + 1)
45, 65, 89, 102
trunc = 2
middle el = 89
return 89

[1, 2, 3, 4, 5] length = 5
middle index = 2
[1, 2] length = 2; element at index 1 is element at index 1
trunc modifer 0
[3, 4, 5] length = 2; element at index 1 is element at index 3

if currentEl < searchTerm, modifier += middleIndex
*/

const findMiddleIndex = function (array) {
  return Math.trunc(array.length / 2);
}


const binarySearch = function (array, searchTerm) {
  let currentSlice = array.slice();
  let middleIndex;
  let indexModifier = 0;

  do {
    middleIndex = findMiddleIndex(currentSlice);
    const currentElement = currentSlice[middleIndex];

    if (currentElement === searchTerm) { return middleIndex + indexModifier };
    if (currentElement > searchTerm) { currentSlice = currentSlice.slice(0, middleIndex) };
    if (currentElement < searchTerm) {
      currentSlice = currentSlice.slice(middleIndex + 1);
      indexModifier += middleIndex + 1; 
       };

    } while (middleIndex > 0);

    return -1;
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

