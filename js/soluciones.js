// CATÁLOGO DE SOLUCIONES

// Arreglo de objetos: cada objeto es una solución
var soluciones = [
    { nombre: "Gestión de inventarios", categoria: "inventario",
      descripcion: "Control de materias primas, herramientas y repuestos en tiempo real." },
    { nombre: "Alertas de stock", categoria: "inventario",
      descripcion: "Avisos automáticos cuando un producto está por agotarse." },
    { nombre: "Control de producción", categoria: "produccion",
      descripcion: "Seguimiento de órdenes de producción y productividad." },
    { nombre: "Mantenimiento industrial", categoria: "produccion",
      descripcion: "Programación y registro de mantenimientos de maquinaria." },
    { nombre: "Control de consumos", categoria: "recursos",
      descripcion: "Monitoreo de energía, agua y combustible." },
    { nombre: "Reportes e indicadores", categoria: "recursos",
      descripcion: "Gráficos y datos para tomar mejores decisiones." },
    { nombre: "Gestión logística", categoria: "logistica",
      descripcion: "Organización de pedidos, despachos y movimientos de productos." }
];

var catalogo = document.getElementById("catalogo");

// Muestra las tarjetas; si la categoría es "todas" muestra todo
function mostrarSoluciones(categoria) {
    catalogo.innerHTML = "";

    for (var i = 0; i < soluciones.length; i++) {
        var s = soluciones[i];

        if (categoria == "todas" || s.categoria == categoria) {
            catalogo.innerHTML +=
                '<div class="tarjeta">' +
                '<h3>' + s.nombre + '</h3>' +
                '<p>' + s.descripcion + '</p>' +
                '<button class="boton" onclick="solicitar(' + i + ')">Solicitar información</button>' +
                '</div>';
        }
    }
}

// Guarda la solución elegida y va a la página de contacto
function solicitar(posicion) {
    sessionStorage.setItem("solucion", soluciones[posicion].nombre);
    window.location.href = "contacto.html";
}

// Al cargar la página se muestran todas
mostrarSoluciones("todas");