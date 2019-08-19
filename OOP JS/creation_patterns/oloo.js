// takes arguments as follows:
// prototype: an object
// ownProperties: an array of property names
// behavior:  an object

const makeLinkedObject = function (prototype, ownProperties, behavior) {
  var self = Object.create(prototype);

  self.init = function (...arguments) {
    const ownPropertiesIndex = -ownProperties.length;
    const prototypeArguments = arguments.slice(0, ownPropertiesIndex);
    const ownArguments = arguments.slice(ownPropertiesIndex);

    ownProperties.forEach((property, index) => this.property = ownArguments[index]);
    return prototype.init.apply(this, prototypeArguments)
  };

  Object.assign(self, behavior);

  return self;
};

const Person = {
  init: function(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    return this;
  },
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  communicate: function () {
    console.log('communicate');
  },
  eat: function () {
    console.log('eat');
  },
  sleep: function () {
    console.log('sleep');
  },
};

var person = Object.create(Person).init('foo', 'bar', 21, 'gender');

// console.log(Person.isPrototypeOf(person));     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

const doctorBehavior = {
  diagnose: function () {
    console.log('diagnose');
  },
};

const professional = {
  invoice: function () {
    console.log('invoice');
  },
  payTax: function () {
    console.log('payTax');
  },
}

var Doctor = makeLinkedObject(Person, ['profession'], doctorBehavior);
var doctor = Object.create(Doctor).init('hobar', 'smith', 21, 'gender', 'Pediatrics');

// for each behavior, give the object a function of the same name as the module function
// within that function, call the module function in the context of the object.

//methods from the mixin use state from the object they are being called on and call on other methods on the object they are mixed in to.
//
const extend = function (object, mixin) {
  Object.keys(mixin).forEach(method => {
    object[method] = function (...args) {
      mixin[method].apply(this, args)
    }
  });
}

extend(doctor, professional);

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();

console.log(Doctor.isPrototypeOf(doctor));     // logs true
console.log(Person.isPrototypeOf(doctor));     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

const studentBehavior = {
  study: function () {
    console.log('study');
  },
};

var Student = makeLinkedObject(Person, ['degree'], studentBehavior);

var student = Object.create(Student).init('jill', 'stein', 21, 'gender', 'BS Industrial Engineering');
// // logs true for next three statements
console.log(Student.isPrototypeOf(student));     // logs true
console.log(Person.isPrototypeOf(student));     // logs true
student.eat();                     // logs 'Eating'
student.communicate();             // logs 'Communicating'
student.sleep();                   // logs 'Sleeping'
console.log(student.fullName());   // logs 'foo bar'
student.study();                   // logs 'Studying'

const gradStudentBehavior = {
  research: function () {
    console.log('research');
  },
};

var GraduateStudent = makeLinkedObject(Student, ['graduateDegree'], gradStudentBehavior);

var graduateStudent = Object.create(GraduateStudent).init('Tommy', 'Jarrell', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');

// // logs true for next three statements
console.log(Student.isPrototypeOf(graduateStudent));     // logs true
console.log(Person.isPrototypeOf(graduateStudent));     // logs true
console.log(GraduateStudent.isPrototypeOf(graduateStudent));     // logs true
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
