"use strict";

const hello = document.getElementById("amsterdam");


function amsterdam() {
	document.getElementById("testimgs").style.display = "block"
}
hello.addEventListener("click", amsterdam);


// var container = document.getElementById('amsterdamreal');
// var images = 67;

// for (var i = 1; i < images; i++) {
    
//     var node = new Image();
//     node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); // but i like conventions
//     container.appendChild(node);

//     if (i < images - 1) {
//         container.appendChild(document.createElement('br'));
//     }
// }


var am1 = document.getElementById('amsterdamone');
var am2 = document.getElementById('amsterdamtwo');
var am3 = document.getElementById('amsterdamthree');
var am4 = document.getElementById('amsterdamfour');
var am5 = document.getElementById('amsterdamfive');

var images = 66;

for (var i = 1; i < 13; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); // but i like conventions
    am1.appendChild(node);
}
for (var i = 13; i < 26; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); // but i like conventions
    am2.appendChild(node);
}
for (var i = 26; i < 39; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); // but i like conventions
    am3.appendChild(node);
}
for (var i = 39; i < 52; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); // but i like conventions
    am4.appendChild(node);
}
for (var i = 52; i < images; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); // but i like conventions
    am5.appendChild(node);
}

