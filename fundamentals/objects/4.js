var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
// on line 9, a name of the string '456'(referenced by the local
// variable prop2) is given a value of '678'
// So, line 11 logs '678'
console.log(myObject.prop2);
// on line 3, the name string 'prop2' is given the value '234'
// on line 8, the value associated with 'prop2' is reassigned to '456'
// that is the value logged on line 15


// FE _---------------

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // { 'funcProp': 'hello'}
myObj[myFunc()] = 'world!';
console.log(myObj); //{ 'funcProp': 'world!'}

// on line 21, the name is equal to the return value of the
//myFunc function, namely the string 'funcProp'. So, the name
// 'funcProp' is assigned the value 'hello, '
// on
