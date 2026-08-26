// =====================================================
// 09 - DOM EVENTS & EVENT LISTENERS
// =====================================================
// Events are signals sent by the browser when a user interacts with the page 
// (e.g. clicking a button, moving mouse, pressing a key).
//
// NEVER USE inline HTML event handlers (e.g., onclick="myFunc()").
// ALWAYS USE: element.addEventListener(eventType, callbackFunction)
//
// Benefits of addEventListener():
// 1. Keeps JavaScript separated from HTML layout.
// 2. Allows multiple listeners on the same element for the same event.
// =====================================================

// Selecting elements
const btnClick = document.getElementById("btn-click");
const btnDblClick = document.getElementById("btn-dblclick");
const hoverCard = document.getElementById("hover-card");
const outputDiv = document.getElementById("output");

// Helper to log event messages
function logEvent(message) {
  console.log("EVENT:", message);
  outputDiv.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
}

// =====================================================
// 1. DOM EVENT: 'click'
// =====================================================
// Fires when an element is clicked with mouse or activated via enter key.
// =====================================================
btnClick.addEventListener("click", () => {
  logEvent("Single 'click' event triggered on 'Single Click Button'!");
});

// =====================================================
// 2. DOM EVENT: 'dblclick'
// =====================================================
// Fires when an element is rapidly clicked TWICE in succession.
// =====================================================
btnDblClick.addEventListener("dblclick", () => {
  logEvent("Double click ('dblclick') event triggered on 'Double Click Button'!");
});

// =====================================================
// 3. DOM EVENT: 'mouseenter'
// =====================================================
// Fires when the mouse pointer moves onto an element.
// =====================================================
hoverCard.addEventListener("mouseenter", () => {
  hoverCard.style.backgroundColor = "#2ecc71";
  hoverCard.style.color = "white";
  logEvent("'mouseenter' event: Mouse entered hover card!");
});

// =====================================================
// 4. DOM EVENT: 'mouseleave'
// =====================================================
// Fires when the mouse pointer leaves an element.
// =====================================================
hoverCard.addEventListener("mouseleave", () => {
  hoverCard.style.backgroundColor = "#e2e8f0";
  hoverCard.style.color = "#334155";
  logEvent("'mouseleave' event: Mouse left hover card!");
});

// We can attach multiple event listeners to the same element!
hoverCard.addEventListener("click", () => {
  logEvent("Card clicked!");
});

// =====================================================
// QUICK REVISION
// =====================================================
// - element.addEventListener('event', handlerFunc) -> Modern way to handle events
// - 'click'      -> Single click
// - 'dblclick'   -> Double click
// - 'mouseenter' -> Mouse moves inside element boundary
// - 'mouseleave' -> Mouse moves outside element boundary
// - Avoid inline event attributes like onclick=""!
// =====================================================
