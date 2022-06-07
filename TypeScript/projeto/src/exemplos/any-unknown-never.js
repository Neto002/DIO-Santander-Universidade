"use strict";
let anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "teste";
unknownValor = true;
unknownValor = 'a';
let stringTest2 = 'test';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
