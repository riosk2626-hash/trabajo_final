
var saludo = document.getElementById("saludo");
var nombreGuardado = sessionStorage.getItem("nombre");

if (saludo && nombreGuardado) {
    saludo.textContent = "Hola, " + nombreGuardado + " 👋 Gracias por visitar Commit Tecnología.";
}