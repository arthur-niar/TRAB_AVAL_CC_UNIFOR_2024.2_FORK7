function verificarSePodeDirigir(idade) {
    const idadeMinimaParaDirigir = 18;
    if (idade >= idadeMinimaParaDirigir) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

console.log(verificarSePodeDirigir(16));
