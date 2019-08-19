const animalClassifications = {
'Vertebrate':  ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
'Warm-blooded':  ['Bear', 'Whale', 'Ostrich'],
'Cold-blooded':  ['Salmon', 'Turtle'],
'Mammal':  ['Bear', 'Whale'],
'Bird':  ['Ostrich'],
}

Object.defineProperty(animalClassifications, 'name', {
enumerable: false,
value: 'Classifications',
});

const animals = {
  'Bear':  ['Vertebrate', 'Warm-blooded', 'Mammal'],
'Turtle':  ['Vertebrate', 'Cold-blooded'],
'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
'Salmon':  ['Vertebrate', 'Cold-blooded'],
'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
}

Object.defineProperty(animals, 'name', {
enumerable: false,
value: 'Animals',
});


document.addEventListener('DOMContentLoaded', function () {
  const classificationsDropdown = document.querySelector('#animal-classifications');
  const animalsDropdown = document.querySelector('#animals');
  const clearButton = document.querySelector('button');

  const dropDowns = [classificationsDropdown, animalsDropdown];
  const objects = [animalClassifications, animals];

  const addOption = (optionName, target) => {
    const newOption = new Option(optionName, optionName);
    target.add(newOption);
  }

  dropDowns.forEach((dropdown, index) => {
    const otherIndex = Math.abs(index -1 );

    dropdown.addEventListener('change', function (event) {
      const newValue = event.target.value;
      const newOptions = objects[index][newValue];
      dropDowns[otherIndex].options.length = 0;
      newOptions.forEach(optionString => addOption(optionString, dropDowns[otherIndex]) )
    });
  });

  clearButton.addEventListener('click', function (event) {
    event.preventDefault();
    dropDowns.forEach((dropdown, index) => {
      dropdown.options.length = 0;
      const associatedObject = objects[index];
      const newSelectedOption = new Option(associatedObject.name, associatedObject.name);
      dropdown.add(newSelectedOption);
      Object.keys(associatedObject).forEach(key => addOption(key, dropdown));
    });
  });
});