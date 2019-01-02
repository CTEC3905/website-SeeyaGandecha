"use strict";

//amsterdam image population

var am1 = document.getElementById('amsterdamone');
var am2 = document.getElementById('amsterdamtwo');
var am3 = document.getElementById('amsterdamthree');
var am4 = document.getElementById('amsterdamfour');
var am5 = document.getElementById('amsterdamfive');

var damimages = 66;

for (var i = 1; i < 13; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am1.appendChild(node);
}
for (var i = 13; i < 26; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am2.appendChild(node);
}
for (var i = 26; i < 39; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am3.appendChild(node);
}
for (var i = 39; i < 52; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am4.appendChild(node);
}
for (var i = 52; i < damimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am5.appendChild(node);
}

//amsterdam display 
const dam = document.getElementById("amsterdam");

function amsterdam() {
	document.getElementById("displaydam").style.display = "block"
}
dam.addEventListener("click", amsterdam);



//brussels image population

var brux1 = document.getElementById('bruxone');
var brux2 = document.getElementById('bruxtwo');
var brux3 = document.getElementById('bruxthree');
var brux4 = document.getElementById('bruxfour');
var brux5 = document.getElementById('bruxfive');

var bruximages = 92;

for (var i = 1; i < 20; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux1.appendChild(node);
}
for (var i = 20; i < 40; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux2.appendChild(node);
}
for (var i = 40; i < 60; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux3.appendChild(node);
}
for (var i = 60; i < 80; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux4.appendChild(node);
}
for (var i = 80; i < bruximages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux5.appendChild(node);
}

//brussels display 
const brux = document.getElementById("brussels");

function brussels() {
	document.getElementById("displaybrux").style.display = "block"
}
brux.addEventListener("click", brussels);



//horror image population

var horror1 = document.getElementById('horrorone');
var horror2 = document.getElementById('horrortwo');
var horror3 = document.getElementById('horrorthree');
var horror4 = document.getElementById('horrorfour');
var horror5 = document.getElementById('horrorfive');

var horrorimages = 13;

<<<<<<< HEAD
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
=======
for (let i = 1; i < 4; i++) {
=======
for (var i = 1; i < 4; i++) {
>>>>>>> parent of ce75848... removed variables - changed to let
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror1.appendChild(node);
}
for (var i = 4; i < 7; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror2.appendChild(node);
}
for (var i = 7; i < 10; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror3.appendChild(node);
}
for (var i = 10; i < 12; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror4.appendChild(node);
}
for (var i = 12; i < horrorimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror5.appendChild(node);
}

//horror display 
const horror = document.getElementById("horror");

function horr() {
	document.getElementById("displayhorror").style.display = "block"
}
horror.addEventListener("click", horr);



//italy image population

var italy1 = document.getElementById('italyone');
var italy2 = document.getElementById('italytwo');
var italy3 = document.getElementById('italythree');
var italy4 = document.getElementById('italyfour');
var italy5 = document.getElementById('italyfive');

var itimages = 520;

for (var i = 1; i < 110; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy1.appendChild(node);
}
for (var i = 110; i <220; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy2.appendChild(node);
}
for (var i = 220; i < 314; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy3.appendChild(node);
}
for (var i = 314; i < 420; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy4.appendChild(node);
}
for (var i = 420; i < itimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy5.appendChild(node);
}

//italy display 
const italy = document.getElementById("italy");

function it() {
	document.getElementById("displayitaly").style.display = "block"
}
italy.addEventListener("click", it);



//leipzig image population

var leip1 = document.getElementById('leipone');
var leip2 = document.getElementById('leiptwo');
var leip3 = document.getElementById('leipthree');
var leip4 = document.getElementById('leipfour');
var leip5 = document.getElementById('leipfive');

var leipimages = 192;

for (var i = 1; i < 40; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leipzig1.appendChild(node);
}
for (var i = 40; i <80; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leipzig2.appendChild(node);
}
for (var i = 80; i < 120; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leipzig3.appendChild(node);
}
for (var i = 120; i < 140; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leipzig4.appendChild(node);
}
for (var i = 140; i < leipimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leipzig5.appendChild(node);
}

//leipzig display 
const leipzig = document.getElementById("leipzig");

function leip() {
	document.getElementById("displayleipzig").style.display = "block"
}
leipzig.addEventListener("click", leip);