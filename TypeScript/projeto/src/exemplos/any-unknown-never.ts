let anyEstaDeVolta: any;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = "teste";
unknownValor = true;
unknownValor = 'a';

let stringTest2: string = 'test'


if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500)