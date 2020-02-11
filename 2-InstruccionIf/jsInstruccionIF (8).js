function mostrar() {

    var edad;
    var estadocivil;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    estadocivil = document.getElementById("estadoCivil").value;

    //tomo la edad 

    if (edad < 18 && estadocivil !== "Soltero") {

    }

    else {
        if(edad > 18 && estadocivil == "Soltero") {
            
            alert ("Es soltero y no es menor");
        }

    }

}