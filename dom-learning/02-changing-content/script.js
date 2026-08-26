// =====================================================
// 02 - CHANGING CONTENT IN THE DOM
// =====================================================
// JavaScript provides three main properties to read or change 
// the content inside an HTML element: textContent, innerText, and innerHTML.
// =====================================================

// Selecting our elements
const heading = document.getElementById("demo-heading");
const box = document.getElementById("demo-box");
const outputDiv = document.getElementById("output");

const btnTextContent = document.getElementById("btn-text-content");
const btnInnerText = document.getElementById("btn-inner-text");
const btnInnerHtml = document.getElementById("btn-inner-html");
const btnReset = document.getElementById("btn-reset");

// Store original state for resetting
const originalHTML = box.innerHTML;

// =====================================================
// DOM CONCEPT: textContent
// =====================================================
// textContent gets or sets ALL the raw text inside an element,
// including text inside hidden elements (display: none).
// It does NOT parse HTML tags - HTML tags will be rendered as plain text.
// =====================================================
btnTextContent.addEventListener("click", () => {
  // Reading current textContent (notice it includes hidden text!)
  console.log("Reading textContent:", box.textContent);
  
  // Setting new textContent
  heading.textContent = "Updated with textContent!";
  box.textContent = "New plain text set using textContent. <em>HTML tags will NOT work here!</em>";

  outputDiv.textContent = 
    `Used textContent!\n` +
    `Notice that <em> tags are printed literally as plain text rather than styled as italic.`;
});

// =====================================================
// DOM CONCEPT: innerText
// =====================================================
// innerText gets or sets ONLY the visible text as seen on screen.
// It respects CSS styling (e.g. ignores text hidden with display: none).
// Like textContent, it does NOT parse HTML tags.
// =====================================================
btnInnerText.addEventListener("click", () => {
  // Reading current innerText (ignores hidden text)
  console.log("Reading innerText:", box.innerText);

  // Setting new innerText
  heading.innerText = "Updated with innerText!";
  box.innerText = "New visible text set using innerText.\nSupports line breaks!";

  outputDiv.textContent = 
    `Used innerText!\n` +
    `innerText respects layout & styling. It treats newlines '\\n' as visible breaks.`;
});

// =====================================================
// DOM CONCEPT: innerHTML
// =====================================================
// innerHTML gets or sets the HTML markup INSIDE an element.
// When assigning a string with HTML tags, the browser PARSES 
// and renders actual HTML elements (e.g. <strong>, <em>, <button>).
// WARNING: Do not pass untrusted user input directly into innerHTML to avoid XSS security risks!
// =====================================================
btnInnerHtml.addEventListener("click", () => {
  // Reading current innerHTML
  console.log("Reading innerHTML:", box.innerHTML);

  // Setting new HTML markup
  heading.innerHTML = "Updated with <u>innerHTML</u>!";
  box.innerHTML = `
    <p>This paragraph was added via <strong>innerHTML</strong>!</p>
    <span style="color: #27ae60; font-weight: bold;">✔ Rendered actual styled HTML tags.</span>
  `;

  outputDiv.textContent = 
    `Used innerHTML!\n` +
    `The string containing <strong> and <span> was parsed into real HTML DOM elements.`;
});

// Reset Button Handler
btnReset.addEventListener("click", () => {
  heading.textContent = "Original Heading Title";
  box.innerHTML = originalHTML;
  outputDiv.textContent = "Reset to original state.";
});

// =====================================================
// QUICK REVISION
// =====================================================
// - textContent -> Returns all text (including hidden). Fast, safe plain text.
// - innerText   -> Returns visible text only (respects CSS styling).
// - innerHTML   -> Parses and renders actual HTML tags string into DOM nodes.
// =====================================================
