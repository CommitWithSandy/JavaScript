// =====================================================
// 03 - CHANGING STYLES IN THE DOM
// =====================================================
// The `element.style` property allows you to read or set
// inline CSS styles directly on an HTML element.
//
// CRITICAL RULE: camelCase CSS Properties
// In CSS, property names use kebab-case (e.g. background-color).
// In JavaScript, they are converted to camelCase (e.g. backgroundColor).
//
// Examples:
// background-color  ==>  element.style.backgroundColor
// font-size         ==>  element.style.fontSize
// border-radius     ==>  element.style.borderRadius
// =====================================================

// Selecting elements
const box = document.getElementById("target-box");
const outputDiv = document.getElementById("output");

const btnBg = document.getElementById("btn-bg");
const btnColor = document.getElementById("btn-color");
const btnFont = document.getElementById("btn-font");
const btnSize = document.getElementById("btn-size");
const btnBorder = document.getElementById("btn-border");
const btnReset = document.getElementById("btn-reset");

// =====================================================
// 1. CHANGING BACKGROUND COLOR (backgroundColor)
// =====================================================
btnBg.addEventListener("click", () => {
  // CSS: background-color: #9b59b6;
  box.style.backgroundColor = "#9b59b6";
  
  console.log("Current backgroundColor:", box.style.backgroundColor);
  outputDiv.textContent = `Applied: box.style.backgroundColor = "#9b59b6"`;
});

// =====================================================
// 2. CHANGING TEXT COLOR (color)
// =====================================================
btnColor.addEventListener("click", () => {
  // CSS: color: #f1c40f;
  box.style.color = "#f1c40f";

  console.log("Current text color:", box.style.color);
  outputDiv.textContent = `Applied: box.style.color = "#f1c40f"`;
});

// =====================================================
// 3. CHANGING FONT SIZE (fontSize)
// =====================================================
btnFont.addEventListener("click", () => {
  // CSS: font-size: 22px;
  // Always include CSS units (px, rem, %, etc.) as a string!
  box.style.fontSize = "22px";

  console.log("Current fontSize:", box.style.fontSize);
  outputDiv.textContent = `Applied: box.style.fontSize = "22px"`;
});

// =====================================================
// 4. CHANGING DIMENSIONS (width & height)
// =====================================================
btnSize.addEventListener("click", () => {
  // CSS: width: 220px; height: 220px;
  box.style.width = "220px";
  box.style.height = "220px";

  console.log(`Current size: ${box.style.width} x ${box.style.height}`);
  outputDiv.textContent = `Applied: box.style.width = "220px"; box.style.height = "220px";`;
});

// =====================================================
// 5. CHANGING BORDER (border & borderRadius)
// =====================================================
btnBorder.addEventListener("click", () => {
  // CSS: border: 4px solid #e74c3c; border-radius: 50%;
  box.style.border = "4px solid #e74c3c";
  box.style.borderRadius = "50%"; // turn into a circle!

  outputDiv.textContent = `Applied: box.style.border = "4px solid #e74c3c"; box.style.borderRadius = "50%"`;
});

// =====================================================
// 6. RESETTING STYLES
// =====================================================
btnReset.addEventListener("click", () => {
  // Reset inline style string completely
  box.style.cssText = "";
  outputDiv.textContent = `Reset all inline styles!`;
});

// =====================================================
// QUICK REVISION
// =====================================================
// - element.style.propertyName = "value";
// - Use camelCase: backgroundColor, fontSize, borderRadius, width, height, border
// - Always provide unit strings like "20px", "100%", "2rem"
// - inline styles override external stylesheet styles
// - element.style.cssText = "" clears inline styles
// =====================================================
