"use strict";

const hello = document.getElementById("amsterdam");


function amsterdam() {
	document.getElementById("testimgs").style.display = "block"
}
hello.addEventListener("click", amsterdam);


var container = document.getElementById('amsterdamreal');
var images = 66;

for (var i = 1; i < images; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); // but i like conventions
    container.appendChild(node);

    if (i < images - 1) {
        container.appendChild(document.createElement('br'));
    }
}