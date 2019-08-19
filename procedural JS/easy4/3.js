/*
input: an array
output: a nested array of [array, array]
rules:
  first half of input goes in first nested array
  second half of input goes in second nested array
  if length is odd, middle el goes in first array
  if length is 1, second array is empty
  if length is 0, both arrays are empty

algorithm:
  find halfway point --> ceiling of length / 2
    get input length
      eg 4 -> 0, 1   2, 3
      eg 5   0 1 2   3 4
    set result arrays
    for index 0 up to halfway, exclusive
      push to first array
    for halfway to length, exclusive
      push to second
*/

// first solution ------------------

// function halvsies(array) {
//   var length = array.length;
//   var halfway = Math.ceil(length / 2);
//   var result = [[], []];
//   var i;
//   var j;

//   for (i = 0; i < halfway; i += 1) {
//     result[0].push(array[i]);
//   }

//   for (j = halfway; j < length; j += 1) {
//     result[1].push(array[j]);
//   }

//   return result;
// }

// refactor using Array.slice ---------------

function halvsies(array) {
  var halfway = Math.ceil(array.length / 2);
  var firstHalf = array.slice(0, halfway);
  var secondHalf = array.slice(halfway);

  return [firstHalf, secondHalf];
}





console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
