// function sequence(limit) {
//   const result = [];
//   for(let i = 1; i <= limit; i += 1) {
//     result.push(i);
//   }
//   return result;
// }



const sequence = (limit) => [...Array(limit + 1).keys()].slice(1);

// constructor syntax creates an Array with 10 undefined values
// keys method returns an iterator object of keys
// spread operator expands that iterator into the array that's returned
//

console.log(sequence(5));