var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This code will log 'This is local' to the console.  On line 1, myVar is declared and assigned in the global
//  scope.  Then, on line 4, a variable with the same name, but with local function scope, is declared
// and assigned.  The local variable shadows the global variable-- inside the function's scope, it can only
// 'see' the local myVar, so that's what's logged on line 5