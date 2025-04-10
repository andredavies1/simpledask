const pencilSquare = document.getElementById("pencil-square");
const tabMenuContainer = document.getElementById("tab-menu-container");
const tabInput = document.getElementById("tab-input");
const tabsNavBar = document.getElementById("tabs-navabar");

let tabCount = 0 // Creating a Unique ID for tabCount

// Prevent default form submission
tabInput.addEventListener("submit", function (e) {
    e.preventDefault();
});

pencilSquare.addEventListener("click", function(){

    tabCount++ // Increating the ID value for every click

    const newTabInput = document.createElement("input") //Creating a new input element
    newTabInput.type = "text"
    newTabInput.name = `new-${tabCount}`
    newTabInput.id = `new-${tabCount}`
    newTabInput.classList.add("new-tab")
    newTabInput.placeholder = "Untitled"
    newTabInput.autocomplete = "off"

    tabInput.appendChild(newTabInput) // appending the new input element to our selector (tabInput)

    const newNavaBarTab = document.createElement('li') // Creating new li element
    newNavaBarTab.id = `tab-${tabCount}`
    newNavaBarTab.classList.add("new-tab")
    newNavaBarTab.textContent = "Untitled" // setting default text on a new tab "placeholder"

    tabsNavBar.appendChild(newNavaBarTab) // appending to selector

    newTabInput.addEventListener("input",function(){
        newNavaBarTab.textContent = newTabInput.value || "Untitled" // listening to input changes and reflecting the content on new tab
    })

    newTabInput.addEventListener("focus", function(e) {
        e.target.classList.add("highlight");
    });   

})

const tab = document.getElementById(`new-${tabCount}`)




console.log(document.getElementById(`new-${tabCount}`));


