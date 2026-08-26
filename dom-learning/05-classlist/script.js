// =====================================================
// 05 - CLASSLIST API IN THE DOM
// =====================================================
// The `element.classList` property provides a modern, convenient API
// to manipulate CSS class names on an HTML element.
//
// Common classList methods:
// 1. classList.add('className')
// 2. classList.remove('className')
// 3. classList.toggle('className')
// 4. classList.contains('className')
// 5. classList.replace('oldClass', 'newClass')
// =====================================================

// Select elements
const box = document.getElementById("demo-box");
const outputDiv = document.getElementById("output");

const btnAdd = document.getElementById("btn-add");
const btnRemove = document.getElementById("btn-remove");
const btnToggle = document.getElementById("btn-toggle");
const btnContains = document.getElementById("btn-contains");
const btnReplace = document.getElementById("btn-replace");
const btnReset = document.getElementById("btn-reset");

// Helper function to show current classes
function updateOutput(message) {
  outputDiv.textContent = 
    `${message}\n` +
    `Current className: "${box.className}"\n` +
    `classList contents: [${Array.from(box.classList).join(", ")}]`;
}

// =====================================================
// 1. DOM CONCEPT: classList.add()
// =====================================================
// add() adds one or more specified class names to the element.
// If the class already exists, it is ignored (no duplicates).
// =====================================================
btnAdd.addEventListener("click", () => {
  box.classList.add("active");
  console.log("Added 'active'. Current classes:", box.className);
  updateOutput("Executed: box.classList.add('active')");
});

// =====================================================
// 2. DOM CONCEPT: classList.remove()
// =====================================================
// remove() removes one or more specified class names from the element.
// =====================================================
btnRemove.addEventListener("click", () => {
  box.classList.remove("active");
  console.log("Removed 'active'. Current classes:", box.className);
  updateOutput("Executed: box.classList.remove('active')");
});

// =====================================================
// 3. DOM CONCEPT: classList.toggle()
// =====================================================
// toggle() toggles a class on/off:
// - If class exists -> removes it
// - If class does NOT exist -> adds it
// Returns boolean: true if class is now present, false if removed.
// =====================================================
btnToggle.addEventListener("click", () => {
  const isPresent = box.classList.toggle("highlight");
  console.log("Toggled 'highlight'. Now present?:", isPresent);
  updateOutput(`Executed: box.classList.toggle('highlight') -> Class present: ${isPresent}`);
});

// =====================================================
// 4. DOM CONCEPT: classList.contains()
// =====================================================
// contains() checks if the element has a specific class name.
// Returns boolean: true if present, false if absent.
// =====================================================
btnContains.addEventListener("click", () => {
  const hasActive = box.classList.contains("active");
  console.log("Contains 'active'?:", hasActive);
  updateOutput(`Executed: box.classList.contains('active') -> Result: ${hasActive}`);
});

// =====================================================
// 5. DOM CONCEPT: classList.replace()
// =====================================================
// replace('oldClass', 'newClass') replaces an existing class with a new one.
// Returns boolean: true if oldClass was found and replaced, false otherwise.
// =====================================================
btnReplace.addEventListener("click", () => {
  const replaced = box.classList.replace("active", "highlight");
  console.log("Replaced 'active' with 'highlight'?:", replaced);
  updateOutput(`Executed: box.classList.replace('active', 'highlight') -> Successful?: ${replaced}`);
});

// Reset Button
btnReset.addEventListener("click", () => {
  box.className = "box";
  updateOutput("Reset classes back to default.");
});

// =====================================================
// QUICK REVISION
// =====================================================
// - classList.add('class')          -> Adds class
// - classList.remove('class')       -> Removes class
// - classList.toggle('class')       -> Toggles class on/off (adds if missing, removes if present)
// - classList.contains('class')     -> Returns true/false if class exists
// - classList.replace('old', 'new') -> Replaces old class with new class
// Preferred over modifying element.className string manually!
// =====================================================
