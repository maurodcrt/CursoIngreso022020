/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var lamparas;
    var precio;
    var marcas;
    var valorlamparas;
    var marcaargentina;
    var marcafelipe;
    var marcajeluz;
    var marcahaz;
    var marcaosram;
    var descuento50;
    var descuento40;
    var descuento30;



    lamparas = document.getElementById("Cantidad").value;
    lamparas = parseInt(lamparas);
    precio = 35;
    document.getElementById("Marca").value = marcas;
    valorlamparas = lamparas * precio;
    descuento50 = 0.50;
    descuento40 = 0.40;
    descuento30 = 0.30; 

    if (lamparas >= 6) {

        preciocondescuento50 = ((valorlamparas) * descuento50);
        document.getElementById("precioDescuento").value = preciocondescuento50;

    }
    else {
        var preciosindescuento;
        preciosindescuento = lamparas * precio;
        document.getElementById("precioDescuento").value = preciosindescuento;
    }

    switch (lamparas = 5) {
        case "ArgentinaLuz":
            preciosindescuento40 = (valorlamparas * descuento40);
            document.getElementById("precioDescuento").value = preciosindescuento40;
        
    }
}
