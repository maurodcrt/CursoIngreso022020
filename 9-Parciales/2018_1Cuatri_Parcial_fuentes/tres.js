function mostrar()
{

    var precio;
    var descuento;

    precio = prompt("Precio");
    descuento = prompt("Ingrese en porcentaje de descuento, por ej 20% = 0.20");

    calculo = precio * descuento;
    calculofinal = precio - calculo;

    document.getElementById("elPrecioFinal").value = calculofinal;
}
