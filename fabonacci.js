function fibo(cantidad){
	var num1 = 0;
	var num2 = 1;
	var suma = 0; 
	var serie = [];
	for (var i = 0; i < cantidad; i++) {
		serie[i] = num1;
		suma =  num1 + num2;
		num1 = num2;
		num2 = suma;
	}
 console.log(serie);	
}

fibo(10);