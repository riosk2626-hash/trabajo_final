// CATÁLOGO DE SOLUCIONES
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

var categorias = [
    { valor: "todas", texto: "Todas" },
    { valor: "inventario", texto: "Inventario" },
    { valor: "produccion", texto: "Producción" },
    { valor: "recursos", texto: "Recursos" },
    { valor: "logistica", texto: "Logística" }
];

var filtros = document.getElementById("filtros");
var catalogo = document.getElementById("catalogo");

function mostrarFiltros() {
    filtros.innerHTML = "";

    for (var i = 0; i < categorias.length; i++) {
        var c = categorias[i];

        filtros.innerHTML +=
            '<button class="boton" onclick="mostrarSoluciones(\'' + c.valor + '\')">' +
            c.texto +
            '</button>';
    }
}

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

function solicitar(posicion) {
    sessionStorage.setItem("solucion", soluciones[posicion].nombre);
    window.location.href = "contacto.html";
}

mostrarFiltros();
mostrarSoluciones("todas");