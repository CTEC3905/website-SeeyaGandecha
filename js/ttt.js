"use strict";

//amsterdam image population

let am1 = document.getElementById('amsterdamone');
let am2 = document.getElementById('amsterdamtwo');
let am3 = document.getElementById('amsterdamthree');
let am4 = document.getElementById('amsterdamfour');
let am5 = document.getElementById('amsterdamfive');

let damimages = 66;

for (let i = 1; i < 13; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am1.appendChild(node);
}
for (let i = 13; i < 26; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am2.appendChild(node);
}
for (let i = 26; i < 39; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am3.appendChild(node);
}
for (let i = 39; i < 52; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/amsterdam/amsterdam' + i + '.jpg'); 
    am4.appendChild(node);
}
for (let i = 52; i < damimages; i++) {
    
    let node = new Image();
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

let brux1 = document.getElementById('bruxone');
let brux2 = document.getElementById('bruxtwo');
let brux3 = document.getElementById('bruxthree');
let brux4 = document.getElementById('bruxfour');
let brux5 = document.getElementById('bruxfive');

let bruximages = 92;

for (let i = 1; i < 20; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux1.appendChild(node);
}
for (let i = 20; i < 40; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux2.appendChild(node);
}
for (let i = 40; i < 60; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux3.appendChild(node);
}
for (let i = 60; i < 80; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/brussels/brussels' + i + '.jpg'); 
    brux4.appendChild(node);
}
for (let i = 80; i < bruximages; i++) {
    
    let node = new Image();
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

let horror1 = document.getElementById('horrorone');
let horror2 = document.getElementById('horrortwo');
let horror3 = document.getElementById('horrorthree');
let horror4 = document.getElementById('horrorfour');
let horror5 = document.getElementById('horrorfive');

let horrorimages = 13;

for (let i = 1; i < 4; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror1.appendChild(node);
}
for (let i = 4; i < 7; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror2.appendChild(node);
}
for (let i = 7; i < 10; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror3.appendChild(node);
}
for (let i = 10; i < 12; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/horror/horror' + i + '.jpg'); 
    horror4.appendChild(node);
}
for (let i = 12; i < horrorimages; i++) {
    
    let node = new Image();
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

let italy1 = document.getElementById('italyone');
let italy2 = document.getElementById('italytwo');
let italy3 = document.getElementById('italythree');
let italy4 = document.getElementById('italyfour');
let italy5 = document.getElementById('italyfive');

let itimages = 439;

for (let i = 1; i < 100; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy1.appendChild(node);
}
for (let i = 100; i <200; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy2.appendChild(node);
}
for (let i = 200; i < 300; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy3.appendChild(node);
}
for (let i = 300; i < 400; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/italy/italy' + i + '.jpg'); 
    italy4.appendChild(node);
}
for (let i = 400; i < itimages; i++) {
    
    let node = new Image();
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

let leip1 = document.getElementById('leipone');
let leip2 = document.getElementById('leiptwo');
let leip3 = document.getElementById('leipthree');
let leip4 = document.getElementById('leipfour');
let leip5 = document.getElementById('leipfive');

let leipzigimages = 189;

for (let i = 1; i < 37; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip1.appendChild(node);
}
for (let i =37; i < 75; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip2.appendChild(node);
}
for (let i = 75; i < 110; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip3.appendChild(node);
}
for (let i = 110; i < 150; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/leipzig/leipzig' + i + '.jpg'); 
    leip4.appendChild(node);
}
for (let i = 150; i < leipzigimages; i++) {
    
    let node = new Image();
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

let mad1 = document.getElementById('madone');
let mad2 = document.getElementById('madtwo');
let mad3 = document.getElementById('madthree');
let mad4 = document.getElementById('madfour');
let mad5 = document.getElementById('madfive');

let madridimages = 72;

for (let i = 1; i < 15; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad1.appendChild(node);
}
for (let i = 15; i < 30; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad2.appendChild(node);
}
for (let i = 30; i < 45; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad3.appendChild(node);
}
for (let i = 45; i < 55 ; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/madrid/madrid' + i + '.jpg'); 
    mad4.appendChild(node);
}
for (let i = 55; i < madridimages; i++) {
    
    let node = new Image();
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

let praha1 = document.getElementById('prahaone');
let praha2 = document.getElementById('prahatwo');
let praha3 = document.getElementById('prahathree');
let praha4 = document.getElementById('prahafour');
let praha5 = document.getElementById('prahafive');

let pragueimages = 72;

for (let i = 1; i < 15; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha1.appendChild(node);
}
for (let i = 15; i < 30; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha2.appendChild(node);
}
for (let i = 30; i < 45; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha3.appendChild(node);
}
for (let i = 45; i < 55 ; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/prague/prague' + i + '.jpg'); 
    praha4.appendChild(node);
}
for (let i = 55; i < pragueimages; i++) {
    
    let node = new Image();
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

let mod1 = document.getElementById('modone');
let mod2 = document.getElementById('modtwo');
let mod3 = document.getElementById('modthree');
let mod4 = document.getElementById('modfour');
let mod5 = document.getElementById('modfive');

let modelimages = 28;

for (let i = 1; i < 6; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod1.appendChild(node);
}
for (let i = 6; i < 12; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod2.appendChild(node);
}
for (let i = 12; i < 18; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod3.appendChild(node);
}
for (let i = 18; i < 23 ; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod4.appendChild(node);
}
for (let i = 23; i < modelimages; i++) {
    
    let node = new Image();
    node.setAttribute('src','imgs/TTTgalleries/simmy/models' + i + '.jpg'); 
    mod5.appendChild(node);
}

//models display 
const mods = document.getElementById("models");

function models() {
    document.getElementById("displaymodels").style.display = "block";
}
mods.addEventListener("click", models);


// scroll button ttt page
const btn = document.getElementById("topbtn");
function topbtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
btn.addEventListener("click", topbtn);


