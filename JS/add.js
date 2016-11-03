"use strict" ;


var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");
var listView = document.getElementById("list-view")

addLink.addEventListener("click", function() {
 listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});



var songInput = document.getElementById("SongInput");

var albumInput= document.getElementById("AlbumInput");

var artistInput = document.getElementById("ArtistInput");

var  AddButton = document.getElementById ("AddButton");


AddButton.addEventListener("click", GetInput);

function GetInput(){

 songInput = document.getElementById("SongInput").value

 albumInput= document.getElementById("AlbumInput").value

 artistInput = document.getElementById("ArtistInput").value 

 AddButton = document.getElementById ("AddButton").value

	
}

return GetInput; 

