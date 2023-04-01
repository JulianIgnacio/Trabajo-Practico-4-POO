class Auto {

    #modelo;
    constructor (marca,modelo,estadoInicial){
        this.marca=marca;
        this.#modelo = modelo;
        this.estadoInicial = estadoInicial;
    }
    encender(){
        document.write('Auto encendido');
    }
    apagar () {
        document.write('El auto se apago');
    }
}

const autoF = new Auto('Fiat','Palio','apagado');

autoF.encender();
