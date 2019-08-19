/*
input: nested array
output: array
rules:
  element[0] is string
  element[1] is count

algorithm:
  for each subarray
  create [apple, apple, apple] from [apple, 3]

  integer times, add string to result
  return result

  times
    input: an integer and a function
    output: n/a
    side effect: do function integer times

  flatten and return
*/

const times = function (number, object, arg) {
  for (var i = 0; i < number; i++) {
    object.push(arg)
  }
  return object;
}

const buyFruit = function (fruits) {
  const bumpy = fruits.map( (fruit) => times(fruit[1], [], fruit[0]) );
  return [].concat(...bumpy);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


