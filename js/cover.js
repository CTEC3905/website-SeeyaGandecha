"use strict";

// overlay on index page

document.getElementById("overlay").addEventListener("click", 
    function(){
  document.getElementById("overlay").style.display = "none";
})

// if (!localStorage.getItem("overlay")) {
//     //show the div

//     //Set the key
//     localStorage.setItem("overlay", true);
// }

// //clear localStorage on tab close
// window.onbeforeunload = function() {
//     localStorage.removeItem("overlay");
// };
