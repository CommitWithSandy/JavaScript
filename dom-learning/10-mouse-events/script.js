// =====================================================
// 10 - MOUSE EVENTS IN DETAIL
// =====================================================
// Mouse events listen for specific mouse pointer actions:
// - click, dblclick
// - mousedown (button pressed down)
// - mouseup (button released)
// - mousemove (mouse pointer is moving over element)
// - mouseenter vs mouseover
// - mouseleave vs mouseout
// =====================================================

// Selecting elements
const mouseBox = document.getElementById("mouse-box");
const outputDiv = document.getElementById("output");

let mousemoveCount = 0;

// Helper to log mouse event info
function logMouseEvent(eventName, extraInfo = "") {
  console.log(`Mouse Event: [${eventName}] ${extraInfo}`);
  outputDiv.textContent = 
    `Last Event: ${eventName.toUpperCase()}\n` +
    `Details: ${extraInfo}\n\n` +
    `KEY DIFFERENCE TO REMEMBER:\n` +
    `• mouseenter / mouseleave: DO NOT BUBBLE (Triggers only for outer box boundary).\n` +
    `• mouseover / mouseout: DO BUBBLE (Triggers whenever passing over inner child elements).`;
}

// =====================================================
// 1. click & dblclick
// =====================================================
mouseBox.addEventListener("click", (e) => {
  logMouseEvent("click", `Clicked at position X: ${e.clientX}, Y: ${e.clientY}`);
});

mouseBox.addEventListener("dblclick", () => {
  logMouseEvent("dblclick", "Double clicked box!");
});

// =====================================================
// 2. mousedown & mouseup
// =====================================================
// mousedown fires instantly when mouse button is PRESSED DOWN.
// mouseup fires when mouse button is RELEASED.
// =====================================================
mouseBox.addEventListener("mousedown", () => {
  mouseBox.style.backgroundColor = "#e74c3c"; // Turn red on press
  logMouseEvent("mousedown", "Mouse button pressed down!");
});

mouseBox.addEventListener("mouseup", () => {
  mouseBox.style.backgroundColor = "#3498db"; // Restore blue on release
  logMouseEvent("mouseup", "Mouse button released!");
});

// =====================================================
// 3. mousemove
// =====================================================
// Fires continuously whenever the mouse cursor moves inside element.
// =====================================================
mouseBox.addEventListener("mousemove", (e) => {
  mousemoveCount++;
  // Only log every 10th move to prevent excessive UI lag
  if (mousemoveCount % 10 === 0) {
    logMouseEvent("mousemove", `Cursor Pos inside box -> X: ${e.offsetX}, Y: ${e.offsetY}`);
  }
});

// =====================================================
// 4. mouseenter vs mouseover
// =====================================================
// - mouseenter: Fires ONLY when cursor enters mouseBox boundary. (Does NOT bubble)
// - mouseover: Fires when cursor enters mouseBox OR moves onto any inner child element! (BUBBLES)
// =====================================================
mouseBox.addEventListener("mouseenter", () => {
  logMouseEvent("mouseenter", "Cursor entered outer mouseBox boundary!");
});

mouseBox.addEventListener("mouseover", (e) => {
  console.log("mouseover triggered on target:", e.target);
});

// =====================================================
// 5. mouseleave vs mouseout
// =====================================================
// - mouseleave: Fires ONLY when cursor leaves mouseBox boundary completely. (Does NOT bubble)
// - mouseout: Fires when cursor leaves mouseBox OR leaves an inner child element! (BUBBLES)
// =====================================================
mouseBox.addEventListener("mouseleave", () => {
  logMouseEvent("mouseleave", "Cursor left mouseBox boundary completely!");
});

// =====================================================
// QUICK REVISION
// =====================================================
// - mousedown / mouseup -> Button press and release events
// - click / dblclick    -> Single click and double click
// - mousemove           -> Fires continuously while mouse moves
// - mouseenter / mouseleave -> Clean hover detection (NO BUBBLING)
// - mouseover / mouseout   -> Bubbles up from child elements
// =====================================================
