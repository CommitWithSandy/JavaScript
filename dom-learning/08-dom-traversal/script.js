// =====================================================
// 08 - DOM TRAVERSAL
// =====================================================
// DOM Traversal means moving through the DOM tree:
// - Upwards: parentElement, closest()
// - Downwards: children, childNodes, firstElementChild, lastElementChild
// - Sideways: nextElementSibling, previousElementSibling
// =====================================================

// Selecting reference elements
const parentContainer = document.getElementById("parent-container");
const pMiddle = document.getElementById("p-middle");
const outputDiv = document.getElementById("output");

// Helper to highlight targeted element
function highlight(element) {
  // Clear existing highlights
  document.querySelectorAll(".highlight-node").forEach(el => el.classList.remove("highlight-node"));
  if (element && element.classList) {
    element.classList.add("highlight-node");
  }
}

// =====================================================
// 1. TRAVERSING UPWARDS: parentElement
// =====================================================
// parentElement returns the immediate parent HTML element node.
// =====================================================
document.getElementById("btn-parent").addEventListener("click", () => {
  const parent = pMiddle.parentElement;
  highlight(parent);

  console.log("pMiddle.parentElement:", parent);
  outputDiv.textContent = 
    `NAVIGATING UP:\n` +
    `pMiddle.parentElement -> ${parent.tagName}#${parent.id} (Class: "${parent.className}")`;
});

// =====================================================
// 2. TRAVERSING DOWNWARDS: children vs childNodes
// =====================================================
// IMPORTANT DIFFERENCE:
// - children: Returns HTMLCollection of ONLY HTML element nodes (ignores text/whitespace).
// - childNodes: Returns NodeList of ALL nodes, including text nodes (newlines/spaces) & comments!
// =====================================================
document.getElementById("btn-children").addEventListener("click", () => {
  const elementChildren = parentContainer.children; // HTML element nodes only
  const allChildNodes = parentContainer.childNodes; // HTML + Text/Space nodes

  console.log("children (Element nodes only):", elementChildren);
  console.log("childNodes (Includes text nodes):", allChildNodes);

  outputDiv.textContent = 
    `NAVIGATING DOWN:\n` +
    `parent.children.length (Only HTML tags): ${elementChildren.length}\n` +
    `parent.childNodes.length (Includes whitespace/text nodes): ${allChildNodes.length}\n\n` +
    `Notice how childNodes counts newline text spaces between HTML tags!`;
});

// =====================================================
// 3. FIRST & LAST CHILD ELEMENTS: firstElementChild & lastElementChild
// =====================================================
// firstElementChild returns the first HTML element child.
// lastElementChild returns the last HTML element child.
// =====================================================
document.getElementById("btn-first-last").addEventListener("click", () => {
  const firstChild = parentContainer.firstElementChild;
  const lastChild = parentContainer.lastElementChild;

  highlight(firstChild);

  console.log("firstElementChild:", firstChild);
  console.log("lastElementChild:", lastChild);

  outputDiv.textContent = 
    `FIRST & LAST CHILD ELEMENTS:\n` +
    `firstElementChild -> "${firstChild.textContent}"\n` +
    `lastElementChild -> "${lastChild.textContent}"`;
});

// =====================================================
// 4. TRAVERSING SIDEWAYS: nextElementSibling & previousElementSibling
// =====================================================
// nextElementSibling returns the next sibling element node at the same level.
// previousElementSibling returns the previous sibling element node.
// =====================================================
document.getElementById("btn-siblings").addEventListener("click", () => {
  const nextSibling = pMiddle.nextElementSibling;
  const prevSibling = pMiddle.previousElementSibling;

  highlight(nextSibling);

  console.log("pMiddle.nextElementSibling:", nextSibling);
  console.log("pMiddle.previousElementSibling:", prevSibling);

  outputDiv.textContent = 
    `NAVIGATING SIBLINGS (Relative to p#p-middle):\n` +
    `previousElementSibling -> "${prevSibling.textContent}"\n` +
    `nextElementSibling -> "${nextSibling.textContent}"`;
});

// =====================================================
// 5. ANCESTOR LOOKUP: closest(selector)
// =====================================================
// closest() searches UP the DOM tree (including the element itself)
// to find the nearest ancestor element matching the CSS selector.
// Extremely useful in event handling!
// =====================================================
document.getElementById("btn-closest").addEventListener("click", () => {
  // Starting at pMiddle, find closest ancestor with class '.container'
  const closestContainer = pMiddle.closest(".container");
  highlight(closestContainer);

  console.log("pMiddle.closest('.container'):", closestContainer);

  outputDiv.textContent = 
    `LOOKING UP ANCESTOR:\n` +
    `pMiddle.closest(".container") -> Found div.${closestContainer.className}`;
});

// =====================================================
// QUICK REVISION
// =====================================================
// - element.parentElement        -> Immediate parent element
// - element.children             -> HTMLCollection of child HTML elements (no text nodes)
// - element.childNodes           -> NodeList of all child nodes (includes text/spaces)
// - element.firstElementChild    -> First child element
// - element.lastElementChild     -> Last child element
// - element.nextElementSibling   -> Next sibling element
// - element.previousElementSibling -> Previous sibling element
// - element.closest('selector')  -> Nearest matching ancestor up the DOM tree
// =====================================================
