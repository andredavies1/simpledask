const pencilSquare = document.getElementById("pencil-square")
const tabMenuContainer = document.getElementById("tab-menu-container")
const tabInput = document.getElementById("tab-input")

tabInput.addEventListener("submit", function(e){
    e.preventDefault()

    

})


pencilSquare.addEventListener("click", function(){
   tabInput.innerHTML += `<input type="text" name="new-tab" id="new-tab" placeholder="Name Tab" class="new-tab" autocomplete="off">`

   const tabsNavabar = document.getElementById("tabs-navabar")

   

    tabsNavabar.innerHTML += `<li>${tabName}</li>`

})


