const pessoa = {
  nome: "Mariana",
  idade: 28,
  profissao: "desenvolvedora",
};

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const maria: Pessoa = {
  nome: "Maria",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
  nome: "Jessica",
  idade: 23,
  materias: ["JavaScript", "TypeScript"],
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(jessica.materias);
