function verificaPalindromo(string) {
    if (!string) return "String inexistente"

    return string.split("").reverse().join("") === string
}

function verificaPalindromo2(string) {
    if (!string) return "String inexistente"

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length-1 - i]) {
            return false
        }
    }

    return true
}

verificaPalindromo3("roma me tem amor")