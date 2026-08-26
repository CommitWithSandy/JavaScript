// =====================================================
// 16 - CUSTOM DATA ATTRIBUTES (data-*) & DATASET
// =====================================================
// HTML allows you to attach custom data attributes to elements using `data-prefix`:
// HTML: <div data-id="101" data-user-name="Alice" data-user-role="Admin">
//
// In JavaScript, you read/modify them via the `element.dataset` object:
// JS Access:
// element.dataset.id          -> "101"
// element.dataset.userName    -> "Alice" (kebab-case data-user-name becomes camelCase!)
// element.dataset.userRole    -> "Admin"
// =====================================================

// Selecting elements
const cardContainer = document.getElementById("card-container");
const outputDiv = document.getElementById("output");
const btnUpdateDataset = document.getElementById("btn-update-dataset");
const btnSetAttribute = document.getElementById("btn-set-attribute");

// Using event delegation on card container
cardContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".user-card");

  if (card) {
    // Accessing custom data attributes via element.dataset object
    const id = card.dataset.id;
    const name = card.dataset.name;
    const role = card.dataset.role;

    console.log("Card dataset object:", card.dataset);

    outputDiv.textContent = 
      `--- READ DATASET OBJECT ---\n` +
      `card.dataset.id   : "${id}"\n` +
      `card.dataset.name : "${name}"\n` +
      `card.dataset.role : "${role}"\n\n` +
      `Raw HTML attributes: data-id="${id}" data-name="${name}" data-role="${role}"`;
  }
});

// =====================================================
// MODIFICATION 1: Setting dataset properties directly
// =====================================================
btnUpdateDataset.addEventListener("click", () => {
  const firstCard = cardContainer.firstElementChild;

  // Updating values via dataset property assignment
  firstCard.dataset.name = "Alice Johnson (PRO)";
  firstCard.dataset.role = "Super Admin";

  // Update card heading text
  firstCard.querySelector("h4").textContent = firstCard.dataset.name;

  console.log("Updated first card dataset:", firstCard.dataset);
  outputDiv.textContent = 
    `Updated Card 1 via element.dataset!\n` +
    `New Name: "${firstCard.dataset.name}"\n` +
    `New Role: "${firstCard.dataset.role}"`;
});

// =====================================================
// MODIFICATION 2: Using setAttribute("data-id", "999")
// =====================================================
btnSetAttribute.addEventListener("click", () => {
  const lastCard = cardContainer.lastElementChild;

  // You can also use setAttribute to modify data attributes
  lastCard.setAttribute("data-id", "999");
  lastCard.setAttribute("data-role", "Lead Designer");

  console.log("Updated last card dataset via setAttribute:", lastCard.dataset);
  outputDiv.textContent = 
    `Updated Card 3 data attributes via setAttribute()!\n` +
    `element.setAttribute("data-id", "999") -> card.dataset.id is now: "${lastCard.dataset.id}"`;
});

// =====================================================
// QUICK REVISION
// =====================================================
// - HTML syntax  -> data-id="123" data-user-type="admin"
// - JS Reading   -> element.dataset.id, element.dataset.userType
// - Kebab-case in HTML (data-user-type) automatically converts to camelCase in JS (dataset.userType).
// - JS Writing   -> element.dataset.id = "456"
// - Alternative  -> element.setAttribute("data-id", "456")
// - Ideal for associating database primary key IDs or metadata directly with DOM elements!
// =====================================================
