/*
input: an array of like elements
output: a new array of elements from input, sorted
rules:
  all elements in input are same type (number or string)
  use merge sort algorithm


data structure:
  array
algorithm:
  break input into nested array of 2 or 1 element
    slice 0,2,  += 2 until i is greater than length

    [1, 2, 3, 4, 5] => [[1, 2], [3, 4], [5]]
  break that into 3d nested array of single elements
    use above function with length of 1 instead of 2
  [
    [
      [5],
      [4]
    ],
    [
      [3],
      [2]
    ],
    [
      [1]
    ]
  ]

  merge each nested sub array

  [
    [4, 5],
    [2, 3],
    [1]
]

reduce with merge
  [
    [2, 3, 4, 5],
    [1]
    ]

  [[1. 2. 3. 4. 5]]



*/

const chunk =  function (array, size) {
  if (size < 1) { return null };

  const result = [];
  for(let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

console.log(chunk([1, 2, 3, 4], 2));

// const merge = function (array1, array2=[]) {
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

const merge = function (array1, array2=[]) {
  const result = [];
  debugger;

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

const mergeSort = function (array) {
  return chunk(array, 2)
    .map((subarray) => chunk(subarray, 1))
    .map((subarray) => merge(subarray[0], subarray[1]))
    .reduce((first, second) => merge(first, second));
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]