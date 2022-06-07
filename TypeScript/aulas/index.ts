/*interface IUsuario {
  id: string;
  email: string;
  cargo?: "funcionario" | "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    // redirecionar(usuario.cargo)
  }

  // redirecionar para area do usuario
}*/

/*interface Cachorro {
  readonly nome: string;
  readonly idade: number;
  readonly parqueFavorito?: string;
}

type ReadOnlyCachorro = {
  readonly [K in keyof Cachorro]-?: Cachorro[K];
};

class MeuCachorro implements ReadOnlyCachorro {
  nome: string;
  idade: number;
  parqueFavorito: string;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro("Cachorro", 10);
cao.nome = "a";*/

import $ from "jquery";

$.fn.extend({
  nomeFuncao() {
    console.log("Nome da função");
  },
});

$("body").nomeFuncao();
