function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt (numero);

	while (isNaN(numero) || numero > 10 || numero < 0) {
		numero = prompt("el numero no esta entre el 0 y el 10. Intentalo nuevamente: ");
		numero = parseInt (numero);
	}	
	
	document.getElementById("Numero").value = numero;

	
}//FIN DE LA FUNCIÓN