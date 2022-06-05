// Funções que são executadas assim que o programa inicia
(
    (a, b) => {
        return a+b
    }
)(5, 9)

// Callback

const calcular = function(operacao, n1, n2) {
    return operacao(n1, n2)
}

const soma = function (n1, n2) {
    return n1 + n2
}

const subtracao = function (n1, n2) {
    return n1 - n2
}

console.log(calcular(soma, 1, 2));
console.log(calcular(subtracao, 1, 2));

// Spread

function soma(x, y, z) {
    return x+y+z
}

const num = [1, 2, 3]
console.log(soma(...num));

// Rest

function confereTamanho(...args) {
    console.log(args.length);
}

// Object Destructuring

const user = {
    id: 1,
    displayName: "Neto002",
    fullName: {
        firstName: "Antonio",
        lastName: "Neto"
    }
}

function getId({id}) {
    return id
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`
}

getId(user)

getFullName(user)