var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);
// these are retrieving the functions from the object, but not calling them.
// we will get the string representation of the function concatenated with a space

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName() + ' ' + person.lastName()); // Victor Reyes