// SCRIPT GENERAL (se carga en todas las páginas)
// Muestra un saludo si el usuario ya dejó su nombre en el formulario

var saludo = document.getElementById("saludo");
var nombreGuardado = sessionStorage.getItem("nombre");

if (saludo && nombreGuardado) {
    saludo.textContent = "Hola, " + nombreGuardado + " 👋 Gracias por visitar Commit Tecnología.";
}