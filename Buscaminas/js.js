function insertar(prueba){
	var textoInput = prueba.previousSibling.previousSibling.value;

	var nuevoLi = document.createElement("li");
	var acceder = prueba.previousSibling.previousSibling.previousSibling.previousSibling;	
	nuevoLi.innerText = textoInput;
	acceder.appendChild(nuevoLi);


	console.log(acceder);
}