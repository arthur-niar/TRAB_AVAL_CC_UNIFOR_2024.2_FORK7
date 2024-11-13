function calcularFrete(distancia) {
    const valorPorUnidadeDeDistancia = 10;
    return distancia * valorPorUnidadeDeDistancia;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
