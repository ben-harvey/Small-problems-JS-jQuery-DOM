function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

//  This demonstrates that variables declared without the var keyword default to a global scope. Even though
// on line 4 the variable declaration occurs in the inner scope of the function, the variable is a property
// of the global object
// and is accessible to the call to console.log on line 6. Unintentional use of this pattern could result in
// bugs and it's better to declare variable scope explicitly in order to avoid this.