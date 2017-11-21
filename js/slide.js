var slmoment = 1;
var tempo = 3000;

function trocar(){
	document.getElementById("i1").style.display = "none";
	document.getElementById("i2").style.display = "none";
	document.getElementById("i3").style.display = "none";

	var troca = document.getElementById("i"+ slmoment).style.display = "block";

	slmoment++;

	if (slmoment > 3) {
		slmoment = 1;
	}
}

function entrar(){
	document.getElementById("i1").style.display = "none";
	document.getElementById("i2").style.display = "none";
	document.getElementById("i3").style.display = "block";

	var intervalo = setInterval(trocar,tempo);
}