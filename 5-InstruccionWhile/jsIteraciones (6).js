function mostrar()
{

	// Este es el primer numero que voy a ingresar //

	var contador=0;
	var acumulador=0;
	
	// Aca comienza el bucle // 
	
	while (contador < 5) {

		
		numero = prompt ("Ingrese el numero. Ya van ingresados " +contador+" :");
		while (isNaN(numero)){
			numero = prompt ("OH NO, eso no es un numero. Intentenlo nuevamente ");	
		}
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador ++;
	}

	


	// Aca muestra los datos //

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN