// FORMULARIO DE CONTACTO

var formulario = document.getElementById("formulario");
var error = document.getElementById("mensaje-error");
var resumen = document.getElementById("resumen");

// Muestra en pantalla lo que está guardado en sessionStorage
function mostrarResumen() {
    var nombre = sessionStorage.getItem("nombre");

    if (nombre) {
        resumen.innerHTML =
            "<h3>Solicitud guardada</h3>" +
            "<p><b>Nombre:</b> " + nombre + "</p>" +
            "<p><b>Empresa:</b> " + sessionStorage.getItem("empresa") + "</p>" +
            "<p><b>Correo:</b> " + sessionStorage.getItem("correo") + "</p>" +
            "<p><b>Solución:</b> " + sessionStorage.getItem("solucion") + "</p>";
    }
}

// Si el usuario eligió una solución en el catálogo, se selecciona sola
var solucionElegida = sessionStorage.getItem("solucion");
if (solucionElegida) {
    document.getElementById("solucion").value = solucionElegida;
}

// Si ya había datos, se rellenan los campos
if (sessionStorage.getItem("nombre")) {
    document.getElementById("nombre").value = sessionStorage.getItem("nombre");
    document.getElementById("empresa").value = sessionStorage.getItem("empresa");
    document.getElementById("correo").value = sessionStorage.getItem("correo");
}
mostrarResumen();

// Al enviar el formulario se validan los datos
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

    // Guardar en sessionStorage
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("empresa", empresa);
    sessionStorage.setItem("correo", correo);
    sessionStorage.setItem("solucion", solucion);

    mostrarResumen();
    alert("¡Gracias " + nombre + "! Tu solicitud fue registrada.");
});