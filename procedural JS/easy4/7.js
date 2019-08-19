// another for loop!  #*&^!!$

function multiplyList(numbers1, numbers2) {
  var result = [];
  var i;

  for (i = 0; i < numbers1.length; i += 1) {
    result.push(numbers1[i] * numbers2[i]);
  }

  return result;
}


//  map with arrow function as a callback

function multiplyList(array1, array2) {
  return array1.map((element, index) => array1[index] * array2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
