var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);


// Mutable objects are passed by reference to a function.  So, on line 4, the function local variable b is
// referencing the same object as the global variable a.  Therefore, line 4 mutates the original object.
// line 8 logs [1, 2, 10]