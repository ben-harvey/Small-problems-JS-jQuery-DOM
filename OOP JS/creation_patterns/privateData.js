// in this code, the init function closes over the secret variable in the outer function scope
// however, all instances share this closure, so if it's reassigned by calling init again, it
// changes for all instances
// this is similar to a private class variable in Ruby
// pro:  methods are defined on the prototype
/// cons: data is shared among the prototypes

let makeFoo = (function () {
  let secret;
  return {
    init: function(word) {
      secret = word;
      return this;
    },
    logSecret: function () {
      console.log(secret);
    },
  };
})();

foo = Object.create(makeFoo).init('foo');
foo.logSecret(); // foo
rat = Object.create(makeFoo).init('rat');
rat.logSecret(); // rat
foo.logSecret(); // rat


// --------------------------------------------------------------------------------


// each instance has its own copy of logSecret, which has closed over its own version of secret
// pro:  instances don't share a copy of private data
// con: method is defined on instances, not on prototype
makeFoo = (function () {
  return {
    init: function(secret) {
      this.logSecret = function () {
        console.log(secret);
      }
      return this;
    },
  };
})();

foo = Object.create(makeFoo).init('foo');  // returns an object that is prototype
foo.logSecret();
rat = Object.create(makeFoo).init('rat');  // returns an object that is prototype
rat.logSecret();
foo.logSecret();

// --------------------------------------------------------------------------------
// this code uses an object to keep track of the private state of each instance. This object is accessed through
// a closure by each instance.  The keys to the shared object are defined directly on each instance.
//

makeFoo = (function () {
  const data = {};
  return {
    init: function(secret, id) {
      this.id = id;
      data[id] = { secret };
      return this;
    },
    logSecret: function () {
      console.log(data[this.id].secret);
    },
  };
})();

foo = Object.create(makeFoo).init('foo', 1);  // returns an object that is prototype
foo.logSecret();
rat = Object.create(makeFoo).init('rat', 2);  // returns an object that is prototype
rat.logSecret();
foo.logSecret();
