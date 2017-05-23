function play(){
	var player = document.getElementById("player");
	var progressBar = document.getElementById("progressBar");
	player.play()
}

function pause(){
	var player = document.getElementById("player");
	player.pause()
}

function stop(){
	var player = document.getElementById("player");
	player.currentTime = 0;
	player.pause()
}

function volMAs (){

	var player = document.getElementById("player");
	player.volume = player.volume + 0.1;
}

function volMenos(){
	var player = document.getElementById("player");
	player.volume = player.volume - 0.1;
}

function back (){
	player.currentTime = player.currentTime - 0.5;
	player.play()
}

function fow (){
	player.currentTime = player.currentTime + 0.5;
	player.play()
}
 

 function mostrarProgreso(){
 	var player = document.getElementById("player");
 	var progressBar = document.getElementById("progressBar");
 	var currentTime = document.getElementById("currentTime");
 	progressBar.value = player.currentTime;
 }		