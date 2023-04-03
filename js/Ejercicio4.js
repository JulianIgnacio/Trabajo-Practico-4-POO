class Producto {
    constructor(codigo,nombre,precio){
        this.codigo =codigo;
        this.nombre =nombre;
        this.precio =precio;
    }
    imprimeDatos (){
        document.write(`El producto ${this.nombre} posee el codigo ${this.codigo} y su precio es $${this.precio}`);
    }
}
let arrayproductos = [];

const producto1 = new Producto(01,'Arroz',150);
const producto2 = new Producto(02,'Pollo',500);
const producto3 = new Producto(03,'Gaseosa',400);

arrayproductos.unshift(producto1,producto2,producto3);

document.write(producto1.imprimeDatos());
document.write('<br/>');
document.write(producto2.imprimeDatos());
document.write('<br/>');
document.write(producto3.imprimeDatos());

