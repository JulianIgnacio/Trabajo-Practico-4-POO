class Rectangulos {
    constructor (alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    get Perimetro (){
        return this.calcperimetro;
    }
    get Area () {
        return this.calcarea();
    }
    calcarea (){
        return this.alto*this.ancho;
    }
    calcperimetro (){
        return (this.alto+this.ancho)*2;
    }
}
const rectangulo1 = new Rectangulos (5,10);

document.write(`El perimetro es ${rectangulo1.Perimetro()}`);
document.write('<br/>')
document.write(`El area es ${rectangulo1.Area}`);
