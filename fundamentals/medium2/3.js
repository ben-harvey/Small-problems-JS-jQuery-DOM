var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 5 + (5 * 7)  40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));  // 10 + (5 * 7 ) 45


// this code demonstrates the concept of closures.  when totalPayable is initialized, the
// variable startingBalance is in an enclosing (global) scope, so the function can access
// its value.  Therefore even if the value ref by startingBalance variable is changed,
// each time the function is called that value is looked up and updated.

// this code demonstrates an unpure function:: given the same input, the function returns
// two different values because it references a variable outside the function that impacts
// the return value of the function