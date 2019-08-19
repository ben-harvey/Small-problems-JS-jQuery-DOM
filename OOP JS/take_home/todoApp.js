const TodoCreator = (function() {
  let id = 0;

  const assignId = function() {
    const newId = id;
    id += 1;
    return newId;
  };

  return {
    init: function(title, month, year, description) {
      this.title = title;
      this.month = month;
      this.year = year;
      this.description = description;
      this.id = assignId();
      this.completed = false;
      return this;
    },
    isWithinMonthYear: function(month, year) {
      return this.month === month && this.year === year;
    },
  };
})();

const TodoList = (function() {
  let collection = [];
  const invalidIdObject = { invalidId: true };

  const getTodo = function(id) {
    return collection.filter(todo => todo.id === id)[0];
  };

  return {
    idIsInvalid: function(testId) {
      return !collection.map(todo => todo.id).includes(testId);
    },
    getCollectionCopy: function() {
      return collection.map(todo => this.getTodoCopy(todo.id));
    },
    getTodoCopy: function(id) {
      const currentTodo = collection.filter(todo => todo.id === id)[0] || invalidIdObject;
      const todoCopy = {};
      Object.keys(currentTodo).forEach(property => {
        todoCopy[property] = currentTodo[property];
      });
      return todoCopy;
    },
    add: function(todoData) {
      const todoValues = Object.values(todoData);
      const newTodo = Object.create(TodoCreator).init(...todoValues);
      collection.push(newTodo);
      return this.getTodoCopy(newTodo.id);
    },
    delete: function(id) {
      if (this.idIsInvalid(id)) { return invalidIdObject };
      const deletedTodo = getTodo(id);
      collection = collection.filter(todo => todo.id !== id);
      return deletedTodo;
    },
    initialize: function(todoSet) {
      todoSet.forEach(todoData => this.add(todoData));
      return this.getCollectionCopy();
    },
    update: function(id, updateData) {
      if (this.idIsInvalid(id)) { return invalidIdObject };
      const currentTodo = getTodo(id);
      Object.keys(updateData).forEach(property => {
        currentTodo[property] = updateData[property];
      });
      return this.getTodoCopy(currentTodo.id);
    },
    getWithinMonthYearCopy: function(month, year) {
      withinMonthYear = collection.filter(todo => {
        return todo.isWithinMonthYear(month, year);
      });
      return withinMonthYear.map(todo => this.getTodoCopy(todo.id));
    },
  };
})();

const TodoManager = {
  init: function(todoList) {
    this.todoList = todoList;
  },
  all: function(argument) {
    return this.todoList.getCollectionCopy();
  },
  completed: function() {
    return this.todoList.getCollectionCopy().filter(todo => {
      return todo.completed === true;
    });
  },
  allWithinMonthYear: function(month, year) {
    return this.todoList.getWithinMonthYearCopy(month, year);
  },
  allCompletedWithinMonthYear: function(month, year) {
    return this.todoList.getWithinMonthYearCopy(month, year).filter(todo => {
      return todo.completed === true;
    });
  },
};



// ------------------------------------------------------------------------------------
//            Tests (all should log true)
// ------------------------------------------------------------------------------------



// Utility methods

// tests for shallow object equality
const testTodoObjectEquality = function(firstObject, secondObject) {
  const firstObjectKeys = Object.keys(firstObject);
  return firstObjectKeys.every(key => {
    return firstObject[key] === secondObject[key]
  });
};

// tests to see if reassignment mutates the original collection
const testForCopy = function(object, property, testValue, expectedValue) {
  console.log(object[property] === expectedValue);
  object.property = testValue;
  console.log(object[property] === expectedValue);
};





// ------------------ TodoList -------------------




// * todo collection can't be accessed directly
const testList = TodoList;
console.log(testList.collection === undefined); // true

// * invalidId() returns false if a collection doesn't contains a todo with the given id
console.log(testList.idIsInvalid(9) === true);

// * getCollectionCopy() returns an empty array for an empty collection
console.log(testList.getCollectionCopy().length === 0); // true

// * getTodo method is private to todoList
try {
  testList.getTodo(2);
} catch (error) {
  console.log(error.name === 'TypeError'); // true
}

// * todoList initializes a collection with n objects

var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

// * initialize() returns an empty collection with empty input;

let todoSet = [];
const emptyInitializer = testList.initialize(todoSet);
console.log(emptyInitializer.length === 0); // true

// initialize() creates a todo item for each object in the passed in array

todoSet = [todoData1, todoData2, todoData3, todoData4];

const nonEmptyInitializer = testList.initialize(todoSet);
TodoManager.init(testList);

let allTodos = TodoManager.all();

let testData = [
    {
    title: 'Buy Milk',
    month: '1',
    year: '2017',
    description: 'Milk for baby',
    id: 0,
    completed: false
  },
  {
    title: 'Buy Apples',
    month: '',
    year: '2017',
    description: 'An apple a day keeps the doctor away',
    id: 1,
    completed: false
  },
  {
    title: 'Buy chocolate',
    month: '1',
    year: '',
    description: 'For the cheat day',
    id: 2,
    completed: false
  },
  {
    title: 'Buy Veggies',
    month: '',
    year: '',
    description: 'For the daily fiber needs',
    id: 3,
    completed: false
  },
];

testData.forEach((_, index) => {
  console.log(testTodoObjectEquality(allTodos[index], testData[index])); // true 4 times
});

// initialize() returns a copy of the initialized collection

testData.forEach((_, index) => {
  console.log(testTodoObjectEquality(nonEmptyInitializer[index], testData[index])); // true 4 times
});

// initialize() returns a copy of the added todo and not the todo itself

testForCopy(nonEmptyInitializer[0], 'completed', true, false); // true

// * getTodoCopy returns a copy of a todo based on id

console.log(testTodoObjectEquality(testData[3], testList.getTodoCopy(3))); //true

// * getTodoCopy() returns invalid object if id is invalid

console.log(testList.getTodoCopy(9).invalidId === true); // true

// * todolist updates a specific todo

const updatedTodo = testList.update(0, { completed: true });
console.log(testList.getTodoCopy(0).completed === true); // true

// * update() returns invalid object if id is invalid

console.log(testList.update(9).invalidId === true); // true

// * update() returns todo object if id is valid

const updatedTodoData = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
  id: 0,
  completed: true
};

console.log(testTodoObjectEquality(updatedTodo, updatedTodoData)); // true

// update() returns a copy of the added todo and not the todo itself

testForCopy(updatedTodo, 'id', 999, 0); // true

// * todoList adds a todo based on a todoData object;

var todoData = {
  title: 'Buy Eggs',
  month: '1',
  year: '2017',
  description: 'Eggs for omlette',
};

const addedTodo = testList.add(todoData);

var newTestData = {
  title: 'Buy Eggs',
  month: '1',
  year: '2017',
  description: 'Eggs for omlette',
  id: 4,
  completed: false,
};

console.log(TodoManager.all().length == 5); // true
const lastAddedTodo = TodoManager.all().slice(-1)[0];
console.log(testTodoObjectEquality(newTestData, lastAddedTodo)); // true

// add() returns a copy of the added todo

console.log(testTodoObjectEquality(newTestData, addedTodo)); // true

// add() returns a copy of the added todo and not the todo itself

testForCopy(addedTodo, 'completed', true, false); // true

// * todoList deletes a todo based on id

const deletedTodo = testList.delete(4);
console.log(TodoManager.all().length === 4); // 4
testData.forEach((_, index) => {
  console.log(testTodoObjectEquality(allTodos[index], testData[index])); // true 4 times
});

// * delete() returns invalid object if id is invalid

console.log(testList.delete(9).invalidId === true); // true

// * delete() returns todo object if id is valid

const deletedTodoData = {
  title: 'Buy Eggs',
  month: '1',
  year: '2017',
  description: 'Eggs for omlette',
  id: 4,
  completed: false
};

console.log(testTodoObjectEquality(deletedTodo, deletedTodoData)); // true

// * the todo returned by getTodoCopy() is a copy of a todo and not the todo itself

testForCopy(testList.getTodoCopy(1), 'completed', true, false); // true

// * the todo returned by getCollectionCopy() is a copy of a todo and not the todo itself

testForCopy(testList.getCollectionCopy()[1], 'completed', true, false) // true

// * getWithinMonthYearCopy() returns an empty array if no matching todos

console.log(testList.getWithinMonthYearCopy('12', '1801').length === 0)


// ------------------ TodoManager -------------------




// reset testData and testList

testData = [
  {
    title: 'Buy Milk',
    month: '1',
    year: '2017',
    description: 'Milk for baby',
    id: 0,
    completed: true
  },
  {
    title: 'Buy Apples',
    month: '',
    year: '2017',
    description: 'An apple a day keeps the doctor away',
    id: 1,
    completed: false
  },
  {
    title: 'Buy chocolate',
    month: '1',
    year: '',
    description: 'For the cheat day',
    id: 2,
    completed: false
  },
  {
    title: 'Buy Veggies',
    month: '',
    year: '',
    description: 'For the daily fiber needs',
    id: 3,
    completed: false
  },
  {
    title: 'Buy Eggs',
    month: '1',
    year: '2017',
    description: 'Eggs for omlette',
    id: 5,
    completed: true
  },
];

var todoData = {
  title: 'Buy Eggs',
  month: '1',
  year: '2017',
  description: 'Eggs for omlette',
};

testList.add(todoData);
testList.update(5, { completed: true })

// * all() returns a copy of the todo collection and not the collection itself

testForCopy(TodoManager.all()[0], 'id', 67, 0); // true

// // * completed()) returns a copy of the todo collection and not the collection itself

testForCopy(TodoManager.completed()[0], 'id', 67, 0); // true

// // * allWithinMonthYear() returns a copy of the todo collection and not the collection itself

testForCopy(TodoManager.allWithinMonthYear('1', '2017')[0], 'id', 67, 0); // true

// // * allCompletedWithinMonthYear() returns a copy of the todo collection and not the collection itself
testForCopy(TodoManager.allCompletedWithinMonthYear('1', '2017')[0], 'id', 67, 0); // true

// * TodoManager returns all todo objects

testData.forEach((_, index) => {
  console.log(testTodoObjectEquality(TodoManager.all()[index], testData[index])); // true 5 times
});

// * TodoManager returns all completed todo objects

const completedTestData = testData.filter(todo => todo.completed === true);
completedTestData.forEach((_, index) => {
  console.log(testTodoObjectEquality(TodoManager.completed()[index], completedTestData[index])); // true 2 times
});

// * TodoManager returns all todo objects within a given month-year combination

const monthYearTestData = testData.filter(todo => todo.month === '1' && todo.year === '2017');
const monthYearData = TodoManager.allWithinMonthYear('1', '2017')
monthYearTestData.forEach((_, index) => {
  console.log(testTodoObjectEquality(monthYearData[index], monthYearTestData[index])); // true 2 times
});

// * TodoManager returns all completed todo objects within a given month-year combination
const checkData = function function_name(month, year, completed) {
  return month === '1' && year === '2017' && completed === true;
}
const completedMonthYearTestData = testData.filter(todo => checkData(todo.month, todo.year, todo.completed));
const completedMonthYearData = TodoManager.allCompletedWithinMonthYear('1', '2017')
completedMonthYearTestData.forEach((_, index) => {
  console.log(testTodoObjectEquality(completedMonthYearData[index], completedMonthYearTestData[index])); // true 2 times
});



// ------------------ TodoCreator -------------------




// * TodoCreator creates a todo

testData = {
  title: 'test',
  month: '2',
  year: '1987',
  description: 'for testing',
  id: 6,
  completed: false
};

const testTodo = Object.create(TodoCreator).init('test', '2', '1987', 'for testing');
console.log(testTodoObjectEquality(testTodo, testData)); // true


// * TodoCreator creates objects with only the properties/method listed and no more

const todoProperties = ['title', 'month', 'year', 'description', 'id', 'completed'];
testTodoObjectEquality(Object.getOwnPropertyNames(testTodo),todoProperties ); // true

// * Shared methods are defined on the prototype object

const prototypeProperties = ['init', 'isWithinMonthYear'];
testTodoObjectEquality(Object.getOwnPropertyNames(Object.getPrototypeOf(testTodo)), prototypeProperties); // true

// * TodoCreator initializes completed to false

console.log(testTodo.completed === false); // true

// * TodoCreator initializes todos with unique id properties

const testTodo2 = Object.create(TodoCreator).init('buy eggs', '1', '2107', 'for omlette');
console.log(testTodo.id !== testTodo2.id); // true