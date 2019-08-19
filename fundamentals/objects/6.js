var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(average(myArray));

// the array's length property is two, since indexes which are less than 0 are not counted
// (array length is one plus the greatest valid index)
// so, iterating through the array from -2 to 1, the value ref by sum will be 20, and
// 20/ 2 = 10, not 5