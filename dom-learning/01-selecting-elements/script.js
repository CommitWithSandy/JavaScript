// =====================================================
// 01 - SELECTING ELEMENTS IN THE DOM
// =====================================================
// In JavaScript, we first need to select elements from 
// the HTML document before we can change or interact with them.
// =====================================================

// =====================================================
// DOM CONCEPT: document.getElementById()
// =====================================================
// getElementById() selects a SINGLE element using its unique id.
// Returns: The single HTML element object, or null if not found.
// =====================================================
const mainHeading = document.getElementById("main-heading");
console.log("1. getElementById('main-heading'):", mainHeading);

// =====================================================
// DOM CONCEPT: document.querySelector()
// =====================================================
// querySelector() selects the FIRST element matching a CSS selector.
// You pass standard CSS selectors: '#id', '.class', 'tag', etc.
// Returns: First matching element object, or null if none found.
// =====================================================
const firstCard = document.querySelector(".item-card");
console.log("2. querySelector('.item-card') [First match only]:", firstCard);

// =====================================================
// DOM CONCEPT: document.querySelectorAll()
// =====================================================
// querySelectorAll() selects ALL elements matching a CSS selector.
// Returns: A static NodeList (array-like collection) of matching elements.
// You can use array methods like .forEach() on a NodeList.
// =====================================================
const allCardsNodeList = document.querySelectorAll(".item-card");
console.log("3. querySelectorAll('.item-card') [NodeList]:", allCardsNodeList);

// =====================================================
// DOM CONCEPT: document.getElementsByClassName()
// =====================================================
// getElementsByClassName() selects all elements with a specific class name.
// Returns: A live HTMLCollection of elements.
// Note: HTMLCollection does NOT have built-in .forEach() method!
// =====================================================
const allCardsCollection = document.getElementsByClassName("item-card");
console.log("4. getElementsByClassName('item-card') [HTMLCollection]:", allCardsCollection);

// =====================================================
// DOM CONCEPT: document.getElementsByTagName()
// =====================================================
// getElementsByTagName() selects all elements with a given HTML tag (e.g. 'div', 'p', 'h2').
// Returns: A live HTMLCollection of matching element tags.
// =====================================================
const allParagraphs = document.getElementsByTagName("p");
console.log("5. getElementsByTagName('p'):", allParagraphs);

// Hooking up the button to display these selection details on the web page
const selectBtn = document.getElementById("btn-select");
const outputDiv = document.getElementById("output");

selectBtn.addEventListener("click", () => {
  outputDiv.textContent = 
    `--- SELECTION RESULTS ---\n` +
    `1. getElementById("main-heading") -> Text: "${mainHeading.textContent}"\n` +
    `2. querySelector(".item-card") -> Selected 1st card text: "${firstCard.textContent}"\n` +
    `3. querySelectorAll(".item-card") -> Total cards found (NodeList): ${allCardsNodeList.length}\n` +
    `4. getElementsByClassName("item-card") -> Total cards (HTMLCollection): ${allCardsCollection.length}\n` +
    `5. getElementsByTagName("p") -> Total <p> elements: ${allParagraphs.length}\n\n` +
    `Check your browser DevTools Console (F12) to inspect the actual DOM Node objects!`;
});

// =====================================================
// QUICK REVISION
// =====================================================
// - getElementById('id')           -> Single element by ID
// - querySelector('css-selector')  -> FIRST matching element
// - querySelectorAll('css-selector')-> NodeList of ALL matching elements (supports .forEach)
// - getElementsByClassName('class')-> HTMLCollection of matching elements (live collection)
// - getElementsByTagName('tag')    -> HTMLCollection of all matching HTML tags
// =====================================================
