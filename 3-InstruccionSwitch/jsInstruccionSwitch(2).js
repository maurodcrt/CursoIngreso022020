function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio");
        break;
    default:
        alert("Ya pasamos el frio ahora ¡LA CALOR!");
        break;
}




}//FIN DE LA FUNCIÓN