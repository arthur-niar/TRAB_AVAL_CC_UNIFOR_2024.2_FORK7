function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    const bonusGerente = 1000;
    const bonusSupervisor = 500;
    const bonusPadrao = 200;
    const descontoPadrao = 300;

    let salarioComBonus;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusPadrao;
    }

    const salarioComDesconto = salarioComBonus - descontoPadrao;

    const limiteImpostoAlto = 5000;
    const limiteImpostoMedio = 3000;
    const aliquotaImpostoAlto = 0.27;
    const aliquotaImpostoMedio = 0.18;
    const aliquotaImpostoBaixo = 0.11;

    let salarioFinal;
    if (salarioComDesconto > limiteImpostoAlto) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * aliquotaImpostoAlto);
    } else if (salarioComDesconto > limiteImpostoMedio) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * aliquotaImpostoMedio);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * aliquotaImpostoBaixo);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, "gerente");
console.log(`O salário final é: ${salario}`);
