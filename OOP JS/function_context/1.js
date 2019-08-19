
func =  function () {
    return {
    firstName: 'Rick ',
    lastName: 'Sanchez',
    fullName: this.firstName + this.lastName,
    }
  }

person = {
  func: func,
}



bound = (func.bind(person))
console.log(bound());

// outside a function, this is the global object
// in a function call, this is the global object
// in a method call, this is the calling object (except for inner functions)