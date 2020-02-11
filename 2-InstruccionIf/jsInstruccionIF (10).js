function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroAleatorio;
	numeroAleatorio = Math.floor((Math.random() * 10) + 1);

	if (numeroAleatorio >=9) {
		alert("Excelente");
	}

	else {
		if (numeroAleatorio >= 4) {
			alert("Aprobo")
		}
		else {
			alert("Vamos, la proxima se puede")
		}
	}
	

}//FIN DE LA FUNCIÓN