const { log } = require('console');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cargarTareas(){
    const data = fs.readFileSync('tareas.json','utf-8');
    return JSON.parse(data);
}

function guardarTareas(tareas){
    fs.writeFileSync('tareas.json', JSON.stringify(tareas,null,2));
}

function agregarTarea(nombre){
    const tareas = cargarTareas();
    tareas.push({ nombre, completada: false});
    guardarTareas(tareas);
    console.log(`Tarea "${nombre}" agregada.`);
}
function mostrarTareas(){
    const tareas = cargarTareas();
    console.log("Lista de tareas:");
    tareas.forEach((tarea, i) => {
        console.log(`${i + 1}. ${tarea.nombre} - ${tarea.completada ? "Completada" : "Pendiente"}`);
    });
}

function eliminarTarea(index){
    const tareas = cargarTareas();
    if(index >=0 && index < tareas.length){
        const tareaEliminada = tareas.splice(index,1);
        guardarTareas(tareas);
        console.log(`Tarea "${tareaEliminada[0].nombre}" eliminada.`)
    } else {
        console.log('Indice no valido.');
    }
}

function menu() {
    console.log("\nGestor de Tareas:");
    console.log("1. Agregar Tarea");
    console.log("2. Ver Tareas");
    console.log("3. Eliminar Tarea");
    console.log("4. Salir");
    rl.question("Selecciona una opción: ", (opcion) => {
    if (opcion === "1") {
        rl.question("Nombre de la tarea: ", (nombre) => {
        agregarTarea(nombre);
        menu();
    });
    } else if (opcion === "2") {
        mostrarTareas();
        menu();
    } else if (opcion === "3") {
        rl.question("Número de la tarea a eliminar: ", (index) => {
        eliminarTarea(parseInt(index) - 1);
        menu();
    });
    } else if (opcion === "4") {
        rl.close();
    } else {
        console.log("Opción no válida.");
        menu();
    }
});
}
menu();