// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function CargarModal(producto,precio,cliente) {
    $("#IdUser").val(cliente);
    $("#IdProducto").val(producto);
    $("#IdPrecio").val(precio);
}
function Calcular(cantidad,precio) {
    $("#monto").val(cantidad*precio);
}

function Limpiar() {
    $("#IdUser").val("");
    $("#IdProducto").val("");
    $("#IdPrecio").val("");
    $("#monto").val("");
    $("#cantidad").val("");
    $("#tarjeta").val("");

}