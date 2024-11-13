async function buscarPlaneta(id) {
    const url = `https://swapi.dev/api/planets/${id}/`;s

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }

        const planeta = await resposta.json();
        return planeta;
    } catch (error) {
        console.error("Ocorreu um erro ao buscar o planeta:", error.message);
    }
    return null;
}

async function exibirNomePlaneta(id) {
    const planeta = await buscarPlaneta(id);
    if (planeta) {
        console.log(planeta.name);
    }
}

exibirNomePlaneta(1);
