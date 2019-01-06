"use strict";

(function() {
    var visited = localStorage.getItem('visited');
    
    if (!visited) {
        document.getElementById("popupp").style.visibility = "visible";
        localStorage.setItem('visited', true);
    }
})();

document.getElementById("enter").addEventListener("click", 
    function(){
  window.location.href=window.location.href;
})
