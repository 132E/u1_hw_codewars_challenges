// OBJECT NOTES & EXAMPLES

// Add Object Properties
const house = {
  doors: 9,
};
house.windows = 30;
house.rooms = 5;
house.hasGarden = true;
console.log(house);

// Change Object Properties

const recipe = {
  isYummy: false,
};

recipe.isYummy = true;
console.log(recipe);

// Leo Object Properties
// console.log Leo's favorite people

const dog = {
  name: "leo",
  age: 6,
  favThings: ["food", "coockies", "the girls"],
  goodBoy: true,
};

console.log(dog.favThings[1]);

// Accessing and Naming Keys Using Brackets and Quotes

const putin = {
  badGuy: true,
  age: 78,
};
putin["years in power"] = 10;
console.log(putin["years in power"]);

// programmatically generate a key name

const obj = {};

for (let i = 0; i < 15; i++) {
  obj["key" + i] = "value";
}
console.log(obj);

// Keys That Are Numbers accessing key-values using square brackets and quotes is helpful: obj['1']

const obj = {
  1: "one",
};
obj["2"] = "hey";
console.log(obj);

// Use object properties with conditionals

const planet = {
  name: "Saturn",
  rings: 9,
  gasPlanet: true,
};

if (planet.name == "Saturn") {
  console.log("Saturn is the 6th planet from the Sun!");
}

for (let i = 0; i < planet.rings; i++) {
  console.log(i);
}

// test to see if a property exists on an object:

const planet = {
  name: "Mars",
  rings: 0,
  gasPlanet: false,
};

if (planet.name) {
  console.log("This key exists within the object");
}
if (planet.distance) {
  console.log("This key exists within the object");
} else {
  console.log("This key does not exist within the object");
}
if (planet.gasPlanet === false) {
  console.log("This is a rock planet!");
}
