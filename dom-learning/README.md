# JavaScript DOM Learning

A comprehensive, beginner-friendly JavaScript DOM (Document Object Model) learning and revision project tailored for Full Stack Java developers.

---

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface for HTML and XML documents. It represents the page as a structured tree of nodes/objects (such as `document`, `div`, `p`, `button`) so that programming languages like JavaScript can read, change, add, or delete elements, styles, and content dynamically.

---

## How to Run & Practice

1. Open the `dom-learning` folder in VS Code.
2. Open any `index.html` file inside any of the 18 lesson folders directly in your Web Browser (or use Live Server).
3. Open **Browser DevTools** (Press `F12` or `Ctrl + Shift + I` / `Cmd + Option + I`).
4. Select the **Console** tab to view log outputs and inspect actual DOM nodes.
5. Inspect `script.js` in each folder to read heavily commented educational explanations.
6. Modify the code and experiment with your own JavaScript changes!

---

## Learning Roadmap

| # | Topic | What You Learn | Key Methods / Properties | Practice Task | Difficulty |
|---|---|---|---|---|---|
| **01** | [Selecting Elements](./01-selecting-elements/) | Finding HTML elements in the DOM tree | `getElementById`, `querySelector`, `querySelectorAll`, `getElementsByClassName`, `getElementsByTagName` | Select elements by ID, class, and tag name | Beginner |
| **02** | [Changing Content](./02-changing-content/) | Updating text and HTML markup | `textContent`, `innerText`, `innerHTML` | Compare plain text updating vs innerHTML rendering | Beginner |
| **03** | [Changing Styles](./03-changing-styles/) | Modifying inline CSS styles | `element.style`, `backgroundColor`, `fontSize`, `borderRadius` | Change box background, size, and border dynamically | Beginner |
| **04** | [Attributes](./04-attributes/) | Reading & modifying HTML attributes | `getAttribute`, `setAttribute`, `hasAttribute`, `removeAttribute` | Change link `href`, `target`, image `src`, `alt`, and `title` | Beginner |
| **05** | [ClassList](./05-classlist/) | Managing CSS class names cleanly | `classList.add`, `remove`, `toggle`, `contains`, `replace` | Toggle visual highlight state on a box | Beginner |
| **06** | [Create Elements](./06-create-elements/) | Building & inserting new DOM nodes | `createElement`, `append`, `appendChild`, `prepend` | Dynamically create list items and insert at top & bottom | Beginner |
| **07** | [Remove Elements](./07-remove-elements/) | Deleting nodes from the document | `element.remove()`, `parent.removeChild()` | Compare modern direct `.remove()` vs `.removeChild()` | Beginner |
| **08** | [DOM Traversal](./08-dom-traversal/) | Navigating up, down, & sideways in DOM | `parentElement`, `children`, `childNodes`, `nextElementSibling`, `closest` | Highlight parent, siblings, and closest container | Intermediate |
| **09** | [Events](./09-events/) | Listening for user interactions | `addEventListener`, `click`, `dblclick`, `mouseenter`, `mouseleave` | Attach click and hover handlers without inline HTML | Beginner |
| **10** | [Mouse Events](./10-mouse-events/) | Capturing pointer movement & clicks | `mousedown`, `mouseup`, `mousemove`, `mouseenter` vs `mouseover` | Hover over outer & inner boxes to study bubbling | Intermediate |
| **11** | [Keyboard Events](./11-keyboard-events/) | Capturing keyboard input & keys | `keydown`, `keyup`, `event.key`, `event.code` | Display pressed key name, code, and live text input value | Beginner |
| **12** | [Form Events](./12-form-events/) | Handling forms without page reload | `submit`, `input`, `change`, `focus`, `blur`, `preventDefault` | Build a form with live feedback and handle submission | Intermediate |
| **13** | [Event Object](./13-event-object/) | Understanding the `(e)` event parameter | `event.target`, `event.currentTarget`, `event.clientX`, `event.clientY` | Compare exact click target vs element holding listener | Intermediate |
| **14** | [Event Bubbling](./14-event-bubbling/) | Event propagation up ancestor nodes | Bubbling order (Child → Parent → Grandparent), `event.stopPropagation()` | Click nested buttons to trace execution order | Intermediate |
| **15** | [Event Delegation](./15-event-delegation/) | Efficient event handling on parents | Single listener on `<ul>`, `event.target`, `closest()` | Add dynamic items and delete them using parent handler | Intermediate |
| **16** | [Data Attributes](./16-data-attributes/) | Custom HTML `data-*` attributes | `element.dataset.id`, `dataset.name`, `setAttribute("data-*", val)` | Read and update custom user metadata on card elements | Beginner |
| **17** | [DOM Properties](./17-dom-properties/) | Reading & mutating object properties | `value`, `checked`, `disabled`, `selected`, `href`, `className` | Toggle checkbox `checked` and button `disabled` states | Beginner |
| **18** | [Create Todo App](./18-create-todo/) | Complete synthesis project | `createElement`, `append`, `remove`, `classList.toggle`, delegation | Build a complete Todo app with validation & delegation | Intermediate |

---

## DOM Cheat Sheet

### SELECTING ELEMENTS
```js
document.getElementById("main-title")              // Single element by ID
document.querySelector(".card")                   // FIRST matching element (CSS selector)
document.querySelectorAll(".card")                // Static NodeList of ALL matching elements
document.getElementsByClassName("card")           // Live HTMLCollection by class name
document.getElementsByTagName("p")                // Live HTMLCollection by HTML tag name
```

### CONTENT
```js
element.textContent = "Plain text content";        // Fast, safe plain text (includes hidden text)
element.innerText   = "Visible text content";      // Visible text only (respects CSS styling)
element.innerHTML   = "<strong>HTML Markup</strong>"; // Parses string as actual HTML nodes
```

### STYLES & CLASSES
```js
element.style.backgroundColor = "#3498db";        // CamelCase inline style property
element.style.fontSize = "18px";                  // Include unit string (px, rem, %)
element.classList.add("active");                  // Add CSS class
element.classList.remove("active");               // Remove CSS class
element.classList.toggle("highlight");            // Toggle class on/off (returns boolean)
element.classList.contains("active");             // Returns true/false
element.classList.replace("old", "new");          // Replaces old class with new class
```

### ATTRIBUTES
```js
element.getAttribute("href")                      // Read attribute value
element.setAttribute("target", "_blank")          // Set/create attribute
element.hasAttribute("disabled")                  // Returns true/false
element.removeAttribute("title")                  // Removes attribute
```

### CREATING ELEMENTS
```js
const newLi = document.createElement("li");       // Create element in memory
newLi.textContent = "New Item";                   // Set content
parent.append(newLi);                             // Append to bottom of parent
parent.prepend(newLi);                            // Prepend to top of parent
parent.appendChild(newLi);                        // Legacy append at end
```

### REMOVING ELEMENTS
```js
element.remove();                                 // Modern direct element removal
parent.removeChild(childElement);                 // Legacy removal via parent
```

### DOM TRAVERSAL
```js
element.parentElement                             // Immediate parent element
element.children                                  // HTMLCollection of child element tags
element.childNodes                                // NodeList of all children (includes text/spaces)
element.firstElementChild                         // First HTML element child
element.lastElementChild                          // Last HTML element child
element.nextElementSibling                        // Next sibling element node
element.previousElementSibling                    // Previous sibling element node
element.closest(".container")                     // Nearest matching ancestor up tree
```

### EVENTS
```js
element.addEventListener("click", (event) => {    // Modern event listener binding
  console.log("Event triggered!", event);
});
element.removeEventListener("click", handlerFunc);
```

### COMMON EVENT TYPES
- **Mouse**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseenter`, `mouseleave`, `mouseover`, `mouseout`, `mousemove`
- **Keyboard**: `keydown`, `keyup` *(Note: `keypress` is deprecated)*
- **Form**: `submit`, `input`, `change`, `focus`, `blur`

### EVENT OBJECT & CONTROL
```js
event.target                                      // Exact element clicked
event.currentTarget                               // Element holding addEventListener handler
event.type                                        // Name of event (e.g. 'click')
event.key                                         // Keyboard key character ("Enter", "a")
event.code                                        // Physical key code ("KeyA", "Space")
event.clientX / event.clientY                     // Cursor position in viewport window
event.preventDefault()                            // Cancels default browser action (e.g. form refresh)
event.stopPropagation()                           // Stops event bubbling up to parent ancestors
```

### CUSTOM DATA ATTRIBUTES (`data-*`)
```html
<!-- HTML -->
<div data-id="101" data-user-role="Admin"></div>
```
```js
// JavaScript
element.dataset.id                                // "101"
element.dataset.userRole                          // "Admin" (data-user-role becomes camelCase)
element.dataset.id = "202";                       // Mutate value directly
```
