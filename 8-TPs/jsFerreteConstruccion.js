/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largo;
    var ancho;
    var perimetro;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    perimetro = ((largo * 2) + (ancho * 2)) * 3;
    perimetrofinal = perimetro.toFixed(2);

    alert("La cantidad de alambre a comprar es " + perimetrofinal + " mts");

}
function Circulo() {

    var radio;
    var circunsferencia;
    radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    perimetro = ((largo * 2) + (ancho * 2)) * 3;
    circunsferencia = (radio / (2 * 3.14)) * 3;
    circunsferenciafinal = circunsferencia.toFixed(2);

    alert("La cantidad de alambre a comprar es " + circunsferenciafinal + " mts");


}
function Materiales() {
    var largo;
    var ancho;
    var perimetro;
    var cemento;
    var cal;
    var materiales;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    perimetro = ((largo * 2) + (ancho * 2));
    cemento = (perimetro / 2);
    cal = (perimetro / 3);

  
    alert("La cantidad de cemento a comprar " + cemento + " bolsas");
    alert("La cantidad de cal a comprar " + cal + " bolsas");

}