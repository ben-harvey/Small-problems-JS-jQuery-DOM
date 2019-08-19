var limit;
do {
  limit = parseInt(prompt("Please enter an integer greater than 0:"), 10) || 0
} while (limit <= 0 || typeof limit !== 'number')

var operator;
do {
operator = prompt('Enter "s" to compute the sum, or "p" to compute the product.').toLowerCase();
} while (!['s', 'p'].includes(operator))

var operatorWord;
var result;

if (operator === 's') {
  operatorWord = 'sum';
  result = 0;

  for (var i = 1; i <= limit; i += 1) {
    result += i;
  }
}

if (operator === 'p') {
  operatorWord = 'product';
  result = 1;
  for (var i = 1; i <= limit; i += 1) {
    result *= i;
  }
}

console.log(`The ${operatorWord} of the integers between 1 and ${limit} is ${result}.`);