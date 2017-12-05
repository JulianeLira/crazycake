function abrir(){
	var navegar = document.getElementById('menu').style.display;
	if (navegar == "none" ) {
		document.getElementById('menu').style.display = "block";
	}else{
		document.getElementById('menu').style.display = "none";
	}
}

function esconde(){
	var entar = document.querySelector("#escolha").style.display;

	if (entar == "none" ) {
		document.querySelector('#escolha').style.display = "block";
		document.querySelector('#home').style.display = "none";
		document.querySelector('#sobre').style.display = "none";
		document.querySelector('#contatos').style.display = "none";
	}else{
		document.querySelector('#escolha').style.display = "block";
		document.querySelector('#home').style.display = "none";
		document.querySelector('#sobre').style.display = "none";
		document.querySelector('#contatos').style.display = "none";
	}

}

function esconde1(){
	var entar = document.querySelector("#sobre").style.display;

	if (entar == "none" ) {
		document.querySelector('#sobre').style.display = "block";
		document.querySelector('#home').style.display = "none";
		document.querySelector('#escolha').style.display = "none";
		document.querySelector('#contatos').style.display = "none";

	}else{
		document.querySelector('#sobre').style.display = "block";
		document.querySelector('#home').style.display = "none";
		document.querySelector('#escolha').style.display = "none";
		document.querySelector('#contatos').style.display = "none";
	}

}

function esconde2(){
	var entar = document.querySelector("#home").style.display;

	if (entar == "none" ) {
		document.querySelector('#home').style.display = "block";
		document.querySelector('#sobre').style.display = "block";
		document.querySelector('#contatos').style.display = "none";
		document.querySelector('#escolha').style.display = "none";

	}else{
		document.querySelector('#sobre').style.display = "block";
		document.querySelector('#home').style.display = "block";
		document.querySelector('#escolha').style.display = "none";
		document.querySelector('#contatos').style.display = "none";
	}

}

function esconde3(){
	var entar = document.querySelector("#contatos").style.display = "none";

	if (entar == "none" ) {
		document.querySelector('#escolha').style.display = "none";
		document.querySelector('#home').style.display = "none";
		document.querySelector('#sobre').style.display = "none";
		document.querySelector('#contatos').style.display = "block";
	}else{
		document.querySelector('#escolha').style.display = "none";
		document.querySelector('#home').style.display = "none";
		document.querySelector('#sobre').style.display = "none";
		document.querySelector('#contatos').style.display = "block";
	}

};