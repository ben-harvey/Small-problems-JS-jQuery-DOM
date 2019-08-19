function oddities(array) {
  var oddElements = [];
  var i;

  for (i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6]) === [2, 4, 6]);      // false
console.log(oddities(['abc', 'def']) === ['abc']);         // false


// the strict equality operator is checking to see if the two operands are the same object
// the array object returned by the function is not the same object as the argument array
// passed to the function, so it returns false.
// to check for value equality, you could iterate over the input and result arrays and check
// for equality of the values at each index