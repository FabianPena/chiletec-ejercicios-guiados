document.addEventListener("DOMContentLoaded",cargarDatosIniciales);

function agregarProducto(){
    const nombre = prompt("Nombre el producto:");
    const cantidad = parseInt(prompt("Cantidad del producto"),10);
    const producto = { nombre, cantidad };
    const inventario = cargarInventario();
    inventario.push(producto);
    guardarInventario(inventario);
    alert("Producto agregado correctamente!!");
}
function mostrarInventario(){
    const inventario = cargarInventario();
    const output = document.getElementById("dvOutput");
    output.innerHTML = inventario.map((producto) => `${producto.nombre}: ${producto.cantidad}`).join("<br>");
}

function ordenarProductos() {
    let inventario = cargarInventario();
    inventario = ordenarPorNombre(inventario);
    guardarInventario(inventario);
    mostrarInventario();
}
function buscarProductoEnProducto(){
    const inventario = cargarInventario();
    const nombreProducto = prompt("Nombre del producto a buscar:");
    const productoEncontrado = buscarProducto(inventario, nombreProducto);
    if(productoEncontrado){
        alert(`Producto encontrado: ${productoEncontrado.nombre}, ${productoEncontrado.cantidad}`);
    } else {
        alert("Productom no encontrado.");
    }
}