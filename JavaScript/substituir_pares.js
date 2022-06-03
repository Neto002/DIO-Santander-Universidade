let substituirPares = (array) => {
    if(!array) return -1
    if(!array.length) return -1

    array.forEach(element => {
        if (isNaN(element)) {
            console.log("Insira um array somente com números");
            return -1
        }
    })

    if (!array) return "Digite um array válido"
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] !== 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0
        }
    }
    return array
}

console.log(substituirPares(['false', 'a']));