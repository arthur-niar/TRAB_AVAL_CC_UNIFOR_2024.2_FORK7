async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const urlBasePlaneta = 'https://swapi.dev/api/planets/';
        const limitePopulacaoAlta = 1000000;

        const resposta = await fetch(`${urlBasePlaneta}${idPlaneta}/`);
        const planeta = await resposta.json();

        const detalhesPlaneta = `
        Nome: ${planeta.name}
        Clima: ${planeta.climate}
        População: ${planeta.population}
        `;

        console.log("Detalhes do Planeta:");
        console.log(detalhesPlaneta);

        const populacao = parseInt(planeta.population);
        if (populacao > limitePopulacaoAlta) {
            console.log("Este planeta é muito populado.");
        } else {
            console.log("Este planeta tem uma população pequena.");
        }
    } catch (erro) {
        console.error('Erro ao buscar o planeta:', erro);
    }
}

buscarEDetalharPlaneta(1);
