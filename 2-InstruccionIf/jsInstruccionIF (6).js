function mostrar() {
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    //tomo la edad 

    if (edad >= 18) {

        alert("Es mayor de edad");

    }

    else if (edad >= 13 && edad <= 17) {

        alert("Es adolescente")
    }
    else {
        alert("Es niño")
    }
}


