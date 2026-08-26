// =====================================================
// 12 - FORM EVENTS & PREVENTDEFAULT
// =====================================================
// Key Form Events:
// 1. 'submit' : Triggers when user clicks submit button or hits Enter inside form.
// 2. 'input'  : Triggers immediately whenever input value changes (typing, deleting).
// 3. 'change' : Triggers when input loses focus OR select option changes.
// 4. 'focus'  : Triggers when element receives focus (cursor inside).
// 5. 'blur'   : Triggers when element loses focus (cursor clicks outside).
// =====================================================

// Selecting form elements
const form = document.getElementById("user-form");
const inputName = document.getElementById("user-name");
const inputEmail = document.getElementById("user-email");
const selectRole = document.getElementById("user-role");
const outputDiv = document.getElementById("output");

// =====================================================
// 1. DOM CONCEPT: event.preventDefault() & submit event
// =====================================================
// By default, HTML forms reload/refresh the browser page on submission.
// event.preventDefault() CANCELS the browser's default behavior,
// allowing us to process form data using JavaScript without page reload!
// =====================================================
form.addEventListener("submit", (event) => {
  // PREVENT DEFAULT PAGE RELOAD
  event.preventDefault();

  const nameVal = inputName.value;
  const emailVal = inputEmail.value;
  const ageVal = document.getElementById("user-age").value;
  const roleVal = selectRole.value;

  console.log("Form Submitted Data:", { nameVal, emailVal, ageVal, roleVal });

  outputDiv.textContent = 
    `--- FORM SUBMITTED (Page did NOT reload!) ---\n` +
    `Name  : ${nameVal}\n` +
    `Email : ${emailVal}\n` +
    `Age   : ${ageVal}\n` +
    `Role  : ${roleVal}\n\n` +
    `WHY preventDefault() WAS USED:\n` +
    `It prevented the browser from reloading the page and clearing our JavaScript state!`;
});

// =====================================================
// 2. DOM EVENT: 'input'
// =====================================================
// Fires instantly on every single keystroke. Great for real-time validation or live search!
// =====================================================
inputName.addEventListener("input", (e) => {
  console.log("Live Input:", e.target.value);
});

// =====================================================
// 3. DOM EVENT: 'change'
// =====================================================
// Fires when select option changes or text input loses focus after changing.
// =====================================================
selectRole.addEventListener("change", (e) => {
  outputDiv.textContent = `[change event] Role selection changed to: "${e.target.value}"`;
});

// =====================================================
// 4. DOM EVENTS: 'focus' & 'blur'
// =====================================================
// focus -> User clicked into input field.
// blur  -> User clicked outside input field.
// =====================================================
inputEmail.addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "#e0f2fe"; // Light blue background on focus
  console.log("Email field focused.");
});

inputEmail.addEventListener("blur", (e) => {
  e.target.style.backgroundColor = "#ffffff"; // Restore white on blur
  console.log("Email field blurred.");
});

// =====================================================
// QUICK REVISION
// =====================================================
// - form.addEventListener('submit') -> Captures form submission
// - event.preventDefault()          -> Essential! Prevents default browser page refresh on submit
// - 'input'  -> Fires continuously during typing
// - 'change' -> Fires when dropdown selection changes or text field value is committed
// - 'focus'  -> Element receives focus
// - 'blur'   -> Element loses focus
// =====================================================
