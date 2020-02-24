function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while (respuesta.toLowerCase() == "si") {

		
		numero = prompt ("Ingrese el numero. Ya van ingresados " +contador+" :");
		while (isNaN(numero)){
			numero = prompt ("OH NO, eso no es un numero. Intentenlo nuevamente ");	
		}
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador ++;

		respuesta = prompt ("¿Queres ingresar mas numeros? si/no ");

		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt ("Solo adminite si o no, porfa no pongas otra cosa");
		}
		contador++;
	 
		while (respuesta == "s");
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN