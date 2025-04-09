const pencilSquare = document.getElementById("pencil-square");
const tabMenuContainer = document.getElementById("tab-menu-container");
const tabInput = document.getElementById("tab-input");
const tabsNavabar = document.getElementById("tabs-navabar");

let tabCount = 0; // Counter to ensure unique IDs for inputs and tabs

// Prevent default form submission
tabInput.addEventListener("submit", function (e) {
    e.preventDefault();
});

pencilSquare.addEventListener("click", function () {
    // Increment tab count for unique IDs
    tabCount++;

    // Create a new input field dynamically
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = `new-tab-${tabCount}`;
    newInput.id = `new-tab-${tabCount}`;
    newInput.placeholder = "Name Tab";
    newInput.classList.add("new-tab");
    newInput.autocomplete = "off";

    // Append the new input field to the form without clearing existing fields
    tabInput.appendChild(newInput);

    // Create a corresponding tab in the navigation bar
    const newTab = document.createElement("li");
    newTab.classList.add("tabs");
    newTab.id = `tab-${tabCount}`;
    newTab.textContent = "New Tab"; // Default text
    tabsNavabar.appendChild(newTab);

    // Update the tab name dynamically as the user types
    newInput.addEventListener("input", function () {
        newTab.textContent = newInput.value || "New Tab"; // Default text if empty
    });
});
