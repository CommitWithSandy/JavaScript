# JavaScript Interview & Future Revision Notes

These notes are based on the practice in this repository. Use them as a quick revision guide, then open the linked practice files and explain the code aloud.

## 1. What this repository demonstrates

| Area | Topics practised | Main folders |
|---|---|---|
| Fundamentals | truthy/falsy values, objects, destructuring, dates | `TruthyFalsy.js`, `Array/`, `date.js` |
| Arrays and loops | `map`, `filter`, `reduce`, iteration, exercise problems | `Array/`, `Loop/` |
| Functions | declarations, constructors, nested functions, IIFE | `Function/` |
| OOP | classes, inheritance, polymorphism, encapsulation, getters/setters, static methods, prototypes | `OPP/` |
| Async JavaScript | Promise creation, chaining, error handling | `Advance/promise.js` |
| Browser/DOM | selection, content, styles, attributes, classes, traversal, events, forms, delegation | `DOM/`, `dom-learning/` |
| Projects | number guessing, BMI calculator, background colour changer, digital clock, todo app | `smallProjects/`, `dom-learning/18-create-todo/` |

## 2. JavaScript fundamentals

### Truthy and falsy

Falsy values are only: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Everything else is truthy, including `[]`, `{}`, `"0"`, and `"false"`.

```js
if (value) {
  // Runs for truthy values
}

const displayName = userName || "Guest";
const safeName = userName ?? "Guest"; // only falls back for null / undefined
```

Interview point: prefer `??` when `0`, `false`, or an empty string are valid values that must not be replaced.

### Objects and destructuring

Objects store key–value pairs and can also contain methods. `this` inside a normal object method refers to the object that called the method.

```js
const user = {
  name: "Sandesh",
  greet() {
    return `Hello, ${this.name}`;
  }
};

const { name } = user;
const { name: userName } = user;
```

Useful object utilities: `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`, and `Object.assign({}, a, b)`. `Object.freeze()` prevents changes; `Object.seal()` prevents adding/removing keys but allows existing values to change.

## 3. Arrays, loops, and common interview patterns

### Mutating vs non-mutating methods

| Method | Changes original array? | Typical use |
|---|---:|---|
| `push`, `pop`, `shift`, `unshift`, `sort`, `reverse`, `splice` | Yes | Update an existing array |
| `map`, `filter`, `reduce`, `slice`, `concat`, `flat` | No | Produce a result without changing input |
| `[...arr]`, `Array.from(arr)` | No | Create a shallow copy |

`reverse()` mutates its source. To return a reversed copy, use `return [...arr].reverse()`.

### `map`, `filter`, and `reduce`

```js
const prices = [100, 250, 80];
const withTax = prices.map(price => price * 1.18); // transforms every item
const expensive = prices.filter(price => price >= 100); // keeps matching items
const total = prices.reduce((sum, price) => sum + price, 0); // one result
```

- Use `map` when every input should become one output.
- Use `filter` when some items should be removed.
- Use `reduce` for a sum, grouped object, lookup map, or another accumulated result.

### High-value solutions

```js
const numbersOnly = values => values.filter(value => typeof value === "number");
const findMax = values => Math.max(...values);
const removeDuplicates = values => [...new Set(values)];
const flatten = values => values.flat(Infinity);
```

Be ready to state edge cases: `Math.max(...[])` returns `-Infinity`, `typeof NaN === "number"`, and `Set` removes duplicates using SameValueZero comparison.

### Copying arrays

```js
const original = ["red", "blue"];
const shallowCopy = [...original];
```

`const copy = [original]` does **not** copy the items; it makes a nested array containing `original`. Spread makes a shallow copy, so nested objects/arrays are still shared.

## 4. Functions

### Function types

```js
function add(a, b) { return a + b; }            // declaration; hoisted
const multiply = function (a, b) { return a * b; }; // expression
const square = n => n * n;                       // arrow function
```

Arrow functions do not have their own `this`, `arguments`, or `prototype`. Do not use an arrow function as an object method when it needs the object’s `this`.

### Scope, closures, and IIFE

- `let` and `const` are block scoped; `var` is function scoped.
- A closure is a function that retains access to variables from its lexical outer scope, even after the outer function returns.
- An IIFE (Immediately Invoked Function Expression) runs once immediately and used to be a common way to create a private scope.

```js
function makeCounter() {
  let count = 0;
  return () => ++count; // closure over count
}
```

## 5. OOP and prototypes

JavaScript is prototype-based. Classes provide cleaner syntax over prototypes; methods declared in a class are shared through `ClassName.prototype`.

```js
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

  static isVehicle(value) {
    return value instanceof Vehicle;
  }
}

class Car extends Vehicle {
  move() {
    return "The car is driving"; // method overriding / polymorphism
  }
}
```

Key terms:

- **Encapsulation:** restrict or control access to state. Private class fields use `#salary`.
- **Inheritance:** `extends` lets a subclass reuse behaviour from a superclass.
- **Polymorphism:** different classes respond to the same method name differently.
- **Static method:** belongs to the class, not its instances; call `Vehicle.isVehicle(car)`.
- **Getter/setter:** property-style access that runs logic: `obj.salary`, `obj.salary = 50000`.

Important: a private `#salary` and a public `_salary` are different fields. A naming convention beginning with `_` is not private. Keep the getter and setter working with the same backing field.

## 6. Promises and async JavaScript

A Promise represents a future result. Its states are pending, fulfilled, and rejected.

```js
fetch("/api/users")
  .then(response => {
    if (!response.ok) throw new Error("Request failed");
    return response.json();
  })
  .then(users => console.log(users))
  .catch(error => console.error(error));
```

Equivalent `async`/`await` form:

```js
async function loadUsers() {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) throw new Error("Request failed");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
```

Interview distinction: Promise callbacks (`then`, `catch`) run through the microtask queue; timers such as `setTimeout` use the task/macrotask queue. Synchronous code finishes first, then microtasks, then tasks.

## 7. Dates and time

`new Date()` creates a Date object; `Date.now()` returns milliseconds since 1 January 1970 UTC. Useful methods include `toLocaleTimeString()`, `toLocaleDateString()`, `getHours()`, and `getTime()`.

Use ISO-style strings such as `"2023-01-14"` carefully: date-only strings are interpreted as UTC, which can display as a neighbouring local date in some time zones. For exact local dates, construct deliberately or use a date library when the application requires robust time-zone handling.

## 8. DOM essentials

The DOM represents HTML as a tree which JavaScript can query and update.

### Selecting and updating

```js
const title = document.querySelector("#main-title");
const cards = document.querySelectorAll(".card");

title.textContent = "Updated safely";
title.classList.toggle("active");
title.setAttribute("aria-live", "polite");
```

- `getElementById()` selects one element by ID.
- `querySelector()` returns the first CSS-selector match.
- `querySelectorAll()` returns a static `NodeList`.
- Use `textContent` for ordinary user-visible text. `innerHTML` parses HTML and can cause XSS if you insert untrusted input.

### Create, insert, traverse, remove

```js
const item = document.createElement("li");
item.textContent = "Learn event delegation";
list.append(item);

const parent = item.parentElement;
const next = item.nextElementSibling;
item.remove();
```

`children` includes element children only; `childNodes` also includes text nodes such as whitespace.

## 9. Events, forms, bubbling, and delegation

```js
form.addEventListener("submit", event => {
  event.preventDefault();
  // validate and handle form values
});

list.addEventListener("click", event => {
  const deleteButton = event.target.closest("[data-action='delete']");
  if (!deleteButton || !list.contains(deleteButton)) return;
  deleteButton.closest("li").remove();
});
```

- `event.target`: the element where the event began.
- `event.currentTarget`: the element whose listener is running.
- **Bubbling:** an event normally travels target → ancestor elements.
- `stopPropagation()` stops that travel; use it sparingly because it can make parent behaviour harder to maintain.
- **Event delegation:** put one listener on a stable parent and use `target`/`closest()` to identify the clicked child. It works for dynamically added items and avoids many listeners.

For inputs, use `input` for real-time changes, `change` for committed control changes, and `focus`/`blur` for focus state. Use `event.key` (not deprecated `keyCode`) for keyboard handling.

## 10. Projects: how to explain them in an interview

### Guess Number

Demonstrates random number generation, input validation, state (`prevGuess`, number of attempts, game-active flag), DOM rendering, disabling input at game end, and restarting a game.

Good explanation: “I separated validation, comparison, display, ending, and reset behaviour into functions so game state could be reset reliably.”

### BMI Calculator

Demonstrates `submit` handling, `preventDefault`, converting input strings to numbers, validation, BMI calculation, and conditional result categories.

Formula: `BMI = weightKg / (heightM ** 2)`. Convert centimetres to metres before squaring, or use `(weight / (heightCm * heightCm)) * 10000`.

### Background Colour Changer

Demonstrates event listeners, random hexadecimal colours, `setInterval`, `clearInterval`, and guarding against accidentally starting more than one timer.

### Digital Clock

Demonstrates `Date`, `toLocaleTimeString()`, periodic UI updates, and `setInterval`.

### Todo App

This is your strongest DOM synthesis exercise: create/remove elements, input validation, classes, state changes, and event delegation.

## 11. Interview questions to practise aloud

1. What is the difference between `==` and `===`?  
   `===` compares type and value without coercion; prefer it. `==` coerces types and can create surprising results.
2. What is the difference between `null` and `undefined`?  
   `undefined` commonly means no value was assigned/provided; `null` is an intentional empty value.
3. What does `this` mean?  
   It depends on how a normal function is called. In a method call, it is usually the object before the dot; arrow functions inherit `this` from their outer scope.
4. What is a closure?  
   A function retaining access to its lexical outer variables.
5. What is the difference between shallow and deep copy?  
   A shallow copy duplicates the outer container but shares nested references; a deep copy recursively duplicates nested data.
6. Explain event bubbling and event delegation.  
   Bubbling propagates an event upward through ancestors; delegation uses one ancestor listener to handle child events efficiently.
7. What is `preventDefault()`?  
   It cancels the browser’s default action, such as a form submission reload or a link navigation.
8. Explain a Promise.  
   An object representing an async operation’s eventual success or failure, handled with `then/catch` or `async/await`.
9. Difference between `map` and `forEach`?  
   `map` returns a new transformed array; `forEach` returns `undefined` and is usually used for side effects.
10. What is inheritance and what is polymorphism?  
   Inheritance reuses parent-class behaviour; polymorphism lets subclasses implement the same method differently.

## 12. Improvement checklist for future projects

- Use `const` by default; use `let` only when reassignment is needed. Never create accidental globals.
- Use semantic names: `intervalId`, `Vehicle`, `isLoggedIn`, `keyCode` only when genuinely needed.
- Prefer `Number.isNaN(value)` after conversion or validate raw input before converting.
- Prefer `textContent` for untrusted input; avoid inserting it through `innerHTML`.
- Check that DOM elements exist before attaching listeners when a script can be reused across pages.
- Keep rendering separate from state/logic as projects become larger.
- Add a `README.md` to each project with purpose, features, how to run, and known limitations.
- For interview readiness, be able to explain one design decision, one bug you fixed, and one improvement for every project.

## 13. Suggested next learning sequence

1. Finish/strengthen the Todo App: edit task, filter tasks, persist with `localStorage`, and add accessibility labels.
2. Learn ES modules (`import`/`export`) and organise a project into files.
3. Learn `fetch`, JSON, HTTP status codes, and async/await with a public API.
4. Learn error handling, debugging in DevTools, and basic testing.
5. Build one polished project that combines API data, loading/error states, form validation, and `localStorage`.
6. Move to a framework such as React only after you can confidently explain the DOM, events, state, promises, and modules above.

## Source map

- DOM curriculum and its practical examples: `dom-learning/README.md`, `dom-learning/01-selecting-elements/` through `dom-learning/18-create-todo/`.
- Fundamentals and exercises: `TruthyFalsy.js`, `Array/`, `Loop/`, `Function/`, `date.js`.
- OOP practice: `OPP/`.
- Promise practice: `Advance/promise.js`.
- Small browser projects: `smallProjects/`.
