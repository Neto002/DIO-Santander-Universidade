interface IAnimal {
  nome: string;
  especie: "terrestre" | "aquatico" | "aereo";
  emitirSom(): void;
}

interface IFelinos extends IAnimal {
  corPelo: string;
}

const animal: IAnimal = {
  nome: "Elefante",
  especie: "terrestre",
  emitirSom: () => "barulho de elefante",
};

const felino: IFelinos = {
  nome: "Tigre",
  especie: "terrestre",
  corPelo: "preto",
  emitirSom: () => "barulho de tigre",
};
