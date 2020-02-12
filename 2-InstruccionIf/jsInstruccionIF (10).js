function mostrar() {
	//Genero el número RANDOM entre 1 y 10 

	var numeroAleatorio;
	var nota; 
	numeroAleatorio = Math.floor((Math.random() * 10) + 1);
	nota = numeroAleatorio;

	if (nota >= 9) {
		alert("Excelente");
	}

	else if (nota >= 4) {
		alert("Aprobo")
	}
	else {
		alert("Vamos, la proxima se puede")
	}
}


