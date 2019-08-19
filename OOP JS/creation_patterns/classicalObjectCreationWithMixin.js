const Person = function(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.eat = function () {
  console.log('eating');
}

Person.prototype.communicate = function () {
  console.log('communicating');
}

Person.prototype.sleep = function () {
  console.log('sleeping');
}

Person.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
}

const Doctor = function (firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

debugger;

Doctor.prototype = Object.create(Person.prototype) //
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function () {
  console.log('diagnosing');
}

const Student = function (firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log('studying');
}

const Professor = function (firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
};


const GraduateStudent = function (firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function () {
  console.log('researching');
}


const extend = function (target, source) {
  for (let property in source) {
    if (source.hasOwnProperty(property)) {
      target[property] = function (...args) {
        return source[property].call(this, ...args)
      };
    };
  };

  return target;
};

// // extend iterates through the properties in the source object. for each property, it makes sure the property is
// // defined on the object itself and not higher on the prototype chain. Then it gets the prototype object of the source,
// // and defines a method on it with the same name as the current target property. the method returns the result of calling
// // the source method with the context of the current target object and the current arguments

// function delegate(callingObject, methodOwner, methodName) {
//   var args = Array.prototype.slice.call(arguments, 3)
//   return function() {
//     return methodOwner[methodName].apply(callingObject, args);
//   };
// }

// // slices off any additional arguments and stores them in args.  returns a function which returns the result of
// // calling the methodOwner's methodName with the context of the callingObject, passing in args

// function extend(object, mixin) {
//   var methodNames = Object.keys(mixin);

//   methodNames.forEach(function(name) {
//     object[name] = delegate(object, mixin, name);
//   });

//   return object;
// }
//  iterates over the properties of the mixin using Object.keys (makes sure that properties up the prototype chain are
// not included).  for each property, it creates a new property on the target object equal to the result of calling delegate

const professional = {
  invoice: function (customer) {
    console.log(this.fullName() + ' is billing ' + customer);
  },
  payTax: function () {
    console.log(this.fullName() + ' is paying taxes');
  },
}

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

var doctor2 = new Doctor('hoo', 'bazd', 23, 'male', 'Obstetrics');

// doctor2.invoice('ghostface killa')

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice('homeslice');                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'