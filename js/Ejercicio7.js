class Contacto {
    #nombre;
    #telefono;
    constructor(nombre,telefono){
        this.#nombre= nombre;
        this.#telefono = telefono;
    }
    get nombre () {
        this.#nombre;
    }
    set nombre (nuevonombre){
        this.#nombre = nuevonombre;
    }
    get telefono () {
        this.#telefono;
    }
    set telefono (nuevotelefono){
        this.#telefono = nuevotelefono;
    }
}
class Agenda {
    constructor(tamanio = 10){
        this._contactos = [];
        this._tamanio = tamanio;
    }
    get contacto () {
        this._contactos;
    }
    set contacto (nuevoContacto){
        this._contactos;
    }
}