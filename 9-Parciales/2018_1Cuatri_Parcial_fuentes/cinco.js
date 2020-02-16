function mostrar() {
    var planetas;
    planetas = prompt("Ingresa un planeta");

    switch (planetas) {
        case "mercurio":
        case "Venus":
            alert("Aca hace calor");
            break;
        case "la tierra":
        case "tierra":
            alert("Aca vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("Aca hace mas frio");
            break;
        default:
            alert("No es un planeta valido");
            break;
    }

}
