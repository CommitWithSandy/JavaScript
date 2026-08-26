// =====================================================
// 06 - CREATING DOM ELEMENTS
// =====================================================
// Creating an element dynamically involves 3 steps:
// 1. Create element in memory: document.createElement('tagName')
// 2. Configure element properties: textContent, classList, attributes
// 3. Attach element to DOM: append(), appendChild(), or prepend()
// =====================================================

// Selecting elements
const list = document.getElementById("my-list");
const outputDiv = document.getElementById("output");

const btnAppend = document.getElementById("btn-append");
const btnPrepend = document.getElementById("btn-prepend");

let itemCounter = 2; // Counter to generate unique text

// =====================================================
// DOM CONCEPT: document.createElement() & append() / appendChild()
// =====================================================
// - document.createElement('li'): Creates a new <li> node in memory.
// - parent.appendChild(child): Appends child node to the end of parent.
// - parent.append(...nodesOrStrings): Modern method! Can append multiple nodes AND strings to parent.
// =====================================================
btnAppend.addEventListener("click", () => {
  // Step 1: Create a new <li> element
  const newItem = document.createElement("li");

  // Step 2: Set content, CSS class, and attributes
  newItem.textContent = `Appended Item ${itemCounter++}`;
  newItem.classList.add("custom-item");
  newItem.setAttribute("data-created-by", "append");

  // Step 3: Insert at the END (bottom) of the list
  list.append(newItem); // Or list.appendChild(newItem);

  console.log("Appended new item node:", newItem);
  outputDiv.textContent = `Created and appended item to the END of the list using list.append()`;
});

// =====================================================
// DOM CONCEPT: prepend()
// =====================================================
// parent.prepend(...nodesOrStrings) inserts new nodes or text
// at the VERY BEGINNING (top) of the parent element, before existing child nodes.
// =====================================================
btnPrepend.addEventListener("click", () => {
  // Step 1: Create element
  const newItem = document.createElement("li");

  // Step 2: Configure element
  newItem.textContent = `Prepended Item ${itemCounter++} (Top)`;
  newItem.classList.add("custom-item");
  newItem.style.backgroundColor = "#e8f8f5";
  newItem.setAttribute("data-created-by", "prepend");

  // Step 3: Insert at the BEGINNING (top) of the list
  list.prepend(newItem);

  console.log("Prepended new item node:", newItem);
  outputDiv.textContent = `Created and prepended item to the TOP of the list using list.prepend()`;
});

// =====================================================
// QUICK REVISION
// =====================================================
// - document.createElement('tag')  -> Creates empty element node in memory
// - element.textContent = "Text"   -> Sets text inside new element
// - element.classList.add('class') -> Sets CSS styling class
// - parent.append(newElement)      -> Inserts element at end of parent (bottom)
// - parent.appendChild(newElement) -> Older method to insert element at end
// - parent.prepend(newElement)     -> Inserts element at start of parent (top)
// =====================================================
