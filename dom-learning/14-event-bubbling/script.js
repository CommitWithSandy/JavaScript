// =====================================================
// 14 - EVENT BUBBLING & PROPAGATION
// =====================================================
// WHAT IS EVENT BUBBLING?
// When an event happens on an element (e.g. clicking a button),
// the event first runs handlers on that element, then on its parent,
// then all the way up on other ancestors up to the document root!
//
// Order of Execution:
// Child Button (Target)  ==>  Parent Div  ==>  Grandparent Div
// =====================================================

// Selecting elements
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const childNormal = document.getElementById("child-normal");
const childStop = document.getElementById("child-stop");
const outputDiv = document.getElementById("output");

let executionLogs = [];

function appendLog(elementName) {
  executionLogs.push(`-> Fired: [${elementName}]`);
  console.log(`BUBBLING EVENT: ${elementName}`);
  
  outputDiv.textContent = 
    `EVENT PROPAGATION TRAIL:\n` +
    executionLogs.join("\n") +
    `\n\nNotice how the event bubbled upwards from Child -> Parent -> Grandparent!`;
}

// Reset log helper before each click sequence
function resetLogs() {
  executionLogs = [];
  outputDiv.textContent = "";
}

// =====================================================
// 1. GRANDPARENT LISTENER (Top Ancestor)
// =====================================================
grandparent.addEventListener("click", () => {
  appendLog("1. Grandparent Div");
});

// =====================================================
// 2. PARENT LISTENER (Middle Ancestor)
// =====================================================
parent.addEventListener("click", () => {
  appendLog("2. Parent Div");
});

// =====================================================
// 3. CHILD BUTTON LISTENER (Normal Bubbling)
// =====================================================
childNormal.addEventListener("click", () => {
  resetLogs();
  appendLog("3. Child Button (Normal)");
});

// =====================================================
// 4. DOM CONCEPT: event.stopPropagation()
// =====================================================
// event.stopPropagation() PREVENTS the event from bubbling up further to parent elements.
// The handler on childStop will run, but parent and grandparent handlers will NOT trigger!
// =====================================================
childStop.addEventListener("click", (event) => {
  resetLogs();
  
  // STOP THE BUBBLING CHAIN!
  event.stopPropagation();

  executionLogs.push(`-> Fired: [Child Button (Stop Propagation)]`);
  executionLogs.push(`-> Stopped! event.stopPropagation() blocked Parent & Grandparent listeners!`);

  console.log("Propagation stopped at child button.");
  outputDiv.textContent = executionLogs.join("\n");
});

// =====================================================
// QUICK REVISION
// =====================================================
// - Event Bubbling -> Events trigger on target first, then bubble UP to all parent ancestors.
// - Propagation order -> Target -> Parent -> Grandparent -> body -> document
// - event.stopPropagation() -> Instantly prevents event from bubbling up to parent handlers.
// - Useful when child buttons inside container cards shouldn't trigger card click actions!
// =====================================================
