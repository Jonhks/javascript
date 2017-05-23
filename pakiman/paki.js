var edad= prompt("Cual es tu edad?");
	if (edad >= 18 ) {
		document.write("Eres mayor");	
	}else if (edad <= 17 ){
		document.write("Eres un puberto");	
	}


// una forma

function tuEdad(edad){
	if (edad >= 18 ) {
		document.write("Eres mayor");	
	}else if (edad <= 17 ){
		document.write("Eres un puberto");	
	}
}	
tuEdad(15);

// la mejor forma


var dato = prompt("Cual es tu edad? ");

function tuEdad(edad){
	if (edad >= 18 )
		document.write("Eres mayor");	
	}else if (edad <= 17 ){
		document.write("Eres un puberto");	
	}
}	
tuEdad(dato);


// Adivinar la palabra;


var palabra = "laboratoria";
var intentos = 3;
var indice;
var largoPalabra = palabra.length;
var letraAdivinada = "_";
var letraUsuario;
letraAdivinada = letraAdivinada.repeat(largoPalabra);
letraAdivinada = letraAdivinada.split("");
alert("Adivina la siguiente palabra: \n " + letraAdivinada.join(" "));

while(intentos > 0){
 letraUsuario = prompt("Ingresa una letra");

 if (palabra.includes(letraUsuario)){
   indice = palabra.indexOf(letraUsuario);

   while ( indice != -1 ) {
      letraAdivinada[indice] = letraUsuario;
      indice = palabra.indexOf(letraUsuario, indice+1);
   }

   alert(letraAdivinada.join(" "));
 }
 else{
   alert("Letra Incorrecta");
   intentos--;
   if (intentos == 0){
     alert("Game Over!!");
   }
 }

 if (letraAdivinada.join("") == palabra ){
   alert(" Adivinaste la palabra");
   intentos = 0;
 }



// pilas y colas

function Stack() {
   var elements = []; 

   this.add = add;
   this.pop = pop; 
   this.getTopElement = getTopElement;
   this.hasElements = hasElements;
   this.removeAll = removeAll;
   this.size = size;

   function add (element){
      elements.push(element);
   }

   function pop (){
      return elements.pop();
   }

   function getTopElement(){
      return elements[elements.length -1];
   }

   function hasElements(){
      return elements.length > 0;
   }

   function removeAll (){
      elements = [];
   }
    function size (){
      return elements.length;
    }
}


var frutasstack = new Stack();
if (!frutasstack.hasElements()) {
   frutasstack.add('Platano');
   frutasstack.add('manzana');
   frutasstack.add('Mango');
   console.log(frutasstack.size()); //mostrara cuantas frutas hay
   var mango = frutasstack.pop(); //Obtiene mango y lo saca de la pila, quedan 2 elementos
   console.log(mango);   
   console.log(frutasstack.getTopElement()); //Imprime manzana ya que quedo hsata arriba
   console.log(frutasstack.size()); //mostrara 2
   frutasstack.removeAll(); //Limpiara la pila
   console.log(frutasstack.hasElements()); // Retornara falso porque la pila esta vacia 
}
