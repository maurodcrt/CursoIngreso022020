function mostrar()
{

    var edad;
    var estadocivil;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    estadocivil = document.getElementById("estadoCivil").value;

//tomo la edad 

if (edad <18 && estadocivil != "Soltero") {

    alert("Es muy pequeño para NO ser soltero")

}


}//FIN DE LA FUNCIÓN