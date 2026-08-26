// =====================================================
// 11 - KEYBOARD EVENTS IN THE DOM
// =====================================================
// Keyboard events trigger when a user presses or releases keys on the keyboard.
//
// Key Events:
// 1. keydown : Fires instantly when a key is pressed down. (Fires repeatedly if held down)
// 2. keyup   : Fires when a key is released.
// 3. keypress: DEPRECATED! Do NOT use in modern development as it lacks support for non-character keys.
//
// Useful Event Properties:
// - event.key  : The printable character or key name (e.g. "a", "Enter", "Shift", "ArrowUp")
// - event.code : The physical keyboard code location (e.g. "KeyA", "Enter", "ShiftLeft")
// =====================================================

// Selecting elements
const inputField = document.getElementById("text-input");
const outputDiv = document.getElementById("output");

// Helper function to render keyboard info
function renderKeyInfo(eventType, event) {
  const logMessage = 
    `--- KEYBOARD EVENT LOG ---\n` +
    `Event Type   : ${eventType}\n` +
    `event.key    : "${event.key}"\n` +
    `event.code   : "${event.code}"\n` +
    `Input Value  : "${inputField.value}"\n\n` +
    `NOTE ON DEPRECATION:\n` +
    `Do NOT use 'keypress' anymore. Always use 'keydown' or 'keyup' with event.key and event.code.`;

  outputDiv.textContent = logMessage;
  console.log(`[${eventType}] key: "${event.key}", code: "${event.code}", val: "${inputField.value}"`);
}

// =====================================================
// 1. DOM EVENT: 'keydown'
// =====================================================
// Fires when key is initially pressed down.
// =====================================================
inputField.addEventListener("keydown", (e) => {
  renderKeyInfo("keydown", e);

  // Example: Detect if user pressed 'Enter' key
  if (e.key === "Enter") {
    console.log("User pressed ENTER key! Input value submitted:", inputField.value);
  }
});

// =====================================================
// 2. DOM EVENT: 'keyup'
// =====================================================
// Fires when key is released. At this point, inputField.value contains the updated typed letter!
// =====================================================
inputField.addEventListener("keyup", (e) => {
  renderKeyInfo("keyup", e);
});

// =====================================================
// QUICK REVISION
// =====================================================
// - 'keydown' -> Triggers when key is pressed down (best for shortcut detection like Escape, Enter)
// - 'keyup'   -> Triggers when key is released (best for reading full updated value after key press)
// - 'keypress'-> DEPRECATED - Avoid using!
// - event.key -> Character representation ("Enter", "a", "A", "Backspace")
// - event.code-> Physical key location ("Enter", "KeyA", "Space")
// =====================================================
