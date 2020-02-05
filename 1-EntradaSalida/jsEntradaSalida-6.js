/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar() {

    var numero1;
    var numero2;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    //Lo que tengo que hacer con parseint es sobre escribir las variables //
    // para que pasen de string a number //

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    resultado = numero1 + numero2;

    //Siempre es mejor que lo que voy a mostrar esta definido en una variable//

    alert("La suma es " + resultado);

}

x