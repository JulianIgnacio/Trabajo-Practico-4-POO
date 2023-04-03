class Contacto{
    #nombre;
    #telefono;
    constructor(nombre, telefono){
        this.#nombre = nombre;
        this.#telefono = telefono;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }
    get telefono(){
        return this.#telefono;
    }

    set telefono(nuevoTelefono){
        this.#telefono = nuevoTelefono
    }
}

class Agenda{
    constructor(tamanio = 10){
       this._contactos = [];  
       this._tamanio = tamanio;
    }

    get contactos(){
        return this._contactos;
    }

    set contactos(nuevoContacto){
        this._contactos.push(nuevoContacto)
      
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(nuevoTamanio){
        this._tamanio = nuevoTamanio
    }
    aniadirContacto(contactoNuevo){

        if(!this.agendaLlena()){
            this.contactos = contactoNuevo
            console.log(this.contactos)
        }
    }

    agendaLlena(){
        if(this.contactos.length === this.tamanio){
            console.log('agenda llena');
            return true;
        }else{
            console.log('la agenda tiene espacio ');
            return false;
        }
    }
}

let agendaNueva = new Agenda();
console.log(agendaNueva);
do{
    const opcion = prompt(`Seleccione una de las siguientes opciones:
    1- Añadir un contacto
    2- Verificar si existe un contacto
    3- Listar los contactos
    4- Buscar un contacto
    5- Eliminar un contacto
    6- Verificar si la agenda esta llena
    7- Verificar espacios disponibles en la agenda
    8- Modificar el tamaño de la agenda`);
    
    switch(opcion){
        case '1':
            let nombre = prompt('Ingrese un nombre');
            let telefono = prompt('Ingrese un telefono');
            let contactoNuevo = new Contacto(nombre,telefono);
            agendaNueva.aniadirContacto(contactoNuevo);
            break;
        case '2':
            console.log('Verificar si existe un contacto');
            break;
        case '3':
            console.log('1- Añadir un contacto');
            break;
        case '4':
            console.log('1- Añadir un contacto');
            break;
        case '5':
            console.log('1- Añadir un contacto');
            break;
        case '6':
            console.log('1- Añadir un contacto');
            break;
        case '7':
            console.log('1- Añadir un contacto');
            break;
        case '8':
            console.log('1- Añadir un contacto');
            break;
        default:
            alert('Ingresaste una opcion incorrecta')
    
    }
}while(confirm('¿Desea realizar otra operacion?'))