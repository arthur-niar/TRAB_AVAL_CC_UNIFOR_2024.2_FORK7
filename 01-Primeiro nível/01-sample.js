function obterNumerosPares(numeros) {
    const numerosPares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
        }
    }
    return numerosPares;
}

const valores = [1, 2, 3, 4, 5, 6];
const valoresPares = obterNumerosPares(valores);
console.log(valoresPares);