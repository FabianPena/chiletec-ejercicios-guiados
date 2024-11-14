function buscarProducto(inventario, nombre){
    return inventario.find((producto) => producto.nombre === nombre);
}
function ordenarPorNombre(inventario){
        for (let i = 0; i < inventario.length - 1; i++) {
          for (let j = 0; j < inventario.length - 1 - i; j++) {
            if (inventario[j].nombre > inventario[j + 1].nombre) {
              [inventario[j], inventario[j + 1]] = [inventario[j + 1], inventario[j]];
            }
          }
        }
      
    return inventario;
}
function cargarInventario(){
    const data = localStorage.getItem("inventario");
    return data ? JSON.parse(data) : [];
}
function guardarInventario(inventario){
    localStorage.setItem("inventario", JSON.stringify(inventario));
}
function cargarDatosIniciales(){
    fetch("datos.json")
    .then((response) => response.json())
    .then((data) => {
        guardarInventario(data);
        mostrarInventario();
    })
}