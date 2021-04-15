class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class ListasCirculares{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    añadirNodoF(valor) {
        /* Instancia de la clase NodeClass */
        let newNode = new Node(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.tail.next = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head
        }
        this.length++;
        return this;
    }

    añadirNodoI(valor) {
        let newNode = new Node(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.tail.next = this.head
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head
        }
        this.length++;
        return this;
    }


/* BUSCA un nodo por el PUNTERO(NodoBuscado) */
getValorNodo(nodoBuscado) {
    if (nodoBuscado < 0 || nodoBuscado >= this.length) return null;
    let contadorNodos = 0;
    let nodoActual = this.head;
    while (contadorNodos != nodoBuscado) {
        nodoActual = nodoActual.next;
        contadorNodos++;
    }
    console.log(nodoActual);
    return nodoActual;
    /* Prueba que capturamos el valor de la posición
    return nodoActual.value; PREGUNTAR ERROR .NEXT
    */ 
}


    removerPorValor(value){

        let inicio = this.head;
        let aux = null;
        let siguiente = null;

        //
        if(this.head.value === value){
            inicio = this.head.next;
            this.head = inicio;
            this.tail.next = this.head;
        }else{
            aux = this.head;
            while(aux.next.value != value){
                aux = aux.next;
            }
            if(aux.next == this.tail){
                this.tail = aux;
                this.tail.next = this.head;
            }else{
                siguiente = aux.next;
                aux.next = siguiente.next;
            }
            this.length--;
        }
        
    }
    
        modificarNodo(nodoBuscado, value){
    	let nodoActual = newNode;
    	nodoActual = this.head;

    	let encontrado=false;

    	if(nodoActual!=null){
    		do{
    			if (nodoActual.value === nodoBuscado) {
    				nodoActual.value = value;
    				encontrado = true;
    			}
    			nodoActual= nodoActual.next;
    		}while(nodoActual!=this.head && encontrado !=true);
    	}
    }
    
    
    imprimirArrayList() {
        let arregloNodos = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloNodos.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }
        return arregloNodos;
    }

    
}

let lista = new ListasCirculares();
lista.añadirNodoF(5);
lista.añadirNodoF(4);
lista.añadirNodoF(3);
lista.añadirNodoF(2);
lista.añadirNodoF(1);
lista.añadirNodoF(7);
lista.añadirNodoF(8);
lista.añadirNodoF(9);
lista.getValorNodo(2);

console.log(lista);
