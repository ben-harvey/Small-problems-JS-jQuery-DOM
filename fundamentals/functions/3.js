var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This time, line 8 will log 'this is local'.  On line 4, a global variable is declared and assigned.
// Variables in the global scope are accessible in a function's inner scope.  On line 7, the execution of
// someFunction sends control flow to line 4. On line 4, the global variable myVar is reassigned to the
// new string value, which is then logged on line 8.