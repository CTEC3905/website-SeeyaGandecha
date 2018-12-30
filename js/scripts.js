"use strict";

const hello = document.getElementById("logo");

//uncomment below to see what getElementById 'got':
//console.log(hello);

function logotest() {
   document.getElementById("myImg").src = "imgs/TTTlogo.png";
}
hello.addEventListener("click", logotest);
