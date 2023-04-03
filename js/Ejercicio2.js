class Cuenta {
    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
     ingresar (){
        this.saldoFinal=this.saldo+500;
        return this.saldoFinal;
    }
     extraer (){
        this.saldoFinal = this.saldo-100;
        return this.saldoFinal;
    }
    get informar (){
        document.write(`La cuenta posee ${this.saldoFinal} pesos`);
    }
}

const Cuenta1 = new Cuenta ('Pedro',1000);

Cuenta1.ingresar();

Cuenta1.informar();

