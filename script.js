const pencilSquare = document.getElementById("pencil-square");
const tabInput = document.getElementById("tab-input");

const tabMenuContainer = document.getElementById("tab-menu-container");
const tabsNavBar = document.getElementById("tabs-navabar");

const folderCreate = document.getElementById("folder-create")
const folderIcon = document.getElementById("folder-icon")



let tabCount = 0 // Creating a Unique ID for tabCount
let tabArray = [] // Creating an Array to store our tab's (input), manage the highlight feature

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
    tabArray.push(newTabInput) // Pushing our new input to tab

    const newNavaBarTab = document.createElement('li') // Creating new li element
    newNavaBarTab.id = `tab-${tabCount}`
    newNavaBarTab.classList.add("new-tab-nav-bar")
    newNavaBarTab.textContent = "Untitled" // setting default text on a new tab "placeholder"

    tabsNavBar.appendChild(newNavaBarTab) // appending to selector

    newTabInput.addEventListener("input",function(){
        newNavaBarTab.textContent = newTabInput.value || "Untitled" // listening to input changes and reflecting the content on new tab
    })

    newTabInput.addEventListener("focus", function(e) {
        for(let tab of tabArray){
            tab.classList.remove("highlight") // looping through the arrayTab and removing the highlight class
        }
        e.target.classList.add("highlight"); // add's highlight class
    });   
})


folderIcon.addEventListener("click", function(){ 
                                                        // Listening to click event on the folder Icon and creating an Input.
    const newFolder = document.createElement("input")
    newFolder.type = "text"
    newFolder.name = "new-folder"
    newFolder.id = "new-folder"
    newFolder.placeholder = "Untitled Folder"

    folderCreate.appendChild(newFolder) // Appending new created input to folder div
})







