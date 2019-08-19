var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// When the value 7, referenced by the global variable a, is passed as an argument to the function on line 7,
//  Numbers are immutable, so any  operation on a inside the function has no effect on the value pointed to by
// a. So, line 8 logs 7

