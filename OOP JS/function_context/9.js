var greeter = {
  name: 'Naveed',
  greeting: 'Hello',
  message: function () {
    return (this.greeting + ' ' + this.name)
  },
  sayGreetings: function() {
    console.log(this.message());
  }
};

greeter.sayGreetings();
console.log(name);