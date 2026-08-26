// An object stores data in key : value pairs.
const person = {
  name: "Sandesh",
  age: 20,
  city: "Pune"
};

// console.log(person.name);   // "Sandesh"
// console.log(person["age"]); // 20

// You can also add/update properties:
// person.age = 21;
// person.course = "JS";

// Object methods
// Object methods are functions stored in an object property. They usually use this to access the same object’s data.

const user = {
  name: "Sandesh",
  greet() {
    return `Hello, ${this.name}`;
  }
};

// console.log(user.greet()); // "Hello, Sandesh"

//Built-in Object “utility” methods
// Keys / values / entries

// const person = { name: "A", age: 20 };

// Object.keys(person);   // ["name","age"]
// Object.values(person); // ["A", 20]
// Object.entries(person);// [["name","A"], ["age",20]]

//Assign (copy/merge)
const a = { x: 1 };
const b = { y: 2 };
// const merged = Object.assign({}, a, b); // {x:1, y:2}

//Freeze / seal
const obj = { a: 1 };
// Object.freeze(obj); // cannot change/add/remove properties (strict)
// Object.seal(obj);   // can change existing, but cannot add/remove


// OBJECT DE-Structure

const course = {
    courseName : "JavaScript",
    price : 100,
    courseDuration : "20hrs"
}

// const {courseName} = course
// console.log(courseName); // JavaScript

const {courseName: name} = course
console.log(name); // JavaScript
