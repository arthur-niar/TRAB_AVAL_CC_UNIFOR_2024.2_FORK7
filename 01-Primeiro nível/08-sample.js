const pessoa = { nome: "Maria", idade: 28 };

function verificarMaioridade(pessoa) {
    const idadeMinimaParaMaioridade = 18;
    return pessoa.idade >= idadeMinimaParaMaioridade;
}

console.log(verificarMaioridade(pessoa));
