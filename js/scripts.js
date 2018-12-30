"use strict";

console.log("hello");

// var container = document.getElementById("wrapper");
// var urls = ["imgs/TTTgalleries/amsterdam/" + ".jpg"];
// for( i=0; i<urls.length; i++){
//   container.insertAdjacentHTML('beforeend', '<img src="'+urls[i]+'">');
// }



// function test(){

// var dir = "imgs/TTTgalleries/test/"; // folder location
// var fileextension = ".jpg"; // image format
// var i = "1";
// var
// $("<img />").attr('src', dir + i + fileextension ).appendTo(".test");

//  if (i==10){
//  alert('loaded');
//  }
//  else{
//  i++;
//  imageloop();
// };
// };   


var container = document.getElementById("test");
var dir = ["imgs/TTTgalleries/test/"];
var fileextension = ".jpg";
var i = 1

for(i=0; i<dir.length; i++){
  container.insertAdjacentHTML('beforeend', '<img src="'+dir[i]fileextension'">');
if (i==10){alert('loaded') }
else{i++;}

