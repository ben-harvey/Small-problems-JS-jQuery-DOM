var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// Same as 6.js, even though the parameter name is the same as the global variable name, numbers are immutable
// so any operation on them returns a new value and doesn't mutate the original reference. So, line 8 logs 7
// Also demonstrates variable shadowing.
