/*
input:
output:
rules:

algorithm:
    map to an array like [{id: 101, quantity: -1}]
    if quantity is >= 0, return

    reduce array of objects
    initial value is 0
    if movement is 'in', add
    if 'out', subtract
    return sum
*/

const transactionsFor = function (id, transactions) {
    return transactions.filter( (transaction) => transaction.id === id);
}

const findQuantity = function (transactions) {
    return transactions.reduce( (sum, entry) => {
        if (entry.movement === 'in') return sum + entry.quantity;
        return sum - entry.quantity;
    }, 0);
}

const isItemAvailable = function (id, transactions) {
    const transactionsForId = transactionsFor(id, transactions);
    return findQuantity(transactionsForId) > 0;
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(findQuantity(transactionsFor(101, transactions)));

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true