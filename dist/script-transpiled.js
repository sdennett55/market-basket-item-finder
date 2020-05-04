"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var items = [{
  name: 'Air Freshener',
  aisle: '15',
  tags: []
}, {
  name: 'Aluminum Foil',
  aisle: '8',
  tags: []
}, {
  name: 'Ammonia',
  aisle: '15',
  tags: []
}, {
  name: 'Applesauce',
  aisle: '8',
  tags: []
}, {
  name: 'Automotive',
  aisle: '14',
  tags: []
}, {
  name: 'Baby Food',
  aisle: '10',
  tags: []
}, {
  name: 'Baby Powder',
  aisle: '10',
  tags: []
}, {
  name: 'Bags: Lunch-Sandwich',
  aisle: '8',
  tags: []
}, {
  name: 'Bags: Garbage-Trash',
  aisle: '8',
  tags: []
}, {
  name: 'Bakery: Fresh',
  aisle: 'Front Corner',
  tags: []
}, {
  name: 'Bakery: Packaged',
  aisle: '18',
  tags: []
}, {
  name: 'Bakeware',
  aisle: '13',
  tags: []
}, {
  name: 'Baking Needs',
  aisle: '7',
  tags: []
}, {
  name: 'Barbecue Sauce',
  aisle: '3',
  tags: []
}, {
  name: 'Bath Tissue',
  aisle: '12',
  tags: []
}, {
  name: 'Batteries',
  aisle: '10',
  tags: []
}, {
  name: 'Beans: Baked',
  aisle: '3',
  tags: ['Baked Beans']
}, {
  name: 'Beans: Dry',
  aisle: '6',
  tags: ['Dry Beans']
}, {
  name: 'Beans: Goya',
  aisle: '6',
  tags: ['Goya Beans']
}, {
  name: 'Bisquick',
  aisle: '8',
  tags: []
}, {
  name: 'Bleach',
  aisle: '15',
  tags: []
}, {
  name: 'Bouillon Cubes',
  aisle: '2',
  tags: []
}, {
  name: 'Bread',
  aisle: '18',
  tags: []
}, {
  name: 'Bread Crumbs',
  aisle: '19',
  tags: []
}, {
  name: 'Brooms',
  aisle: '15',
  tags: []
}, {
  name: 'Bug Spray',
  aisle: '14',
  tags: []
}, {
  name: 'Butter',
  aisle: '1',
  tags: []
}, {
  name: 'Cake Mix',
  aisle: '7',
  tags: []
}, {
  name: 'Candles',
  aisle: '15',
  tags: []
}, {
  name: 'Candy',
  aisle: '8',
  tags: []
}, {
  name: 'Canning Supplies',
  aisle: '3',
  tags: ['Canned goods']
}, {
  name: 'Cat Needs',
  aisle: '14',
  tags: ['Cat Food', 'Cat Litter']
}, {
  name: 'Cereal',
  aisle: '4',
  tags: []
}, {
  name: 'Charcoal',
  aisle: '14',
  tags: []
}, {
  name: 'Cheese: Grated Parmesan',
  aisle: '5',
  tags: ['Parmesan Cheese']
}, {
  name: 'Cheese: Prepackaged',
  aisle: '1',
  tags: []
}, {
  name: 'Cheese: Specialty',
  aisle: 'Cheese Case',
  tags: []
}, {
  name: 'Chili Sauce',
  aisle: 'Above Shrimp Case',
  tags: []
}, {
  name: 'Chinese Food: Canned',
  aisle: '2',
  tags: []
}, {
  name: 'Cherries: Canned',
  aisle: '7',
  tags: []
}, {
  name: 'Cherries: Jar',
  aisle: '3',
  tags: []
}, {
  name: 'Chowder: Clam-Corn-Potato',
  aisle: '2',
  tags: ['Clam Chowder', 'Corn Chowder', 'Potato Chowder']
}, {
  name: 'Clams: Canned-Minced-Juice',
  aisle: '2',
  tags: ['Canned Clams', 'Minced Clams', 'Juice Clams']
}, {
  name: 'Coffee',
  aisle: '7',
  tags: []
}, {
  name: 'Cold Remedies',
  aisle: '12',
  tags: []
}, {
  name: 'Cookies',
  aisle: '18',
  tags: []
}, {
  name: 'Cottage Cheese',
  aisle: '1',
  tags: []
}, {
  name: 'Crackers',
  aisle: '18',
  tags: []
}, {
  name: 'Cranberry Sauce',
  aisle: '8',
  tags: []
}, {
  name: 'Croutons',
  aisle: '3',
  tags: []
}, {
  name: 'Deodorant',
  aisle: '11',
  tags: []
}, {
  name: 'Detergent: Dish-Dishwasher',
  aisle: '15',
  tags: ['Dish Detergent', 'Dishwasher Detergent']
}, {
  name: 'Diapers',
  aisle: '10',
  tags: []
}, {
  name: 'Disinfectant Spray',
  aisle: '15',
  tags: []
}, {
  name: 'Dog Needs',
  aisle: '14',
  tags: ['Dog Food']
}, {
  name: 'Drain Cleaner',
  aisle: '15',
  tags: []
}, {
  name: 'Dried Fruit: Currants-Dates-Prunes-Raisins',
  aisle: '8',
  tags: ['Currants', 'Dates', 'Prunes', 'Raisins']
}, {
  name: 'Dye: Fabric',
  aisle: '15',
  tags: []
}, {
  name: 'Eggs',
  aisle: '1',
  tags: []
}, {
  name: 'Electrical Supplies',
  aisle: '10',
  tags: []
}, {
  name: 'Escargot',
  aisle: '2',
  tags: []
}, {
  name: 'Eye Care',
  aisle: '12',
  tags: []
}, {
  name: 'Facial Tissue',
  aisle: '10',
  tags: ['Tissues']
}, {
  name: 'Fabric Softener',
  aisle: '15',
  tags: []
}, {
  name: 'Feminine Needs',
  aisle: '10',
  tags: ['Tampons', 'Pads']
}, {
  name: 'Figs: Dry',
  aisle: 'Produce Dept.',
  tags: []
}, {
  name: 'Fish: Canned',
  aisle: '2',
  tags: []
}, {
  name: 'Fish: Fresh',
  aisle: 'Deli/Fish Dept.',
  tags: []
}, {
  name: 'Flour',
  aisle: '7',
  tags: []
}, {
  name: 'Food Coloring',
  aisle: '7',
  tags: []
}, {
  name: 'Freezer Wrap',
  aisle: '8',
  tags: []
}, {
  name: 'Fruit: Canned',
  aisle: '8',
  tags: []
}, {
  name: 'Fruit: Fresh',
  aisle: 'Produce Dept.',
  tags: []
}, {
  name: 'Frozen Foods',
  aisle: '19 & 20',
  tags: []
}, {
  name: 'Gloves: Work',
  aisle: '15',
  tags: []
}, {
  name: 'Granola Bars',
  aisle: '4',
  tags: []
}, {
  name: 'Gravy',
  aisle: '6',
  tags: []
}, {
  name: 'Grits',
  aisle: '4',
  tags: []
}, {
  name: 'Ham Glaze',
  aisle: '3',
  tags: []
}, {
  name: 'Hamburger Helper',
  aisle: '5',
  tags: []
}, {
  name: 'Honey',
  aisle: '8',
  tags: []
}, {
  name: 'Household Cleaners',
  aisle: '15',
  tags: []
}, {
  name: 'Ice Cream',
  aisle: '21',
  tags: []
}, {
  name: 'Ice Cream Cones',
  aisle: 'Freezer Wall',
  tags: []
}, {
  name: 'Ice Cubes',
  aisle: '20',
  tags: []
}, {
  name: 'Iced Tea Mix',
  aisle: '16',
  tags: []
}, {
  name: 'Jam & Jelly',
  aisle: '8',
  tags: []
}, {
  name: 'Jello',
  aisle: '7',
  tags: []
}, {
  name: 'Juice',
  aisle: '6',
  tags: []
}, {
  name: 'Ketchup',
  aisle: '3',
  tags: []
}, {
  name: 'Kitchen Gadgets',
  aisle: '13',
  tags: []
}, {
  name: 'Kool Aid',
  aisle: '16',
  tags: []
}, {
  name: 'Laundry Detergent',
  aisle: '15',
  tags: []
}, {
  name: 'Laxative',
  aisle: '12',
  tags: []
}, {
  name: 'Lightbulbs',
  aisle: '10',
  tags: []
}, {
  name: 'Mac & Cheese: Packaged',
  aisle: '3',
  tags: ['Macaroni & Cheese']
}, {
  name: 'Magazines',
  aisle: 'Registers',
  tags: []
}, {
  name: 'Mayonnaise',
  aisle: '3',
  tags: []
}, {
  name: 'Meat: Canned',
  aisle: '2',
  tags: []
}, {
  name: 'Meat: Fresh',
  aisle: 'Meat Dept.',
  tags: []
}, {
  name: 'Mexican Food',
  aisle: '3',
  tags: []
}, {
  name: 'Milk: Fresh',
  aisle: '1',
  tags: []
}, {
  name: 'Milk: Evaporated-Powdered',
  aisle: '7',
  tags: []
}, {
  name: 'Molasses',
  aisle: '8',
  tags: []
}, {
  name: 'Mops',
  aisle: '15',
  tags: []
}, {
  name: 'Mouthwash',
  aisle: '11',
  tags: []
}, {
  name: 'Mushrooms: Canned',
  aisle: '6',
  tags: []
}, {
  name: 'Mustard',
  aisle: '3',
  tags: []
}, {
  name: 'Napkins',
  aisle: '13',
  tags: []
}, {
  name: 'Noodles',
  aisle: '5',
  tags: []
}, {
  name: 'Nuts: Baking',
  aisle: '7',
  tags: []
}, {
  name: 'Peanuts in shell',
  aisle: 'Produce Dept.',
  tags: []
}, {
  name: 'Snack Nuts',
  aisle: '8',
  tags: ['Nuts']
}, {
  name: 'Oil: Canola-Cooking-Corn',
  aisle: '3',
  tags: ['Canola Oil', 'Cooking Oil', 'Corn Oil']
}, {
  name: 'Oil: Olive-Vegetable',
  aisle: '3',
  tags: ['Olive Oil', 'Vegetable Oil']
}, {
  name: 'Oil: Motor',
  aisle: '3',
  tags: ['Motor Oil']
}, {
  name: 'Olives',
  aisle: '3',
  tags: []
}, {
  name: 'Pancake Mix',
  aisle: '8',
  tags: []
}, {
  name: 'Paper Cups',
  aisle: '13',
  tags: []
}, {
  name: 'Paper Plates',
  aisle: '13',
  tags: []
}, {
  name: 'Paper Towels',
  aisle: '13',
  tags: []
}, {
  name: 'Pasta',
  aisle: '5',
  tags: []
}, {
  name: 'Peanut Butter',
  aisle: '8',
  tags: []
}, {
  name: 'Pie Filling',
  aisle: '7',
  tags: []
}, {
  name: 'Pizza: Fresh',
  aisle: 'Market\'s Kitchen',
  tags: ['Fresh Pizza']
}, {
  name: 'Plasticware',
  aisle: '13',
  tags: []
}, {
  name: 'Pop Tarts',
  aisle: '4',
  tags: []
}, {
  name: 'Popping Corn',
  aisle: '8',
  tags: []
}, {
  name: 'Potato Chips',
  aisle: '9',
  tags: []
}, {
  name: 'Potatoes: Fresh',
  aisle: 'Produce Dept.',
  tags: []
}, {
  name: 'Potatoes: Canned-Instant',
  aisle: '6',
  tags: []
}, {
  name: 'Pudding Mix',
  aisle: '7',
  tags: []
}, {
  name: 'Raisins',
  aisle: '8',
  tags: []
}, {
  name: 'Razor Blades',
  aisle: '11 & Checkout',
  tags: []
}, {
  name: 'Rice: Packaged',
  aisle: '5',
  tags: []
}, {
  name: 'Rice Cakes',
  aisle: '4',
  tags: []
}, {
  name: 'Rubbermaid',
  aisle: '10',
  tags: []
}, {
  name: 'Rubbing Alcohol',
  aisle: '12',
  tags: []
}, {
  name: 'Salad Dressing',
  aisle: '3',
  tags: []
}, {
  name: 'Salt',
  aisle: '7',
  tags: []
}, {
  name: 'Sanitary Napkins',
  aisle: '10',
  tags: []
}, {
  name: 'Sardines: Canned',
  aisle: '3',
  tags: []
}, {
  name: 'Sauce: BBQ-Steak',
  aisle: '3',
  tags: ['BBQ Sauce', 'Barbecue Sauce', 'Steak Sauce']
}, {
  name: 'Sauce: Tobasco-Tartar',
  aisle: '3',
  tags: ['Tobasco Sauce', 'Tartar Sauce']
}, {
  name: 'Sauce: Soy',
  aisle: '3',
  tags: ['Soy Sauce']
}, {
  name: 'Shake & Bake',
  aisle: 'Back Main Aisle',
  tags: []
}, {
  name: 'Shaving Needs',
  aisle: '11',
  tags: []
}, {
  name: 'Shoe Care',
  aisle: '10',
  tags: []
}, {
  name: 'Shortening',
  aisle: '3',
  tags: []
}, {
  name: 'Soap',
  aisle: '12',
  tags: []
}, {
  name: 'Soda',
  aisle: '17',
  tags: []
}, {
  name: 'Soup',
  aisle: '2',
  tags: []
}, {
  name: 'Spaghetti Sauce',
  aisle: '5',
  tags: []
}, {
  name: 'Spam',
  aisle: '2',
  tags: []
}, {
  name: 'Spices',
  aisle: '7',
  tags: []
}, {
  name: 'Sponges',
  aisle: '15',
  tags: []
}, {
  name: 'Stationery',
  aisle: '10',
  tags: ['Pens', 'Pencils', 'Paper']
}, {
  name: 'Soup',
  aisle: '2',
  tags: []
}, {
  name: 'Steel Wool',
  aisle: '15',
  tags: []
}, {
  name: 'Straws',
  aisle: '13',
  tags: []
}, {
  name: 'Stuffing Mix',
  aisle: 'Back Main Aisle',
  tags: []
}, {
  name: 'Sugar',
  aisle: '7',
  tags: []
}, {
  name: 'Taco: Sauce-Shells',
  aisle: '3',
  tags: ['Taco Sauce', 'Taco Shells']
}, {
  name: 'Tea Bags',
  aisle: '7',
  tags: []
}, {
  name: 'Toilet Paper',
  aisle: '12',
  tags: ['Bath Tissue']
}, {
  name: 'Tomato: Canned',
  aisle: '5',
  tags: []
}, {
  name: 'Tomato: Fresh',
  aisle: 'Produce Dept.',
  tags: []
}, {
  name: 'Tomato: Paste',
  aisle: '5',
  tags: []
}, {
  name: 'Tomato: Sauce',
  aisle: '5',
  tags: []
}, {
  name: 'Toothbrushes',
  aisle: '11',
  tags: []
}, {
  name: 'Toothpaste',
  aisle: '11',
  tags: []
}, {
  name: 'Toothpicks',
  aisle: '13',
  tags: []
}, {
  name: 'Tuna: Canned',
  aisle: '13',
  tags: []
}, {
  name: 'Vacuum Cleaner Bags',
  aisle: '15',
  tags: []
}, {
  name: 'Vegetables: Canned',
  aisle: '6',
  tags: ['Canned Vegetables']
}, {
  name: 'Vegetables: Fresh',
  aisle: 'Produce Dept.',
  tags: ['Fresh Vegetables']
}, {
  name: 'Vinegar',
  aisle: '3',
  tags: []
}, {
  name: 'Vitamins',
  aisle: '11',
  tags: []
}, {
  name: 'Water: Distilled-Spring',
  aisle: '16',
  tags: ['Spring Water', 'Distilled Water']
}, {
  name: 'Wax Paper',
  aisle: '8',
  tags: []
}, {
  name: 'Wheat Germ',
  aisle: '4',
  tags: []
}, {
  name: 'Windshield Washer Fluid',
  aisle: '14',
  tags: []
}];
var shoppingList = [];
var input = document.querySelector('input');
var results = document.querySelector('.results');

function onLoad() {
  if (!localStorage.getItem('mb-list')) {
    return;
  }

  shoppingList = JSON.parse(localStorage.getItem('mb-list'));

  if (shoppingList.length) {
    updateList();
  }
}

onLoad();

function searchFilters(_ref) {
  var item = _ref.item,
      e = _ref.e;
  var inputText = e.target.value.toLowerCase();

  if (item.tags.length > 0) {
    return item.name.toLowerCase().startsWith(inputText) || item.tags.filter(function (tag) {
      return tag.toLowerCase().startsWith(inputText);
    }).length;
  }

  return item.name.toLowerCase().startsWith(inputText);
}

function addToList(itemName) {
  // if already exists in shopping list, early return
  if (shoppingList.findIndex(function (item) {
    return item.name === itemName;
  }) !== -1) {
    return;
  }

  var searchBar = document.querySelector('#quickSearch');
  searchBar.value = '';
  searchBar.focus();
  var match = items.find(function (item) {
    return item.name === itemName;
  });
  shoppingList.push(match);
  shoppingList = _toConsumableArray(shoppingList).sort(function (a, b) {
    if (!isNaN(a.aisle) && !isNaN(b.aisle)) {
      return parseInt(a.aisle) > parseInt(b.aisle) ? 1 : -1;
    }

    return /[A-Za-z]/.test(a.aisle) - /[A-Za-z]/.test(b.aisle) || (a.aisle.toUpperCase() < b.aisle.toUpperCase() ? -1 : a.aisle.toUpperCase() > b.aisle.toUpperCase() ? 1 : 0);
  });
  updateList();
}

function removeFromList(itemName) {
  var matchIndex = shoppingList.findIndex(function (item) {
    return item.name === itemName;
  });
  shoppingList.splice(matchIndex, 1);
  updateList();
}

function clearShoppingList() {
  var result = confirm('Are you sure you want to delete your entire shopping list?');

  if (result) {
    shoppingList.length = 0;
    updateList();
  }
}

function updateList() {
  if (document.querySelector('.ShoppingList')) {
    if (!shoppingList.length) {
      document.querySelector('.ShoppingListWrap').innerHTML = '';
      localStorage.setItem('mb-list', JSON.stringify(shoppingList));
      return;
    }

    document.querySelector('.ShoppingList').innerHTML = ''; // loop through shopping list and add each item as a <li> to the 

    shoppingList.forEach(function (item) {
      var listItem = document.createElement('li');
      listItem.innerHTML = "<span style=\"flex-grow:1;padding-right: 1em;\">".concat(item.name, "</span> <span style=\"padding-right: 1em\">").concat(item.aisle, "</span> <button onclick=\"removeFromList('").concat(item.name, "')\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90.1 90.1\"><path d=\"M55.8 45l32.1 32.1c3 3 3 7.7 0 10.7s-7.7 3-10.7 0L45 55.8 12.9 87.9c-3 3-7.7 3-10.7 0s-3-7.7 0-10.7l32.1-32.1-32-32.2c-3-3-3-7.7 0-10.7s7.7-3 10.7 0l32 32.1 32.2-32c3-3 7.7-3 10.7 0s3 7.7 0 10.7L55.8 45z\"/></svg></button>");
      document.querySelector('.ShoppingList').appendChild(listItem);
    });
  } else {
    var listElem = document.createElement('ul');
    listElem.className = 'ShoppingList'; // loop through shopping list and add each item as a <li> to the 

    shoppingList.forEach(function (item) {
      var listItem = document.createElement('li');
      listItem.innerHTML = "<span style=\"flex-grow:1;padding-right: 1em;\">".concat(item.name, "</span> <span style=\"padding-right: 1em\">").concat(item.aisle, "</span> <button onclick=\"removeFromList('").concat(item.name, "')\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90.1 90.1\"><path d=\"M55.8 45l32.1 32.1c3 3 3 7.7 0 10.7s-7.7 3-10.7 0L45 55.8 12.9 87.9c-3 3-7.7 3-10.7 0s-3-7.7 0-10.7l32.1-32.1-32-32.2c-3-3-3-7.7 0-10.7s7.7-3 10.7 0l32 32.1 32.2-32c3-3 7.7-3 10.7 0s3 7.7 0 10.7L55.8 45z\"/></svg></button>");
      listElem.appendChild(listItem);
    });
    document.querySelector('.ShoppingListWrap').innerHTML = '<h2>Shopping List <button onclick="clearShoppingList()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.7 98.3"><path d="M67.9 1.1L51.5 4l-5.6-4-21.2 3.6-2.8 5.3-17.7 3c-2.7.5-4.5 3-4.1 5.7.5 2.7 3 4.5 5.7 4l63.8-10.8c2.7-.5 4.5-3 4.1-5.7-.6-2.7-3.1-4.5-5.8-4zM.9 22.4l8.8 75.9h54.5l8.3-75.9H.9zm19.8 67.9c-2 .2-3.7-1.3-3.9-3.2l-5-52.6c-.2-2 1.3-3.7 3.2-3.9 2-.2 3.7 1.3 3.9 3.2l5 52.6c.2 1.9-1.2 3.7-3.2 3.9zm15.9.1c-2 0-3.6-1.6-3.6-3.6L32.9 34c0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6l.2 52.8c-.1 2-1.7 3.6-3.7 3.6zM57 87c-.1 2-1.9 3.4-3.8 3.3-2-.1-3.4-1.9-3.3-3.8l3.9-52.7c.1-2 1.9-3.4 3.8-3.3 2 .1 3.5 1.9 3.3 3.8L57 87z"/></svg></button></h2>';
    document.querySelector('.ShoppingListWrap').appendChild(listElem);
  }

  localStorage.setItem('mb-list', JSON.stringify(shoppingList));
}

input.addEventListener('keyup', function (e) {
  results.innerHTML = '';

  if (e.target.value === '') {
    return;
  }

  var filteredItems = items.filter(function (item) {
    return searchFilters({
      item: item,
      e: e
    });
  });

  var _iterator = _createForOfIteratorHelper(filteredItems.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          item = _step$value[1];

      if (index === 5) {
        break;
      }

      var listItem = document.createElement('li');
      listItem.innerHTML = "<span style=\"flex-grow:1;padding-right: 1em;\">".concat(item.name, "</span> <span style=\"padding-right: 1em\">").concat(item.aisle, "</span> <button class=\"RemoveButton\" onclick=\"addToList('").concat(item.name, "')\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90.1 90.1\"><path d=\"M55.8 45l32.1 32.1c3 3 3 7.7 0 10.7s-7.7 3-10.7 0L45 55.8 12.9 87.9c-3 3-7.7 3-10.7 0s-3-7.7 0-10.7l32.1-32.1-32-32.2c-3-3-3-7.7 0-10.7s7.7-3 10.7 0l32 32.1 32.2-32c3-3 7.7-3 10.7 0s3 7.7 0 10.7L55.8 45z\"/></svg></button>");
      results.appendChild(listItem);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
