const Account = (function () {
  const validPassword = function (password) {
    return (password === userpassword)
  }

  const anonymize = function () {
    let random = function () {
      return Math.floor(Math.random() * 25);
    }
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let result = ''
    for (let i = 1; i <= 16; i += 1) {
      result += letters[random()];
    }
    return result;
  };

  return {
    init: function (email, password, firstName, lastName) {
      useremail = email;
      userpassword = password;
      userfirstName = firstName;
      userlastName = lastName;
      this.returnPassword =  function () {
        return password;
      };
      this.displayName = anonymize();
      return this;
    },
    firstName: function(password) {
      if (validPassword(password)) {
        return userfirstName;
      } else {
        return 'Invalid Password'
      }
    },
    lastName: function(password) {
      if (validPassword(password)) {
        return userlastName;
      } else {
        return 'Invalid Password'
      }
    },
    email: function(password) {
      if (validPassword(password)) {
        return useremail;
      } else {
        'Invalid Password';
      }
    },
    reanonymize: function (password) {
      if (validPassword(password)) {
        this.displayName = anonymize();
      } else {
        'Invalid Password';
      }
    },
    resetPassword: function (oldPassword, newPassword) {
      if (validPassword(oldPassword)) {
        userpassword = newPassword;;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
  }
}())


var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// var quzBaz = Object.create(Account).init('foo@bar.com', '987654', 'foo', 'bar');
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';

// var displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false