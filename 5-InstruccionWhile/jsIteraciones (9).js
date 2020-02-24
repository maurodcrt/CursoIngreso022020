
function mostrar() {


	var contador = 0;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	do {

		numeroIngresado = parseInt(prompt("ingrese un numero. Numeros ingresados hasta el momento: " + contador));
		while (isNaN(numeroIngresado) || numeroIngresado == "") {
			numeroIngresado = parseInt(prompt("No ingreso un numero. Por favor reingrese. Numeros ingresados hasta el momento: " + contador));
		}
		if (contador == 0)  //si el contador es 0,es el primer numeor que van a ingresar.Por eso va a ser numMax y numMin al mismo tiempo.
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else {
			if (numeroMaximo < numeroIngresado) //si el nuevo numero ingresado es MAS GRANDE que el anterior,entonces ese va a ser el nuevo numMax
			{
				numeroMaximo = numeroIngresado;
			}
			if (numeroMinimo > numeroIngresado) //si el nuevo numero ingresado es MAS GRANDE que el anterior,entonces ese va a ser el nuevo numMin
			{
				numeroMinimo = numeroIngresado;
			}
		}

		respuesta = prompt("Desea continuar? S / N").toLowerCase();

		while (respuesta != "s" && respuesta != "n") {
			respuesta = prompt("Respuesta no valida. Por favor ingrese  S para continuar o  N para salir").toLowerCase();
		}

		contador++;
	} while (respuesta == 's');

	document.getElementById('minimo').value = numeroMinimo;
	document.getElementById('maximo').value = numeroMaximo;





}//FIN DE LA FUNCIÓN