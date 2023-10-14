//Polimorfismo (métodos se comportarem de maneiras diferentes em subclasses)

//Superclass ou classe mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente. ${this.saldo}`)
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`Agência: ${this.agencia}, Conta ${this.conta}, Saldo ${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.constructor = ContaCorrente

//Reescrevendo esse prototype para que seja utilizado pela ContaCorrente e tenha os atributos necessários
//Nesse o método sacar vai ter ações diferentes
ContaCorrente.prototype.sacar = function(valor) {
    if(valor >(this.saldo + this.limite)) {
        console.log(`Saldo insuficiente. ${this.saldo}`)
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.constructor = ContaPoupanca

const CC = new ContaCorrente(12, 33, 0)
CC.depositar(10)
CC.sacar(110)
CC.sacar(1)

console.log()

const CP = new ContaPoupanca(12, 33, 0)
CP.depositar(10)
CP.sacar(110)
CP.sacar(1)
