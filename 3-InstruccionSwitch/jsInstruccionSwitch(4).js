function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Tiene 31 días");
            break;
        case "Febrero":
            alert("Tiene 29 días");
            break;
        default:
            alert("Tiene 30 días");
            break;

    }




}//FIN DE LA FUNCIÓN