"use strict";

(function() {
    var visited = localStorage.getItem('visited');
    
    if (!visited) {
        document.getElementById("popupp").style.visibility = "visible";
        localStorage.setItem('visited', true);
    }
})();

// document.getElementById("overlay").addEventListener("click", 
//     function(){
//   document.getElementById("overlay").style.display = "none";
// })
