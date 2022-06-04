function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: "Antonio Neto",
    idade: 19
}

const pessoa2 = {
    nome: "Joãp",
    idade: 16
}

console.log(calculaIdade.call(pessoa1, 8));
console.log(calculaIdade.apply(pessoa1, [8]));