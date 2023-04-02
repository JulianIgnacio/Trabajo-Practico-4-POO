class Cuenta {
    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
     ingresar (){
        this.saldo= saldo+500;
    }
     extraer (){
        this.saldo = saldo-100;
    }
    informar (){
        console.log(`La cuenta posee ${this.saldo} pesos`);
        document.write(`La cuenta posee ${this.saldo} pesos`);
    }
}

Cuenta1 = new Cuenta ('Pedro',1000);

Cuenta1.ingresar();

Cuenta1.informar();

