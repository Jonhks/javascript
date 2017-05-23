var teclas = {
	UP: 38,
	DOWN:40,
	LEFT: 37,
	RIGHT:39
};

document.addEventListener("keyup",dibujarTeclado);

var cuadro = document.getElementById("area");
var papel = cuadro.getContext("2d");

dibujarLinea("red", 100,100,200,200,papel);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento){
	switch(evento.keyCode){
		case teclas.UP:
			console.log("Arriba");
		break;
		case teclas.DOWN:
			console.log("Abajo");
		break;
		case teclas.LEFT:
			console.log("Izquierda");
		break;
		case teclas.RIGHT:
			console.log("Derecha");
		break;
		default:
			console.log("Otra tecla");
		break;
	}
}