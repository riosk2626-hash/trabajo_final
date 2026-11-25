// FORMULARIO DE CONTACTO

var formulario = document.getElementById("formulario");
var error = document.getElementById("mensaje-error");
var resumen = document.getElementById("resumen");

function mostrarResumen() {
    var nombre = sessionStorage.getItem("nombre");
}

var solucionElegida = sessionStorage.getItem("solucion");
if (solucionElegida) {
    document.getElementById("solucion").value = solucionElegida;
}

if (sessionStorage.getItem("nombre")) {
    document.getElementById("nombre").value = sessionStorage.getItem("nombre");
    document.getElementById("empresa").value = sessionStorage.getItem("empresa");
    document.getElementById("correo").value = sessionStorage.getItem("correo");
}
mostrarResumen();

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var empresa = document.getElementById("empresa").value;
    var correo = document.getElementById("correo").value;
    var solucion = document.getElementById("solucion").value;

    if (nombre == "" || empresa == "" || correo == "" || solucion == "") {
        error.textContent = "Por favor completa todos los campos.";
        return;
    }

    if (correo.indexOf("@") == -1 || correo.indexOf(".") == -1) {
        error.textContent = "Escribe un correo válido.";
        return;
    }

    error.textContent = "";

    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("empresa", empresa);
    sessionStorage.setItem("correo", correo);
    sessionStorage.setItem("solucion", solucion);

    mostrarResumen();
    alert("¡Gracias " + nombre + "! Tu solicitud fue registrada.");
});