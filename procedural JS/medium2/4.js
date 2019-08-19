/*
input: an unsorted array
output: the same array, sorted
rules:
  array is mutated (sorted in place)
  input length always > 1
  input can be numbers or strings (other?)
bubble sort rules:
  compare pairs of elements from start to end of array
  if first is greater than second, swap
  when end is reached, start over unless no swap was made
  if no swap, array is sorted
  each pass always deposits greatest value in last position
algorithm:
  set swapped equal to false for each iteration
  set last index equal to array length - 1
  starting at index 0 up to last index var
    compare el at 0 to index at 1
    if 0 > 1
      swap
        eg 0 1
        set placeholder
        placeholder = arr[0]
        arr[0] = arr[1]
        arr[1] = placeholder
      set swapped equal to true
      advance index
    else
      advance index
  reduce last index by one to optimize algorithm
  if swapped is true
    repeat
  else
    break and return mutated array
*/
const swap = function (array, indexOne, indexTwo) {
  const placeholder = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = placeholder;
}

const bubbleSort = function (array) {
  let lastIndex = array.length - 1;
  let swapped = true;

 while (swapped === true) {
    swapped = false;

    for (let i = 0; i < lastIndex; i += 1) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }

    }
     lastIndex -= 1;
  };

 // do  {
 //    swapped = false;

 //    for (let i = 0; i < lastIndex; i += 1) {
 //      if (array[i] > array[i + 1]) {
 //        swap(array, i, i + 1);
 //        swapped = true;
 //      }

 //    }
 //     lastIndex -= 1;
 //  } while (swapped === true);

}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// const bigArray = [...Array(999999).keys()].reverse();
// bubbleSort(bigArray)
// console.log(bigArray)
