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

var  AddBuuton = document.getElementById ("AddButton");


AddButton.addEventListener("click", GetInput);

function GetInput(){

	

	
	
}