function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2); // evaluates to undefined * undefined, returns NaN
  return result;
}

function total(numbers) {
  var sum; // no value, so on line 12 evaluates to undefined + numbers[i] = NaN
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum; // missing an explicit return here, so returns undefined
}

console.log(productOfSums([1, 2], [3, 4]));