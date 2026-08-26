// =====================================================
// 04 - WORKING WITH HTML ATTRIBUTES
// =====================================================
// HTML elements have attributes like `href`, `src`, `alt`, `title`, `target`, `id`, `class`.
// JavaScript provides four standard methods to manipulate attributes:
// 1. getAttribute(name)
// 2. setAttribute(name, value)
// 3. hasAttribute(name)
// 4. removeAttribute(name)
// =====================================================

// Selecting elements
const link = document.getElementById("my-link");
const image = document.getElementById("my-image");
const outputDiv = document.getElementById("output");

const btnGet = document.getElementById("btn-get");
const btnSet = document.getElementById("btn-set");
const btnHas = document.getElementById("btn-has");
const btnRemove = document.getElementById("btn-remove");

// SVG data URI for green image when updating setAttribute
const newImageSVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'><rect width='100%' height='100%' fill='%232ecc71'/><text x='50%' y='50%' fill='white' dominant-baseline='middle' text-anchor='middle' font-size='16'>Updated Image</text></svg>";

// =====================================================
// DOM CONCEPT: getAttribute(attributeName)
// =====================================================
// getAttribute() reads the current value of the specified attribute.
// Returns a string containing attribute value, or null if attribute doesn't exist.
// =====================================================
btnGet.addEventListener("click", () => {
  const hrefVal = link.getAttribute("href");
  const targetVal = link.getAttribute("target");
  const titleVal = link.getAttribute("title");
  const altVal = image.getAttribute("alt");

  console.log("getAttribute('href'):", hrefVal);
  console.log("getAttribute('title'):", titleVal);

  outputDiv.textContent = 
    `--- READ ATTRIBUTES ---\n` +
    `link href: "${hrefVal}"\n` +
    `link target: "${targetVal}"\n` +
    `link title: "${titleVal}"\n` +
    `image alt: "${altVal}"`;
});

// =====================================================
// DOM CONCEPT: setAttribute(attributeName, value)
// =====================================================
// setAttribute() creates a new attribute or updates the value of an existing one.
// =====================================================
btnSet.addEventListener("click", () => {
  // Update link to open in a new tab (_blank)
  link.setAttribute("target", "_blank");
  link.setAttribute("title", "Opens MDN in a new tab!");
  
  // Update image src, alt, and title
  image.setAttribute("src", newImageSVG);
  image.setAttribute("alt", "Green Box Placeholder");
  image.setAttribute("title", "Updated via setAttribute!");

  outputDiv.textContent = 
    `--- SET ATTRIBUTES ---\n` +
    `Updated link target to "_blank"\n` +
    `Updated link title to "Opens MDN in a new tab!"\n` +
    `Updated image src to new green SVG & alt to "Green Box Placeholder"`;
});

// =====================================================
// DOM CONCEPT: hasAttribute(attributeName)
// =====================================================
// hasAttribute() checks if an attribute exists on an element.
// Returns boolean: true if attribute exists, false otherwise.
// =====================================================
btnHas.addEventListener("click", () => {
  const hasTarget = link.hasAttribute("target");
  const hasDisabled = link.hasAttribute("disabled");

  console.log("link.hasAttribute('target'):", hasTarget);
  console.log("link.hasAttribute('disabled'):", hasDisabled);

  outputDiv.textContent = 
    `--- HAS ATTRIBUTE CHECK ---\n` +
    `link has "target" attribute? -> ${hasTarget}\n` +
    `link has "disabled" attribute? -> ${hasDisabled}`;
});

// =====================================================
// DOM CONCEPT: removeAttribute(attributeName)
// =====================================================
// removeAttribute() completely removes an attribute from an element.
// =====================================================
btnRemove.addEventListener("click", () => {
  link.removeAttribute("target");
  link.removeAttribute("title");

  outputDiv.textContent = 
    `--- REMOVED ATTRIBUTES ---\n` +
    `Removed "target" and "title" attributes from link.\n` +
    `link.hasAttribute("target") is now: ${link.hasAttribute("target")}`;
});

// =====================================================
// QUICK REVISION
// =====================================================
// - getAttribute('name')       -> Gets attribute string value
// - setAttribute('name', 'val')-> Adds or modifies attribute
// - hasAttribute('name')       -> Returns true/false if attribute exists
// - removeAttribute('name')    -> Removes attribute from HTML element
// Common attributes: href, src, alt, title, target, id, class, disabled
// =====================================================
