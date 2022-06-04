function alunosAprovados(alunos, mediaFinal) {
    if (!alunos || !mediaFinal) return "Insira os dois parâmetros necessários"
    let alunosAprovados = []
    for (let aluno of alunos) {
        const {nota, nome} = aluno
        if (nota >= mediaFinal) {
            alunosAprovados.push(nome)
        }
    }
    return alunosAprovados
}

class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }
}

const aluno1 = new Aluno("Antonio Neto", 6)
const aluno2 = new Aluno("João", 7)
const aluno3 = new Aluno("Maria", 5)

console.log(alunosAprovados([aluno1, aluno2, aluno3], 6));