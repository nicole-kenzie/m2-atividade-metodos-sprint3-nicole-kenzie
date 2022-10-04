/* ~~ Testes ~~ */
// ========== Map ==========

const testePrimeiraFuncaoMap = () => {
  const resultFunction = primeiraFuncaoMap();
  const dadoEsperado = ["consolidar", "renunciar", "buscar", "perpendicular"];
  console.assert(
    JSON.stringify(resultFunction) === JSON.stringify(dadoEsperado),
    `primeiraFuncaoMap, não está funcionado conforme esperado, 
    deveria retornar ${JSON.stringify(
      dadoEsperado
    )} e está retornando: ${JSON.stringify(resultFunction)}`
  );
};

const testeSegundaFuncaoMap = () => {
  const resultFunction = segundaFuncaoMap();
  const dadoEsperado = [
    {
      nome: "jardel",
      sobrenome: "lacerda",
      nascimento: 2000,
      idade: 22,
    },
    {
      nome: "rafael",
      sobrenome: "bertoldo",
      nascimento: 1999,
      idade: 23,
    },
    {
      nome: "maria",
      sobrenome: "ferrari",
      nascimento: 2002,
      idade: 20,
    },
  ];
  console.assert(
    JSON.stringify(resultFunction) === JSON.stringify(dadoEsperado),
    `segundaFuncaoMap, não está funcionado conforme esperado, 
    deveria retornar ${JSON.stringify(
      dadoEsperado
    )} e está retornando: ${JSON.stringify(resultFunction)}`
  );
};

// ========== Filter ==========

const testePrimeiraFuncaoFilter = () => {
  const resultFunction = primeiraFuncaoFilter();
  const dadoEsperado = [79, 215];
  console.assert(
    JSON.stringify(resultFunction) === JSON.stringify(dadoEsperado),
    `primeiraFuncaoFilter, não está funcionado conforme esperado, 
    deveria retornar ${JSON.stringify(
      dadoEsperado
    )} e está retornando: ${JSON.stringify(resultFunction)}`
  );
};

const testeSegundaFuncaoFilter = () => {
  const resultFunction = segundaFuncaoFilter("Pleno");
  const dadoEsperado = [
    { nome: "Jardel", nivel_profissional: "Pleno", stack: "JavaScript" },
    { nome: "Rafael", nivel_profissional: "Pleno", stack: "NodeJs" },
    { nome: "Caique", nivel_profissional: "Pleno", stack: "CSS" },
  ];
  console.assert(
    JSON.stringify(resultFunction) === JSON.stringify(dadoEsperado),
    `segundaFuncaoFilter, não está funcionado conforme esperado, 
    deveria retornar ${JSON.stringify(
      dadoEsperado
    )} e está retornando: ${JSON.stringify(resultFunction)}`
  );
};

// ========== Find ==========

const testePrimeiraFuncaoFind = () => {
  const resultFunction = primeiraFuncaoFind(4);
  const dadoEsperado = "algo";
  console.assert(
    JSON.stringify(resultFunction) === JSON.stringify(dadoEsperado),
    `primeiraFuncaoFind, não está funcionado conforme esperado, 
    deveria retornar ${dadoEsperado} e está retornando: ${resultFunction}`
  );
};

const testeSegundaFuncaoFind = () => {
  const resultFunction = segundaFuncaoFind("S2-05");
  const dadoEsperado = {
    nome: "Pedro",
    entregas_concluidas: ["S2-11", "S3-01", "S2-05"],
  };
  console.assert(
    JSON.stringify(resultFunction) === JSON.stringify(dadoEsperado),
    `segundaFuncaoFind, não está funcionado conforme esperado, 
    deveria retornar ${JSON.stringify(
      dadoEsperado
    )} e está retornando: ${JSON.stringify(resultFunction)}`
  );
};

// ========== Reduce ==========

const testePrimeiraFuncaoReduce = () => {
  const resultFunction = primeiraFuncaoReduce(7);
  const dadoEsperado = 4700;
  console.assert(
    JSON.stringify(resultFunction) === JSON.stringify(dadoEsperado),
    `primeiraFuncaoReduce, não está funcionado conforme esperado, 
    deveria retornar ${dadoEsperado} e está retornando: ${resultFunction}`
  );
};

const testeSegundaFuncaoReduce = () => {
  const resultFunction = segundaFuncaoReduce();
  const dadoEsperado = 29;
  console.assert(
    JSON.stringify(resultFunction) === JSON.stringify(dadoEsperado),
    `segundaFuncaoReduce, não está funcionado conforme esperado, 
    deveria retornar ${dadoEsperado} e está retornando: ${resultFunction}`
  );
};

console.group("~~ Testes ~~");
console.group("========== Map ==========");
testePrimeiraFuncaoMap();
testeSegundaFuncaoMap();
console.groupEnd();

console.group("========== Filter ==========");
testePrimeiraFuncaoFilter();
testeSegundaFuncaoFilter();
console.groupEnd();

console.group("========== Find ==========");
testePrimeiraFuncaoFind();
testeSegundaFuncaoFind();
console.groupEnd();

console.group("========== Reduce ==========");
testePrimeiraFuncaoReduce();
testeSegundaFuncaoReduce();
console.groupEnd();
console.groupEnd();
