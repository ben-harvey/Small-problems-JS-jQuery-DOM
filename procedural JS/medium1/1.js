/*
input: an array of 0 or more elements
output: a new array with same length as input, rotated
rules:
  first element becomes last element
  works for strings and integers
  for a single element, output == input
  mixed element types ok
  compound data structures ok, treat as element
    shallow or deep level?
  empty array returns empty array
  return undefined for bad input
  don't mutate argument

data structure:
  array (input, output)
algorithm:
  guard clause to check if input is an array
    if not, return undefined
  slice input array from index 1 to end
  concat the 0 index element of input to that new array
    either if clause to see if 0 index el is undefined
    or guard clause to return [] for empty array
  return that new array
*/

const rotateArray = function (input) {
  if (!Array.isArray(input)) { return undefined };
  if (input.length === 0) { return [] };

  return input.slice(1)
  .concat(input[0]);
}



console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]