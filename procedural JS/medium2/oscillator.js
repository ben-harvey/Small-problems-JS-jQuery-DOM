let modifier = -1;
const result = [0];
let n = 1;

for (let i = 0; i < 10; i += 1) {
  if (result[i] >= n - 1) {
    modifier = -modifier
  }
  if (result[i] <= 0) {
    modifier = -modifier
  }

  result.push(result[i] + modifier)
}

console.log(result);