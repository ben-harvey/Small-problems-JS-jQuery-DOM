
function showMultiplicativeAverage(array) {
  var product = array.reduce((a, b) => { return a * b});
  return (product / array.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"