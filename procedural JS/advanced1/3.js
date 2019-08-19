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

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]