function countOccurrences(array) {
  var result = {};

  array.forEach((el) => {

    if (result[el]) {
      result[el] += 1
    } else {
      result[el] = 1
    }
  })

  for(const vehicle in result) {
    console.log(`${vehicle} => ${result[vehicle]}`);
  }
}

console.log(el)

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

/* when the function is executed on line 22, the vehicles array is passed in to the function
and assigned to the local variable array. line 2 sets an empty result object.  On line 4,
the array.forEach method is called on the array referenced by lv array, and is passed a
callback function in the form of an anonymous arrow function. forEach passes each element
of the calling array in turn to the arrow function, where it's assigned to the lv el.
Inside that arrow function is an if..else statement, the if condition checks if the name el
is present in the result object using bracket notation.  This will evaluate to either
a string, a truthy value ( assuming no empty strings as names), or undefined (a falsy value)
 if the name isn't present.  On line 7 if the key of el is present in result, its value
 is incremented by one.  otherwise the else condition is executed and a key of el is created
 in result and its value is set to 1.
 after building the result object, on line 13 the for..in loop iterates over the properties
 in the result object  (including the object's prototype chain) and yields each to the block
 in turn, referenced by the local var vehicle. line 14 logs the nae of each property and its
 value.

 This code demonstrates how to add and access properties in an array, how to iterate over
 objects using two methods-- the forEach looping cons

*/