function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var acumulador = 0;
	var numeroingresado;

	var respuesta = 'si';


	do {
		numeroingresado = parseInt(prompt("Ingrese un numero, ya ingreso: " + contador));
		while (isNaN(numeroingresado) || numeroingresado == "") {
			numeroingresado = parseInt(prompt("Eso no es un numero, proba otra vez. Ya ingreso: " + contador));
		}

		if (numeroingresado > 0) {
			positivo = positivo + numeroingresado;
		}

		if (numeroingresado < 0) {
			if (numeroingresado == 0) {
				negativo = numeroingresado;
			}
			else {
				negativo = negativo * numeroingresado;
			}

		}

		respuesta = prompt("Desea continuar? S / N").toLowerCase();

		while (respuesta != "s" && respuesta != "n") {
			respuesta = prompt("Respuesta no valida. Por favor ingrese  S para continuar o  N para salir").toLowerCase();
		}

		contador++;
	} while (respuesta == "s");


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}




//FIN DE LA FUNCIÓN