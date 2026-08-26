// =====================================================
// 18 - PRACTICE PROJECT: TODO LIST APP
// =====================================================
// This project synthesizes key DOM concepts learned across chapters 01-17:
// 1. Element Selection: document.getElementById()
// 2. Event Handling: submit event & event.preventDefault()
// 3. Validation: checking input.value.trim()
// 4. Element Creation: document.createElement()
// 5. DOM Manipulation: append(), classList.toggle(), remove()
// 6. Event Delegation: Single click listener on <ul> list parent
// =====================================================

// Selecting elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const errorMsg = document.getElementById("error-message");

// =====================================================
// FEATURE 1: ADD TODO TASK (WITH VALIDATION)
// =====================================================
todoForm.addEventListener("submit", (event) => {
  // Prevent form submission page refresh
  event.preventDefault();

  // Read input value and remove trailing whitespace
  const taskText = todoInput.value.trim();

  // Empty Input Validation Check
  if (taskText === "") {
    errorMsg.style.display = "block"; // Show error message
    return; // Exit function early
  }

  // Hide error message if valid
  errorMsg.style.display = "none";

  // Step 1: Create <li> element node
  const li = document.createElement("li");

  // Step 2: Create <span> for task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("todo-text");

  // Step 3: Create <button> for delete action
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("btn-delete");

  // Step 4: Assemble elements together
  li.append(span, deleteBtn);

  // Step 5: Append <li> to <ul> todo list
  todoList.append(li);

  // Clear input field and set focus back
  todoInput.value = "";
  todoInput.focus();

  console.log(`[Todo App] Added new task: "${taskText}"`);
});

// =====================================================
// FEATURE 2 & 3: EVENT DELEGATION FOR TOGGLING & DELETING
// =====================================================
// Instead of attaching listeners to every task item or delete button,
// we delegate click handling to the parent <ul id="todo-list"> element!
// =====================================================
todoList.addEventListener("click", (event) => {
  const target = event.target;

  // ACTION 1: DELETE TASK
  if (target.classList.contains("btn-delete")) {
    // Find closest <li> parent container
    const parentLi = target.closest("li");
    const taskName = parentLi.querySelector(".todo-text").textContent;
    
    // Remove task from DOM
    parentLi.remove();

    console.log(`[Todo App] Deleted task: "${taskName}"`);
  } 
  // ACTION 2: MARK TASK COMPLETE / INCOMPLETE (TOGGLE CLASS)
  else if (target.classList.contains("todo-text") || target.tagName === "LI") {
    const parentLi = target.closest("li");
    
    // Toggle 'completed' class on line-through styling
    parentLi.classList.toggle("completed");

    const isCompleted = parentLi.classList.contains("completed");
    console.log(`[Todo App] Toggled task completion status: Completed = ${isCompleted}`);
  }
});

// Hide error message as soon as user starts typing again
todoInput.addEventListener("input", () => {
  if (todoInput.value.trim() !== "") {
    errorMsg.style.display = "none";
  }
});

// =====================================================
// QUICK REVISION
// =====================================================
// In this mini-app, we used:
// - getElementById() -> Select DOM nodes
// - preventDefault() -> Prevent form reload on submit
// - createElement()  -> Build <li>, <span>, <button>
// - textContent      -> Safely assign text content
// - classList.toggle -> Toggle 'completed' styling class
// - append()         -> Attach nodes to container
// - remove()         -> Delete <li> node on click
// - event delegation -> Single <ul> listener manages all tasks & delete buttons efficiently!
// =====================================================
