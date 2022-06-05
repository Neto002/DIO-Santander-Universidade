function validaArray(array, numero) {
    try {
        if (!array && !numero) throw new ReferenceError("Esperado dois parâmetros")

        if (typeof array !== 'object') throw new TypeError("Array precisa ser object")
        if (typeof numero !== 'number') throw new TypeError("Numero precisa ser number")

        if (array.length !== numero) throw new RangeError("Tamanho inválido")

        return array
    } catch(e) {
        if (e instanceof ReferenceError) {
            console.log("ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("TypeError!")
            console.log(e.message)
        } if (e instanceof RangeError) {
            console.log("RangeError!")
            console.log(e.message)
        }
    }
}

validaArray([5, 1, 2, 3, 4], 5)