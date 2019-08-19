var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// This code demonstrates that globally scoped variables are accessible in the inner scope of a function.
// JS first looks for a locally scoped myVar, and not finding one, looks in the next outer scope. If finds
// the globally scoped myVar and logs it.