function abrir(){
	var navegar = document.getElementById('menu').style.display;
	if (navegar == "none" ) {
		document.getElementById('menu').style.display = "block";
	}else{
		document.getElementById('menu').style.display = "none";
	}
}
function montagem(){
	open('Escolha.html');
};