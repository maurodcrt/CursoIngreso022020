function mostrar() {

    var notasIngresadas;
    var sexoIngresado;
    var promedio;



    do {
        notasIngresadas = prompt("Ingrese las notas del 0 al 10");
        notasIngresadas = parseInt(notasIngresadas);
        sexoIngresado = prompt ("Ingrese el sexo del alumno");

        while (isNaN(notasIngresadas) || notasIngresadas == "") {

            notasIngresadas = prompt("Esa no es una nota vlida, recorda ingresar numeros del 0 al 10");

        }
    }
    while (notasIngresadas <0 && notasIngresadas >10) {

        notasIngresadas = prompt ("Esa no es una nota vlida, recorda ingresar numeros del 0 al 10");
        contador ++;
    }

    



}
