// Map

// Sem usar thisArg

/*function mapSemThis(array) {
    return array.map((item) => item * 2)
}

console.log(mapSemThis([2, 4, 6, 8, 10]));
// array.forEach((item) => item * 2) // retorna undefined

// Usando parâmetro thisArg
const obj1 = {
    value: 2,
}

const obj2 = {
    value: 3,
}

function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value
    }, thisArg)
}

const numeros = [1, 2]

console.log(`this -> obj1 ${mapComThis(numeros, obj1)}`);
console.log(`this -> obj2 ${mapComThis(numeros, obj2)}`);*/


// Filter

/*function filtraNumerosPares(array) {
    return array.filter((item) => item % 2 === 0)
}

const array = [1, 23, 55, 67, 30, 2, 4]
console.log(filtraNumerosPares(array));*/

// Reduce

function somaArray(array) {
    return array.reduce((prev, current) => prev + current)
}

console.log(somaArray([1, 2, 3, 4, 5, 6, 7]));

function calculaSaldoFinal(arrayPrecos, saldoDisponivel) {
    return arrayPrecos.reduce(function(prev, current /*, index*/) {
        // console.log("rodada ", index+1);
        // console.log({prev});
        // console.log({current});
        return prev - current.preco
    }, saldoDisponivel)
}

const lista = [
    {
        name: 'sabao',
        preco: 30
    },
    {
        name: "cereal",
        preco: 12
    },
    {
        name: "toalha",
        preco: 30
    }
]

const saldoDisponivel = 100

console.log(calculaSaldoFinal(lista, saldoDisponivel));