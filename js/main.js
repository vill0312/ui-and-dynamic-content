/*global document, prompt, addperson, alert, invitation*/

(function invitation() {
 
    "use strict";
 
    var invited, btn, name;
    
    btn = document.querySelector(".invite");
    invited = document.querySelector(".names ul");

    //REMOVE NAME
    function removeperson(event) {
        invited.removeChild(event.target);
    }
    

    //ADD NAME
    function addperson() {
        
        name = document.createElement("li");
        name.innerHTML = prompt("Please add the name of the person you want to invite.");
        
        if (name.innerHTML !== "") {
            invited.appendChild(name);
            
            invited.addEventListener("click", removeperson);
        }
    }
    
    btn.addEventListener("click", addperson);
 
 
 
 
}());

invitation();