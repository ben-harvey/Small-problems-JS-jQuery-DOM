// original function

// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

// invoiceTotal(20, 30, 40, 50);          // works as expected
// invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

// ES6 solution

// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   var adder = function (a, b) { return a + b }
//   args = Array.from(arguments);
//   console.log(args.reduce(adder));
// }

// ES5 solution
function invoiceTotal() {
  var sum = 0;
  var i;
  for (i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }

   console.log(sum);
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?