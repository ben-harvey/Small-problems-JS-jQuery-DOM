/*
input: a nested array rep a 3x3 matrix
output: a new array rep the transposition of that matrix
rules:
  to transpose an array, rows and columns are reversed

  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],

  becomes

  1  4  3
  5  7  9
  8  2  6

  0,0 --> 0,0
  0,1 --> 1,0
  0,2 --> 2,0

  1,0 --> 0,1
  etc

  - return new array, don't mutate argument
  - input is always 3x3
  - array contents shouldn't matter (primitives, compound types)
  - array is always symmetrical? if not, what is placeholder value?
  -

data structure:
  array: for index access, for list proc abstractions
algorithm:
  initialize an empty result array
  for each column
    push an array containing each el in the column onto the result
      set column number in outer loop  eg 0
      in outer loop
        start at 0 up to number of columns - 1
        set an empty array for a result row []
        set row number in inner loop
          in inner loop
          start at 0 up to number of rows - 1
          push element at row, column onto result
      at end of outer loop, push result row onto final result

      eg first column (0)
      0, 0 [1]
      1, 0 [1, 4]
      2, 0 [1, 4, 3]
      [[1, 4, 3]]

*/

// const transpose = function (matrix) {
//   const transposedArray = [];
//   const lastRow = matrix.length - 1;
//   const lastColumn = matrix[0].length - 1;

//   for (let column = 0; column <= lastColumn; column += 1) {
//     let newRow = [];

//     for (let row = 0; row <= lastRow; row += 1) {
//       newRow.push(matrix[row][column]);
//     }
//     // debugger;
//     transposedArray.push(newRow);
//   }
//   return transposedArray;
// }

const transpose = function (matrix) {
    return matrix[0].map((_, column) => {
      const newRow = [];

      matrix.forEach((_, row) => {
        newRow.push(matrix[row][column]);
      })

      return newRow;
    })
};



var matrix = [
  [1, 5, 8, 9],
  [4, 7, 2, 3],
  [3, 9, 6, 7]
];


var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// const matrix = [
// [true, true, true],
// [false, false, false],
// [true, true, true]
// ];

// var newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[true, false, true], [true, false, true], [true, false, true]]
// console.log(matrix);         // [true, true, true], [false, false, false], [true, true, true]]
