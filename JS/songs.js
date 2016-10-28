"use stict";


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


//Add songs to beginning and end of the arrays 

songs.unshift("The Traveler by John Digweed and Nick Muir on the album The Traveler");
songs.push("Tower Seven by Thievery Corporation on the album Culture of Fear");

var songsEl = document.getElementById("songs");

function PopulateDom () {

	songsEl.innerHTML = "";

for (var i=0; i < songs.length; i++) {


	var newSongs = songs[i].replace (/>/g,"-").replace (/[!*/(@)]/g,"");

	console.log("newSongs", newSongs); 

	songsEl.innerHTML += `<div>${newSongs} </div>`;


	}			
}




// could use a function here for more control 



var songInput = document.getElementById("SongInput");

var albumInput= document.getElementById("AlbumInput");

var artistInput = document.getElementById("ArtistInput");

var  AddButton = document.getElementById ("AddButton");


AddButton.addEventListener("click", GetInput);

function GetInput(){

	songs.push(SongInput.value + "by" + ArtistInput.value +" on the album" + AlbumInput.value);
	console.log ("input song", newSongs);
	PopulateDom();
	
}

PopulateDom();

function Switchviews () {


	var listView 
}


/*
Function print () {


	for loop

		str +=

}
el.innerHTML 

}

console log //or print to page */