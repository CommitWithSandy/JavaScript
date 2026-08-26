// =====================================================
// 07 - REMOVING ELEMENTS FROM THE DOM
// =====================================================
// JavaScript offers two ways to remove elements from the page:
// 1. modern remove(): Called directly on the element itself -> element.remove()
// 2. legacy removeChild(): Called on parent node -> parent.removeChild(childElement)
// =====================================================

// Selecting elements
const list = document.getElementById("my-list");
const outputDiv = document.getElementById("output");

const btnRemoveFirst = document.getElementById("btn-remove-first");
const btnRemoveLast = document.getElementById("btn-remove-last");
const btnRemoveSelected = document.getElementById("btn-remove-selected");

// Allow clicking items to select/highlight them
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // Clear previous selected class
    Array.from(list.children).forEach(item => item.classList.remove("selected"));
    // Highlight clicked item
    e.target.classList.add("selected");
    outputDiv.textContent = `Selected item: "${e.target.textContent}"`;
  }
});

// =====================================================
// 1. DOM CONCEPT: removeChild() (Parent Method)
// =====================================================
// parentNode.removeChild(childNode) removes a child element from its parent.
// Returns the removed child node (so it can be re-inserted elsewhere if needed).
// =====================================================
btnRemoveFirst.addEventListener("click", () => {
  const firstChild = list.firstElementChild; // Get first <li> element

  if (firstChild) {
    // Calling removeChild on parent node passing the child element
    const removedItem = list.removeChild(firstChild);

    console.log("Removed via removeChild():", removedItem);
    outputDiv.textContent = `Used parent.removeChild(): Removed "${removedItem.textContent}"`;
  } else {
    outputDiv.textContent = `No items left to remove!`;
  }
});

// =====================================================
// 2. DOM CONCEPT: remove() (Modern Element Method)
// =====================================================
// element.remove() removes the element directly from the DOM.
// You do NOT need a reference to the parent node!
// Supported in all modern browsers.
// =====================================================
btnRemoveLast.addEventListener("click", () => {
  const lastChild = list.lastElementChild; // Get last <li> element

  if (lastChild) {
    const text = lastChild.textContent;
    
    // Calling remove directly on the element itself!
    lastChild.remove();

    console.log("Removed via remove():", text);
    outputDiv.textContent = `Used element.remove(): Removed "${text}" directly from DOM.`;
  } else {
    outputDiv.textContent = `No items left to remove!`;
  }
});

// =====================================================
// 3. REMOVING A SPECIFIC SELECTED ITEM
// =====================================================
btnRemoveSelected.addEventListener("click", () => {
  const selectedItem = list.querySelector(".selected");

  if (selectedItem) {
    const text = selectedItem.textContent;
    // Modern direct removal
    selectedItem.remove();

    outputDiv.textContent = `Removed selected item: "${text}"`;
  } else {
    outputDiv.textContent = `Please click an item in the list first to select it!`;
  }
});

// =====================================================
// QUICK REVISION
// =====================================================
// - element.remove()            -> Modern approach! Removes element directly. No parent needed.
// - parentNode.removeChild(child)-> Older approach. Requires selecting parent first, returns removed child.
// - list.firstElementChild       -> Gets first HTML element child
// - list.lastElementChild        -> Gets last HTML element child
// =====================================================
