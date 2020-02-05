/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;

    importe = document.getElementById("importe").value;
    importe = parseInt(importe);
    resultado = 0.25;

    calculo = importe * resultado; 
    calculofinal = importe - calculo;

    document.getElementById("resultado").value = calculofinal;
	
}

// Con estos ejercicios, se puedne hacer los ejercicios de modelo de parcial 1 - 2 -3 //

//Este comentario es solo para hacer un push//
