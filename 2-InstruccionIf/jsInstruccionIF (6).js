function mostrar() {
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    //tomo la edad 
    
    if (edad >= 18) {

        alert("Es mayor de edad");

    }
    else {

        if (edad >= 13 && edad <= 17) {

            alert("Es adolescente")
        }
        if (edad < 13) {

            alert("Es niño")
        }
    }


}//FIN DE LA FUNCIÓN