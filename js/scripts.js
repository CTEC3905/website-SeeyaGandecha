"use strict";

//amterdam image population

var am1 = document.getElementById('amsterdamone');
var am2 = document.getElementById('amsterdamtwo');
var am3 = document.getElementById('amsterdamthree');
var am4 = document.getElementById('amsterdamfour');
var am5 = document.getElementById('amsterdamfive');

var images = 66;

for (var i = 1; i < 15; i++) {
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg');
    am1.appendChild(node);}
for (var i = 15; i < 29; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg');
    am2.appendChild(node);}
for (var i = 29; i < 42; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg');
    am3.appendChild(node);}
for (var i = 42; i < 55; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am4.appendChild(node);}
for (var i = 55; i < images; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg');
    am5.appendChild(node);}

//amsterdam display 
const dam = document.getElementById("amsterdam");

function amsterdam() {
	document.getElementById("amsterdamdisplay").style.display = "block"
}
dam.addEventListener("click", amsterdam);