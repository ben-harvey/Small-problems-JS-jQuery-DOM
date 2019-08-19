/*
input: 1. a sorted array 2. a sorted array
output: a new array
rules:
  return an array with all elements from the input arrays, sorted ascending
  do not sort the output array directly
    build output array one element at a time
  do not mutate input
  works for primitive and compound types?
  bad input?
  two empty arrays?

data structure:
  array: for index access, for looping abstraction
algorithm:

  copy each array
  start at index 0
  compare elements at index in each array copy

  set result

  compare elements at index 0 in both arrays
    return 1 or 2
    if one array less than than the next
      shift element from that array and push to result
    if one element undefined
      shift element from other array and push
    if elements are equal
      shift both elements
    if both undefined
      break and return


[1, 5, 9], [2, 6, 8]
index1 = 0 --> 1
index2 = 0 --> 2
push array1[index1]
advance index1
index1 = 1 --> 5
index2 = 0 --> 2
push array1[index2]
advance index2
index1 = 1 --> 5
index2 = 1 --> 6

set a and b to a/b || 0 so comparison works as expected

  result = [1, 2, 5, 6, 8, 9]

*/


// -------------- solution 1

const pushToResult = function (current1, current2, array1, array2, result) {
  if (current1 < current2) {
        result.push(array1.shift());
      } else if (current2 < current1) {
        result.push(array2.shift());
      } else {
        result.push(array1.shift());
        result.push(array2.shift());
      }
}

const merge = function (array1, array2) {
  const result = [];
  array1 = array1.slice();
  array2 = array2.slice();

  do {
    var current1 = array1[0];
    var current2 = array2[0];

    if (current1 && current2) {
      pushToResult(current1, current2, array1, array2, result);
    } else {
      if (current1) { result.push(array1.shift()); };
      if (current2) { result.push(array2.shift()); };
    }
  } while (current1 || current2);

 return result;
}

// const merge = function (array1, array2) {
//   const result = [];
//   let index1 = 0;
//   let index2 = 0;

//   do {
//     var current1 = array1[index1] || Infinity;
//     var current2 = array2[index2] || Infinity;

//     if (current1 <= current2) {
//       result.push(current1);
//       index1 += 1;
//     } else {
//       result.push(current2);
//       index2 += 1;
//     }
//   } while (current1 < Infinity || current2 < Infinity);

//   return result.filter(el => el !== Infinity);
// }


console.log((merge(['b'], ['a'])));
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([], []));                    // []
