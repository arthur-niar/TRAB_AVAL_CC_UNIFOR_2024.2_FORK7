const dataInicio = "2024-01-01";
const dataFim = "2024-12-31";

function calcularDiferencaDatas(dataInicio, dataFim) {
    const diferencaMilissegundos = new Date(dataFim) - new Date(dataInicio);
    return diferencaMilissegundos
}

const resultado = calcularDiferencaDatas(dataInicio, dataFim);
console.log(resultado);