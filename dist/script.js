const items=[{name:"Air Freshener",aisle:"15",tags:[]},{name:"Aluminum Foil",aisle:"8",tags:[]},{name:"Ammonia",aisle:"15",tags:[]},{name:"Applesauce",aisle:"8",tags:[]},{name:"Automotive",aisle:"14",tags:[]},{name:"Baby Food",aisle:"10",tags:[]},{name:"Baby Powder",aisle:"10",tags:[]},{name:"Bags: Lunch-Sandwich",aisle:"8",tags:[]},{name:"Bags: Garbage-Trash",aisle:"8",tags:[]},{name:"Bakery: Fresh",aisle:"Front Corner",tags:[]},{name:"Bakery: Packaged",aisle:"18",tags:[]},{name:"Bakeware",aisle:"13",tags:[]},{name:"Baking Needs",aisle:"7",tags:[]},{name:"Barbecue Sauce",aisle:"3",tags:[]},{name:"Bath Tissue",aisle:"12",tags:[]},{name:"Batteries",aisle:"10",tags:[]},{name:"Beans: Baked",aisle:"3",tags:["Baked Beans"]},{name:"Beans: Dry",aisle:"6",tags:["Dry Beans"]},{name:"Beans: Goya",aisle:"6",tags:["Goya Beans"]},{name:"Bisquick",aisle:"8",tags:[]},{name:"Bleach",aisle:"15",tags:[]},{name:"Bouillon Cubes",aisle:"2",tags:[]},{name:"Bread",aisle:"18",tags:[]},{name:"Bread Crumbs",aisle:"19",tags:[]},{name:"Brooms",aisle:"15",tags:[]},{name:"Bug Spray",aisle:"14",tags:[]},{name:"Butter",aisle:"1",tags:[]},{name:"Cake Mix",aisle:"7",tags:[]},{name:"Candles",aisle:"15",tags:[]},{name:"Candy",aisle:"8",tags:[]},{name:"Canning Supplies",aisle:"3",tags:["Canned goods"]},{name:"Cat Needs",aisle:"14",tags:["Cat Food","Cat Litter"]},{name:"Cereal",aisle:"4",tags:[]},{name:"Charcoal",aisle:"14",tags:[]},{name:"Cheese: Grated Parmesan",aisle:"5",tags:["Parmesan Cheese"]},{name:"Cheese: Prepackaged",aisle:"1",tags:[]},{name:"Cheese: Specialty",aisle:"Cheese Case",tags:[]},{name:"Chili Sauce",aisle:"Above Shrimp Case",tags:[]},{name:"Chinese Food: Canned",aisle:"2",tags:[]},{name:"Cherries: Canned",aisle:"7",tags:[]},{name:"Cherries: Jar",aisle:"3",tags:[]},{name:"Chowder: Clam-Corn-Potato",aisle:"2",tags:["Clam Chowder","Corn Chowder","Potato Chowder"]},{name:"Clams: Canned-Minced-Juice",aisle:"2",tags:["Canned Clams","Minced Clams","Juice Clams"]},{name:"Coffee",aisle:"7",tags:[]},{name:"Cold Remedies",aisle:"12",tags:[]},{name:"Cookies",aisle:"18",tags:[]},{name:"Cottage Cheese",aisle:"1",tags:[]},{name:"Crackers",aisle:"18",tags:[]},{name:"Cranberry Sauce",aisle:"8",tags:[]},{name:"Croutons",aisle:"3",tags:[]},{name:"Deodorant",aisle:"11",tags:[]},{name:"Detergent: Dish-Dishwasher",aisle:"15",tags:["Dish Detergent","Dishwasher Detergent"]},{name:"Diapers",aisle:"10",tags:[]},{name:"Disinfectant Spray",aisle:"15",tags:[]},{name:"Dog Needs",aisle:"14",tags:["Dog Food"]},{name:"Drain Cleaner",aisle:"15",tags:[]},{name:"Dried Fruit: Currants-Dates-Prunes-Raisins",aisle:"8",tags:["Currants","Dates","Prunes","Raisins"]},{name:"Dye: Fabric",aisle:"15",tags:[]},{name:"Eggs",aisle:"1",tags:[]},{name:"Electrical Supplies",aisle:"10",tags:[]},{name:"Escargot",aisle:"2",tags:[]},{name:"Eye Care",aisle:"12",tags:[]},{name:"Facial Tissue",aisle:"10",tags:["Tissues"]},{name:"Fabric Softener",aisle:"15",tags:[]},{name:"Feminine Needs",aisle:"10",tags:["Tampons","Pads"]},{name:"Figs: Dry",aisle:"Produce Dept.",tags:[]},{name:"Fish: Canned",aisle:"2",tags:[]},{name:"Fish: Fresh",aisle:"Deli/Fish Dept.",tags:[]},{name:"Flour",aisle:"7",tags:[]},{name:"Food Coloring",aisle:"7",tags:[]},{name:"Freezer Wrap",aisle:"8",tags:[]},{name:"Fruit: Canned",aisle:"8",tags:[]},{name:"Fruit: Fresh",aisle:"Produce Dept.",tags:[]},{name:"Frozen Foods",aisle:"19 & 20",tags:[]},{name:"Gloves: Work",aisle:"15",tags:[]},{name:"Granola Bars",aisle:"4",tags:[]},{name:"Gravy",aisle:"6",tags:[]},{name:"Grits",aisle:"4",tags:[]},{name:"Ham Glaze",aisle:"3",tags:[]},{name:"Hamburger Helper",aisle:"5",tags:[]},{name:"Honey",aisle:"8",tags:[]},{name:"Household Cleaners",aisle:"15",tags:[]},{name:"Ice Cream",aisle:"21",tags:[]},{name:"Ice Cream Cones",aisle:"Freezer Wall",tags:[]},{name:"Ice Cubes",aisle:"20",tags:[]},{name:"Iced Tea Mix",aisle:"16",tags:[]},{name:"Jam & Jelly",aisle:"8",tags:[]},{name:"Jello",aisle:"7",tags:[]},{name:"Juice",aisle:"6",tags:[]},{name:"Ketchup",aisle:"3",tags:[]},{name:"Kitchen Gadgets",aisle:"13",tags:[]},{name:"Kool Aid",aisle:"16",tags:[]},{name:"Laundry Detergent",aisle:"15",tags:[]},{name:"Laxative",aisle:"12",tags:[]},{name:"Lightbulbs",aisle:"10",tags:[]},{name:"Mac & Cheese: Packaged",aisle:"3",tags:["Macaroni & Cheese"]},{name:"Magazines",aisle:"Registers",tags:[]},{name:"Mayonnaise",aisle:"3",tags:[]},{name:"Meat: Canned",aisle:"2",tags:[]},{name:"Meat: Fresh",aisle:"Meat Dept.",tags:[]},{name:"Mexican Food",aisle:"3",tags:[]},{name:"Milk: Fresh",aisle:"1",tags:[]},{name:"Milk: Evaporated-Powdered",aisle:"7",tags:[]},{name:"Molasses",aisle:"8",tags:[]},{name:"Mops",aisle:"15",tags:[]},{name:"Mouthwash",aisle:"11",tags:[]},{name:"Mushrooms: Canned",aisle:"6",tags:[]},{name:"Mustard",aisle:"3",tags:[]},{name:"Napkins",aisle:"13",tags:[]},{name:"Noodles",aisle:"5",tags:[]},{name:"Nuts: Baking",aisle:"7",tags:[]},{name:"Peanuts in shell",aisle:"Produce Dept.",tags:[]},{name:"Snack Nuts",aisle:"8",tags:["Nuts"]},{name:"Oil: Canola-Cooking-Corn",aisle:"3",tags:["Canola Oil","Cooking Oil","Corn Oil"]},{name:"Oil: Olive-Vegetable",aisle:"3",tags:["Olive Oil","Vegetable Oil"]},{name:"Oil: Motor",aisle:"3",tags:["Motor Oil"]},{name:"Olives",aisle:"3",tags:[]},{name:"Pancake Mix",aisle:"8",tags:[]},{name:"Paper Cups",aisle:"13",tags:[]},{name:"Paper Plates",aisle:"13",tags:[]},{name:"Paper Towels",aisle:"13",tags:[]},{name:"Pasta",aisle:"5",tags:[]},{name:"Peanut Butter",aisle:"8",tags:[]},{name:"Pie Filling",aisle:"7",tags:[]},{name:"Pizza: Fresh",aisle:"Market's Kitchen",tags:["Fresh Pizza"]},{name:"Plasticware",aisle:"13",tags:[]},{name:"Pop Tarts",aisle:"4",tags:[]},{name:"Popping Corn",aisle:"8",tags:[]},{name:"Potato Chips",aisle:"9",tags:[]},{name:"Potatoes: Fresh",aisle:"Produce Dept.",tags:[]},{name:"Potatoes: Canned-Instant",aisle:"6",tags:[]},{name:"Pudding Mix",aisle:"7",tags:[]},{name:"Raisins",aisle:"8",tags:[]},{name:"Razor Blades",aisle:"11 & Checkout",tags:[]},{name:"Rice: Packaged",aisle:"5",tags:[]},{name:"Rice Cakes",aisle:"4",tags:[]},{name:"Rubbermaid",aisle:"10",tags:[]},{name:"Rubbing Alcohol",aisle:"12",tags:[]},{name:"Salad Dressing",aisle:"3",tags:[]},{name:"Salt",aisle:"7",tags:[]},{name:"Sanitary Napkins",aisle:"10",tags:[]},{name:"Sardines: Canned",aisle:"3",tags:[]},{name:"Sauce: BBQ-Steak",aisle:"3",tags:["BBQ Sauce","Barbecue Sauce","Steak Sauce"]},{name:"Sauce: Tobasco-Tartar",aisle:"3",tags:["Tobasco Sauce","Tartar Sauce"]},{name:"Sauce: Soy",aisle:"3",tags:["Soy Sauce"]},{name:"Shake & Bake",aisle:"Back Main Aisle",tags:[]},{name:"Shaving Needs",aisle:"11",tags:[]},{name:"Shoe Care",aisle:"10",tags:[]},{name:"Shortening",aisle:"3",tags:[]},{name:"Soap",aisle:"12",tags:[]},{name:"Soda",aisle:"17",tags:[]},{name:"Soup",aisle:"2",tags:[]},{name:"Spaghetti Sauce",aisle:"5",tags:[]},{name:"Spam",aisle:"2",tags:[]},{name:"Spices",aisle:"7",tags:[]},{name:"Sponges",aisle:"15",tags:[]},{name:"Stationery",aisle:"10",tags:["Pens","Pencils","Paper"]},{name:"Soup",aisle:"2",tags:[]},{name:"Steel Wool",aisle:"15",tags:[]},{name:"Straws",aisle:"13",tags:[]},{name:"Stuffing Mix",aisle:"Back Main Aisle",tags:[]},{name:"Sugar",aisle:"7",tags:[]},{name:"Taco: Sauce-Shells",aisle:"3",tags:["Taco Sauce","Taco Shells"]},{name:"Tea Bags",aisle:"7",tags:[]},{name:"Toilet Paper",aisle:"12",tags:["Bath Tissue"]},{name:"Tomato: Canned",aisle:"5",tags:[]},{name:"Tomato: Fresh",aisle:"Produce Dept.",tags:[]},{name:"Tomato: Paste",aisle:"5",tags:[]},{name:"Tomato: Sauce",aisle:"5",tags:[]},{name:"Toothbrushes",aisle:"11",tags:[]},{name:"Toothpaste",aisle:"11",tags:[]},{name:"Toothpicks",aisle:"13",tags:[]},{name:"Tuna: Canned",aisle:"13",tags:[]},{name:"Vacuum Cleaner Bags",aisle:"15",tags:[]},{name:"Vegetables: Canned",aisle:"6",tags:["Canned Vegetables"]},{name:"Vegetables: Fresh",aisle:"Produce Dept.",tags:["Fresh Vegetables"]},{name:"Vinegar",aisle:"3",tags:[]},{name:"Vitamins",aisle:"11",tags:[]},{name:"Water: Distilled-Spring",aisle:"16",tags:["Spring Water","Distilled Water"]},{name:"Wax Paper",aisle:"8",tags:[]},{name:"Wheat Germ",aisle:"4",tags:[]},{name:"Windshield Washer Fluid",aisle:"14",tags:[]}];var shoppingList=[];const input=document.querySelector("input"),results=document.querySelector(".results");function onLoad(){localStorage.getItem("mb-list")&&(shoppingList=JSON.parse(localStorage.getItem("mb-list"))).length&&updateList()}function searchFilters({item:a,e:e}){const s=e.target.value.toLowerCase();return a.tags.length>0?a.name.toLowerCase().startsWith(s)||a.tags.filter(a=>a.toLowerCase().startsWith(s)).length:a.name.toLowerCase().startsWith(s)}function addToList(a){if(-1!==shoppingList.findIndex(e=>e.name===a))return;const e=document.querySelector("#quickSearch");e.value="",e.focus();const s=items.find(e=>e.name===a);shoppingList.push(s),shoppingList=[...shoppingList].sort((a,e)=>isNaN(a.aisle)||isNaN(e.aisle)?/[A-Za-z]/.test(a.aisle)-/[A-Za-z]/.test(e.aisle)||(a.aisle.toUpperCase()<e.aisle.toUpperCase()?-1:a.aisle.toUpperCase()>e.aisle.toUpperCase()?1:0):parseInt(a.aisle)>parseInt(e.aisle)?1:-1),updateList()}function removeFromList(a){const e=shoppingList.findIndex(e=>e.name===a);shoppingList.splice(e,1),updateList()}function clearShoppingList(){confirm("Are you sure you want to delete your entire shopping list?")&&(shoppingList.length=0,updateList())}function updateList(){if(document.querySelector(".ShoppingList")){if(!shoppingList.length)return document.querySelector(".ShoppingListWrap").innerHTML="",void localStorage.setItem("mb-list",JSON.stringify(shoppingList));document.querySelector(".ShoppingList").innerHTML="",shoppingList.forEach(a=>{let e=document.createElement("li");e.innerHTML=`<span style="flex-grow:1;padding-right: 1em;">${a.name}</span> <span style="padding-right: 1em">${a.aisle}</span> <button onclick="removeFromList('${a.name}')">x</button>`,document.querySelector(".ShoppingList").appendChild(e)})}else{const a=document.createElement("ul");a.className="ShoppingList",shoppingList.forEach(e=>{let s=document.createElement("li");s.innerHTML=`<span style="flex-grow:1;padding-right: 1em;">${e.name}</span> <span style="padding-right: 1em">${e.aisle}</span> <button onclick="removeFromList('${e.name}')">x</button>`,a.appendChild(s)}),document.querySelector(".ShoppingListWrap").innerHTML='<h2>Shopping List <button onclick="clearShoppingList()">x</button></h2>',document.querySelector(".ShoppingListWrap").appendChild(a)}localStorage.setItem("mb-list",JSON.stringify(shoppingList))}onLoad(),input.addEventListener("keyup",a=>{if(results.innerHTML="",""===a.target.value)return;const e=items.filter(e=>searchFilters({item:e,e:a}));for(const[a,s]of e.entries()){if(5===a)break;let e=document.createElement("li");e.innerHTML=`<span style="flex-grow:1;padding-right: 1em;">${s.name}</span> <span style="padding-right: 1em">${s.aisle}</span> <button onclick="addToList('${s.name}')">+</button>`,results.appendChild(e)}});