// if Item points to a function that takes arguments, those are in the outer function scope and available
// to the Item functions directly
// by returning an inner function that takes the same arguments, the outer function (private) methods lose access
// to the inner function arguments, so they need to be passed around explicitly.

const Item = (function () {
  const sku = (name, category) => {
    const firstThree = name.replace(/[^a-z]/gi, '').slice(0, 3);
    const nextTwo = category.slice(0, 2);
    return (firstThree + nextTwo).toUpperCase();
  };

  const validName = (name) => {
    return (name.replace(/[^a-z]/gi, '').length >= 5);
  };

  const validCategory = (category) => {
    return (category.replace(/[^a-z]/gi, '').length >= 5) && category.split(' ').length === 1;
  };

  const validQuantity = (quantity) => {
    return (quantity !== undefined);
  };

  const validItem = (name, category, quantity) => {
    debugger;
    return validName(name) && validCategory(category) && validQuantity(quantity);
  };

  return function(name, category, quantity) {
    if (validItem(name, category, quantity)) {
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.sku = sku(name, category);
        return this;
      } else {
        return { notValid: true }
      };
    }
})();


const ItemManager = {
  items: [],

  create: function (name, category, quantity) {
    const newItem = new Item(name, category, quantity);
    if (newItem.notValid) { return false };
    this.items.push(newItem);
  },

  update(skuToUpdate, updateObject) {
    const itemToUpdate = this.getItem(skuToUpdate)
    Object.keys(updateObject).forEach(property => itemToUpdate[property] = updateObject[property]);
  },

  delete: function (skuToDelete) {
   const itemToDelete = this.getItem(skuToDelete);
   this.items = this.items.filter(item => item !== itemToDelete);
  },

  getItem: function (skuToGet) {
    return this.items.filter(item => item.sku === skuToGet)[0];
  },

  inStock: function () {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory: function (searchCategory) {
    return this.items.filter(item => item.category === searchCategory);
  },
};

const ReportManager = {
  init: function (manager) {
    this.items = manager
  },
  reportInStock: function () {
    const itemsInStock = this.items.inStock();
    const itemNames = itemsInStock.map(item => item.name).join(', ');
    console.log(itemNames);
  },
  createReporter: function (skuToReport) {
    const item = this.items.getItem(skuToReport);
    return {
      itemInfo: function () {
        Object.keys(item).forEach(property => console.log(`${property}: ${item[property]}`));
      },
    };
  },
}


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });

console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // football,kitchen pot

console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football

ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// ItemManager.items;
// // returns list the the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');

kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10