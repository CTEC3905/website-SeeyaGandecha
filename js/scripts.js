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
	document.getElementById("displaydam").style.display = "block";
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
	document.getElementById("displaybrux").style.display = "block";
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
	document.getElementById("displayhorror").style.display = "block";
}
horror.addEventListener("click", horr);



//italy image population

var italy1 = document.getElementById('italyone');
var italy2 = document.getElementById('italytwo');
var italy3 = document.getElementById('italythree');
var italy4 = document.getElementById('italyfour');
var italy5 = document.getElementById('italyfive');

var itimages = 439;

for (var i = 1; i < 100; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy1.appendChild(node);
}
for (var i = 100; i <200; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy2.appendChild(node);
}
for (var i = 200; i < 300; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy3.appendChild(node);
}
for (var i = 300; i < 400; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy4.appendChild(node);
}
for (var i = 400; i < itimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy5.appendChild(node);
}

//italy display 
const italy = document.getElementById("italy");

function it() {
	document.getElementById("displayitaly").style.display = "block";
}
italy.addEventListener("click", it);



//leipzig image population

var leip1 = document.getElementById('leipone');
var leip2 = document.getElementById('leiptwo');
var leip3 = document.getElementById('leipthree');
var leip4 = document.getElementById('leipfour');
var leip5 = document.getElementById('leipfive');

var leipzigimages = 189;

for (var i = 1; i < 37; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip1.appendChild(node);
}
for (var i =37; i < 75; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip2.appendChild(node);
}
for (var i = 75; i < 110; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip3.appendChild(node);
}
for (var i = 110; i < 150; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip4.appendChild(node);
}
for (var i = 150; i < leipzigimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip5.appendChild(node);
}

//leipzig display 
const leip = document.getElementById("leipzig");

function leipzig() {
    document.getElementById("displayleipzig").style.display = "block";
}
leip.addEventListener("click", leipzig);


//madrid image population

var mad1 = document.getElementById('madone');
var mad2 = document.getElementById('madtwo');
var mad3 = document.getElementById('madthree');
var mad4 = document.getElementById('madfour');
var mad5 = document.getElementById('madfive');

var madridimages = 72;

for (var i = 1; i < 15; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad1.appendChild(node);
}
for (var i = 15; i < 30; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad2.appendChild(node);
}
for (var i = 30; i < 45; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad3.appendChild(node);
}
for (var i = 45; i < 55 ; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad4.appendChild(node);
}
for (var i = 55; i < madridimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad5.appendChild(node);
}

//madrid display 
const madrid = document.getElementById("madrid");

function mad() {
    document.getElementById("displaymadrid").style.display = "block";
}
madrid.addEventListener("click", mad);


//prague image population

var praha1 = document.getElementById('prahaone');
var praha2 = document.getElementById('prahatwo');
var praha3 = document.getElementById('prahathree');
var praha4 = document.getElementById('prahafour');
var praha5 = document.getElementById('prahafive');

var pragueimages = 72;

for (var i = 1; i < 15; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha1.appendChild(node);
}
for (var i = 15; i < 30; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha2.appendChild(node);
}
for (var i = 30; i < 45; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha3.appendChild(node);
}
for (var i = 45; i < 55 ; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha4.appendChild(node);
}
for (var i = 55; i < pragueimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha5.appendChild(node);
}

//prague display 
const praha = document.getElementById("prague");

function prague() {
    document.getElementById("displayprague").style.display = "block";
}
praha.addEventListener("click", prague);


//models image population

var mod1 = document.getElementById('modone');
var mod2 = document.getElementById('modtwo');
var mod3 = document.getElementById('modthree');
var mod4 = document.getElementById('modfour');
var mod5 = document.getElementById('modfive');

var modelimages = 28;

for (var i = 1; i < 6; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod1.appendChild(node);
}
for (var i = 6; i < 12; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod2.appendChild(node);
}
for (var i = 12; i < 18; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod3.appendChild(node);
}
for (var i = 18; i < 23 ; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod4.appendChild(node);
}
for (var i = 23; i < modelimages; i++) {
    
    var node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod5.appendChild(node);
}

//models display 
const mods = document.getElementById("models");

function models() {
    document.getElementById("displaymodels").style.display = "block";
}
mods.addEventListener("click", models);
