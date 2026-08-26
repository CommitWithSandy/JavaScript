// =====================================================
// 15 - EVENT DELEGATION IN THE DOM
// =====================================================
// WHAT IS EVENT DELEGATION?
// Event Delegation is a pattern where instead of attaching an event listener 
// to every individual child element, you attach ONE listener to a parent element.
//
// WHY IS IT SO USEFUL?
// 1. Memory Efficiency: Only 1 event listener created instead of hundreds.
// 2. Dynamic Elements: Works automatically for newly added items created later in JS!
// =====================================================

// Selecting elements
const fruitList = document.getElementById("fruit-list");
const itemInput = document.getElementById("item-input");
const btnAdd = document.getElementById("btn-add");
const outputDiv = document.getElementById("output");

// =====================================================
// DOM CONCEPT: Event Delegation Handler on Parent <ul id="fruit-list">
// =====================================================
// We attach ONLY ONE click listener to fruitList!
// We use event.target and target.closest() to identify what was clicked.
// =====================================================
fruitList.addEventListener("click", (event) => {
  // Check if clicked element was a Delete button
  if (event.target.classList.contains("btn-delete")) {
    // Find nearest ancestor <li> tag containing the delete button
    const liItem = event.target.closest("li");
    const itemName = liItem.querySelector("span").textContent;

    // Delete the <li> item
    liItem.remove();

    console.log(`Delegated event deleted item: "${itemName}"`);
    outputDiv.textContent = 
      `--- EVENT DELEGATION DELETED ITEM ---\n` +
      `Deleted item: "${itemName}"\n` +
      `Notice: We did NOT attach a listener to this button directly! The parent <ul> handled it.`;
  }
  // If clicked elsewhere inside <li>
  else if (event.target.tagName === "LI" || event.target.tagName === "SPAN") {
    const liItem = event.target.closest("li");
    const itemName = liItem.querySelector("span").textContent;
    outputDiv.textContent = `Clicked list item row: "${itemName}"`;
  }
});

// =====================================================
// ADDING DYNAMIC ITEMS TO PROVE EVENT DELEGATION WORKS
// =====================================================
btnAdd.addEventListener("click", () => {
  const value = itemInput.value.trim();

  if (value !== "") {
    // Create new <li> element
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span>${value}</span> <button class="btn-delete">Delete</button>`;
    
    // Append to list
    fruitList.append(newLi);

    itemInput.value = ""; // clear input
    console.log(`Added new item: "${value}"`);
    
    outputDiv.textContent = 
      `Added dynamic item: "${value}".\n` +
      `Try clicking its Delete button! Event delegation handles it automatically without attaching new listeners!`;
  } else {
    outputDiv.textContent = "Please enter an item name first!";
  }
});

// =====================================================
// QUICK REVISION
// =====================================================
// - Event Delegation -> Single event listener on parent element to manage child events.
// - Relies on Event Bubbling (child click events bubble up to parent).
// - event.target -> Identifies exact element clicked.
// - event.target.classList.contains('btn-class') or target.matches('selector') -> Filters targeted child.
// - element.closest('li') -> Navigates up from child to container element.
// - Eliminates need to re-bind event listeners when adding new DOM nodes dynamically!
// =====================================================
