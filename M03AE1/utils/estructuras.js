class Pila {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
}
class Cola {
    constructor() {
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
}

class Nodo {
    constructor(data) {
        this.data = data;
        this.izquierdo = null;
        this.derecho = null;
    }
}
class ArbolBinario {
    constructor() {
        this.raiz = null;
    }
    agregar(data){
        const nuevoNodo = new Nodo(data);
        if(!this.raiz) this.raiz = nuevoNodo;
        else this.insertarNodo(this.raiz, nuevoNodo);
    }
    insertarNodo(nodo, nuevoNodo){
        if(nuevoNodo.data < nodo.data) {
            if(!nodo.izquierdo) nodo.izquierdo = nuevoNodo;
            else this.insertarNodo(nodo.izquierdo, nuevoNodo);
        } else {
            if (!nodo.derecho) nodo.derecho = nuevoNodo;
            else this.insertarNodo (nodo.derecho, nuevoNodo);
        }
    }
} 
