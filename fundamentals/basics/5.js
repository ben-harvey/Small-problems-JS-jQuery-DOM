// var number1 = parseInt(prompt('Enter the first number:'), 10);
// var number2 = parseInt(prompt('Enter the second number:'), 10);

number1 = '23'
number2 =  '17'

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));


// for math operators other than +, JS coerces the string values returned by the prompt method
// into Number objects.  For +, if 1 or more of the operands is a string, JS coerces the others
// into String objects and performs concatenation on them.  We can explicity coerce the strings
// into Numbers with the parseInt() function to get the intended result with addition.

console.log(typeof (1 + '1')) // string
console.log(typeof (1 + 1)) // number
console.log(typeof (1 + parseInt('1', 10))) // number
