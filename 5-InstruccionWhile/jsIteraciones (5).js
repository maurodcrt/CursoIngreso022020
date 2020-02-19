function mostrar() {

    var sexo = prompt("ingrese f ó m .");

    while (sexo != "m" && sexo != "f" && sexo != "M" && sexo != "F") {

        // puedo hacer tambien un touppercase o tolowecase para no repetir las condiciones //

        sexo = prompt("Entendemos que hay sexos no definidos, pero en este caso tiene que ser f o m :( ")

    }

    document.getElementById("Sexo").value = sexo; 




}//FIN DE LA FUNCIÓN