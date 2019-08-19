function interleave(array1, array2) {
  var result = [];
  for (var i = 0; i < array1.length; i++) {
    // result.push(array1[i]);
    // result.push(array2[i]);

    // refactor to pass multiple arguments to push
    result.push(array1[i], array2[i]);
  }
  return result;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]