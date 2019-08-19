/*
input: 1. a string 2. a number of rails
output: an encoded string
rules:
  spaces and punctuation are stripped
  each successive character in input is assigned to a rail
    starting at 0
    up to rails number - 1
    back to 0
  etc until the last character is reached
  then the chars on each successive rail are joined
  and the resulting string is returned

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

data structure:
  array of arrays where subarrays contain single string chars eg [[e, r, t, e, r], [d,df], [erter]]

algorithm:
  strip input of spaces and punctuation
  split input to an array of chars on empty space
  initialiize a result array of rails number of empty strings
    length of array of chars is length of oscillating array
    rails number is rails - 1
  step through the char array by index
  concatenate each char to one of the empty strings based on oscillating value at the same index

  join result array on empty spaces and return

*/

const initializeResult = function (rails) {
  return Array(rails).fill('')
}

const generateOscillator = function(length, maximum) {
  if(maximum === 0) { return Array(length).fill(0); };

  let modifier = 1;
  const result = [];
  let rail = 0;

  for(let i = 0; i < length; i += 1) {
    if (rail === maximum || (rail === 0 && result[result.length -1] === 1)) { modifier = -modifier }
    result.push(rail);
    rail += modifier;
  }
  return result;
}


const railCipher = function (cipherText, rails) {
  const result = initializeResult(rails);
  const strippedChars = cipherText.replace(/[^a-z]/gi, '').split('');
  const oscillator = generateOscillator(strippedChars.length, rails - 1);

  strippedChars.forEach((char, index) => {
    result[oscillator[index]] += char;
  });

  return result.join('');
}

// console.log(railCipher('WE ARE DISCOVERED FLEE AT ONCE', 3));//'WECRLTEERDSOEEFEAOCAIVDEN'
// console.log(railCipher('', 4)); //''
// console.log(railCipher('One rail, only one rail', 1)); //'One rail, only one rail',
// console.log(railCipher('XOXOXOXOXOXOXOXOXO', 2)); //'XXXXXXXXXOOOOOOOOO',
// console.log(railCipher('EXERCISES', 4)); //'ESXIEECSR',
// console.log(railCipher('More rails than letters', 24)); //'More rails than letters',


/*
input: 1. a string of encoded alpha characters 2. a number of rails
output: a string of decoded characters
rules:

0 1 2 3 4 5    % 1

 0 2 4  % 2
  1 3

  0       4       8       12  % 4
  W . . . E . . . C . . . R . . . L . . . T . . . E\
   1   3   5   7   9   11  13
.  E . R . D . S . O . E . E . F . E . A . O . C .
     2       6       10      14
 . . A . . . I . . . V . . . D . . . E . . . N . .

w     i % 6
 e   d
  a e
   r

1 1
2 2
3 4
4 6

  0000000 7
  111111111111 12
  222222 6
  WECRLTE
  ERDSOEEFEAOC
  AIVDEN

  weared

  push the letters back into the rails (reconstruct the rails)
  read the first letter from each rail in a cycle
    first letter in rail 0, 1, 2,
    second letter in rail 0, 1 ,2

  the index of
data structure:
  array

algorithm:
  generate a sorted array of the oscillation that encoded the text [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2 ]
  initialize an array of empty arrays to push to [[], [], []]
    rails number of subarrays
  split the text into n subarrays based on their rail number from above array
    push each character to the subarray, so you have a nested array of rails number of subarrays where
    each subarray contains individiual characters for elements [[W, E, C, R, L, T, E], [ERDSOEEFEAOC], [AIVDEN]
  set a result string;
  following the original oscillation, select characters from those subarrays and concatenate onto  [ 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0 ]
    for each index in oscillation array
      concatenate the return of shifting a character off of the character subarray at that oscillation index to the result string
    return the result string;


*/

const initializeRails = function (rails) {
  const railsArray = [];
  for(let i = 1; i <= rails; i += 1) {
    railsArray.push([]);
  }
  return railsArray;
}

const railCipherDecode = function (encodedText, rails) {
  const oscillator = generateOscillator(encodedText.length, rails - 1);
  const sortedOscillator = oscillator.slice().sort();
  const filledRails = initializeRails(rails);
  const encodedChars = encodedText.split('');
  let decodedText = '';

  sortedOscillator.forEach( (rail, index) => filledRails[rail].push(encodedChars[index]) );
  oscillator.forEach( rail => decodedText += filledRails[rail].shift() );

  return decodedText;
}


console.log(railCipherDecode('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // 'WE ARE DISCOVERED FLEE AT ONCE'
console.log(railCipherDecode('ABCDEFGHIJKLMNOP', 1)); //  'ABCDEFGHIJKLMNOP',
console.log(railCipherDecode('XXXXXXXXXOOOOOOOOO', 2)); //  'XOXOXOXOXOXOXOXOXO',
console.log(railCipherDecode('TEITELHDVLSNHDTISEIIEA', 3)); //  'THEDEVILISINTHEDETAILS',
