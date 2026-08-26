// =====================================================
// 17 - ESSENTIAL DOM PROPERTIES IN JAVASCRIPT
// =====================================================
// DOM elements are JavaScript objects with properties you can read and write directly.
// Key properties taught here:
// - value     : Input text or current option value
// - id        : Element unique ID string
// - className : Raw class attribute string
// - classList : Array-like DOMTokenList object for classes
// - checked   : Boolean (true/false) for checkboxes/radio buttons
// - disabled  : Boolean (true/false) to enable/disable inputs/buttons
// - selected  : Boolean for <option> dropdown items
// - href      : Full URL string on <a> tags
// - textContent / innerText / innerHTML
// =====================================================

// Selecting elements
const input = document.getElementById("demo-input");
const checkbox = document.getElementById("demo-checkbox");
const select = document.getElementById("demo-select");
const link = document.getElementById("demo-link");
const para = document.getElementById("demo-para");
const targetBtn = document.getElementById("demo-button");
const outputDiv = document.getElementById("output");

const btnRead = document.getElementById("btn-read-props");
const btnToggle = document.getElementById("btn-toggle-states");
const btnChangeLink = document.getElementById("btn-change-link");

// =====================================================
// 1. READING DOM PROPERTIES
// =====================================================
btnRead.addEventListener("click", () => {
  console.log("Reading DOM Properties:");
  console.log("input.value:", input.value);
  console.log("checkbox.checked:", checkbox.checked);
  console.log("select.value:", select.value);
  console.log("link.href:", link.href);
  console.log("para.id:", para.id);
  console.log("para.className:", para.className);
  console.log("targetBtn.disabled:", targetBtn.disabled);

  outputDiv.textContent = 
    `--- CURRENT DOM PROPERTIES ---\n` +
    `input.value      : "${input.value}"\n` +
    `checkbox.checked : ${checkbox.checked}\n` +
    `select.value     : "${select.value}"\n` +
    `link.href        : "${link.href}"\n` +
    `para.id          : "${para.id}"\n` +
    `para.className   : "${para.className}"\n` +
    `targetBtn.disabled : ${targetBtn.disabled}`;
});

// =====================================================
// 2. CHANGING BOOLEAN PROPERTIES (checked & disabled)
// =====================================================
btnToggle.addEventListener("click", () => {
  // Toggle checkbox checked state
  checkbox.checked = !checkbox.checked;

  // Toggle button disabled state
  targetBtn.disabled = !targetBtn.disabled;
  targetBtn.style.opacity = targetBtn.disabled ? "0.5" : "1";

  outputDiv.textContent = 
    `--- TOGGLED BOOLEAN PROPERTIES ---\n` +
    `checkbox.checked is now : ${checkbox.checked}\n` +
    `targetBtn.disabled is now : ${targetBtn.disabled}`;
});

// =====================================================
// 3. MODIFYING STRING PROPERTIES (href, value, textContent)
// =====================================================
btnChangeLink.addEventListener("click", () => {
  // Update input value
  input.value = "Java Full Stack Developer";

  // Update link href & textContent
  link.href = "https://dev.java";
  link.textContent = "Official Dev Java Portal";

  // Change select dropdown option programmatically
  select.value = "spring"; // Selects <option value="spring">

  outputDiv.textContent = 
    `--- MODIFIED STRING PROPERTIES ---\n` +
    `input.value -> "${input.value}"\n` +
    `link.href   -> "${link.href}"\n` +
    `select.value-> "${select.value}"`;
});

// =====================================================
// QUICK REVISION
// =====================================================
// - element.value       -> Reads or sets text in input fields or select dropdowns
// - element.checked     -> Boolean true/false for checkboxes
// - element.disabled    -> Boolean true/false to disable/enable inputs or buttons
// - element.href        -> Gets or sets absolute URL on link elements
// - element.id          -> Gets or sets element ID string
// - element.className   -> Gets or sets raw class attribute string
// - element.selected    -> Reads or sets option selection state inside <select>
// =====================================================
