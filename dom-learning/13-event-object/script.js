// =====================================================
// 13 - THE EVENT OBJECT (e / event)
// =====================================================
// Whenever an event fires, the browser automatically creates an Event object
// containing rich details about what happened and passes it to the callback function.
//
// Key Properties of Event Object:
// - event.target       : The EXACT element where the user clicked/interacted.
// - event.currentTarget: The element handling the listener (where addEventListener was called).
// - event.type         : Name of event ('click', 'keydown', etc.).
// - event.clientX / Y  : Coordinates relative to viewport window.
// - event.preventDefault()  : Prevents default browser action.
// - event.stopPropagation() : Stops event from bubbling up the DOM tree.
// =====================================================

// Selecting elements
const parentBox = document.getElementById("parent-box");
const childBtn = document.getElementById("child-btn");
const outputDiv = document.getElementById("output");

// =====================================================
// DEMONSTRATING target VS currentTarget
// =====================================================
// Listener attached ONLY to parentBox!
// =====================================================
parentBox.addEventListener("click", (event) => {
  // event.target = actual element clicked (could be <h3>, <p>, or <button>)
  const targetTag = event.target.tagName;
  const targetId = event.target.id || "None";
  
  // event.currentTarget = ALWAYS div#parent-box (where listener lives)
  const currentTargetTag = event.currentTarget.tagName;
  const currentTargetId = event.currentTarget.id;

  console.log("Event Object:", event);
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);

  outputDiv.textContent = 
    `--- EVENT OBJECT INSPECTION ---\n` +
    `event.type          : "${event.type}"\n` +
    `event.target        : <${targetTag}> id="${targetId}" (The exact element you clicked)\n` +
    `event.currentTarget : <${currentTargetTag}> id="${currentTargetId}" (The container holding listener)\n` +
    `Mouse Position      : clientX = ${event.clientX}px, clientY = ${event.clientY}px\n\n` +
    `CRITICAL DISTINCTION:\n` +
    `target = exact origin of click | currentTarget = listener owner`;
});

// =====================================================
// DEMONSTRATING event.stopPropagation()
// =====================================================
// If we want clicking the red child button to NOT trigger parentBox listener:
// =====================================================
childBtn.addEventListener("click", (event) => {
  // Uncomment line below to stop click from bubbling to parent container:
  // event.stopPropagation();
  console.log("Child button listener fired!");
});

// Window listener to demonstrate key capture
window.addEventListener("keydown", (e) => {
  console.log(`Global Key Press -> event.key: "${e.key}"`);
});

// =====================================================
// QUICK REVISION
// =====================================================
// - event.target        -> Element that originated the event (where cursor clicked)
// - event.currentTarget -> Element running the addEventListener handler
// - event.type         -> String event name ('click', 'submit', etc.)
// - event.clientX/Y    -> Pixel coordinates relative to browser viewport
// - event.preventDefault()  -> Cancels default browser behavior (e.g. form refresh)
// - event.stopPropagation() -> Stops event bubbling up to parent ancestors
// =====================================================
