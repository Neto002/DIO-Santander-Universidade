class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    get saldo() {
        return this._saldo
    }

    set saldo(saldo) {
        this._saldo = saldo
    }

    sacar(valor) {
        if (valor <= saldo) {
            this._saldo -= valor
            return this._saldo
        } else {
            return "Você não possui saldo suficiente para a operação!";
        }
    }

    depositar(valor) {
        this.saldo += valor

        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'universitária'
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação negada!"
        }

        this._saldo -= valor
    }
}

const minhaConta = new ContaCorrente(1, 234, true)
console.log(minhaConta.saldo);