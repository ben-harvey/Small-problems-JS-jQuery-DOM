/*
input: an integer rep number of switches
output: an array rep 1-indexed list of lights that are on after n repetitions
rules:
  all lights are initially off
  each pass down the switches starts at 1 and ends at input
  each successive pass flips switches that are modulo 0 that pass
    eg 1st pass
    1 % 1 === 0 flip
    2 % 1 === 0 flip
    etc
    2nd pass
    1 % 2 === 1 no flip
    2 % 2 === 0 flip

    the number of passes and number of switches are the same

  Start:
    [off off off off off]

  Round 1: all lights are on
    [on on on on on]

// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
    [on off on off on]
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
    [on off off off on]
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
    [on off off on on]
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
    [on off off on off]

  return [1, 4]
data structure:
  array: index access. but!  O index means likely off-by-one error
  object:  each light is associated with a state
    good match for key: value pair
      light number for key
      boolean for value
        boolean is easy to toggle
algorithm:
  initialize an object with keys from 1 to input and values of false
    set an empty object
    loop from 1 to <= input
    create an kv pair with key of current number and value of false

  from 1 up to input, inclusive:
     key % the current pass === 0
    from 1 up to input, inclusive
      result[switch] = !result[switch] if switch % pass === 0
  get an array of keys whose values are true
    get array of keys with Object.keys
    filter that array by looking up value of key inside callback and returning trues only
  return that array
*/

const initializeSwitches = function (numberOfSwitches) {
  const bankOfSwitches = {};
  for(let i = 1; i <= numberOfSwitches; i += 1) {
    bankOfSwitches[i] = false;
  }
  return bankOfSwitches;
}

const indexesOfOnSwitches = function (bankOfSwitches) {
  const onSwitches = Object.keys(bankOfSwitches);
  return onSwitches.filter(switchNumber => bankOfSwitches[switchNumber])
    .map(numberString => +numberString);
}

const lightsOn = function (numberOfSwitches) {
  const bankOfSwitches = initializeSwitches(numberOfSwitches);

  for(let pass = 1; pass <= numberOfSwitches; pass += 1) {
    for(let switchNumber = 1; switchNumber <= numberOfSwitches; switchNumber += 1) {
      if (switchNumber % pass === 0) { bankOfSwitches[switchNumber] = !bankOfSwitches[switchNumber]}
    }
  }
  return indexesOfOnSwitches(bankOfSwitches);
}


console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
