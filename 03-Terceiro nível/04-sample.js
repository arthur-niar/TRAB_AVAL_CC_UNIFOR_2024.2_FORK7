async function buscarPersonagemENave(idPersonagem) {
    try {
        const urlBasePersonagem = 'https://swapi.dev/api/people/';
        const limiteTripulacaoNaveGrande = 100;

        const respostaPersonagem = await fetch(`${urlBasePersonagem}${idPersonagem}/`);
        const personagem = await respostaPersonagem.json();

        if (personagem.starships.length > 0) {
            const urlPrimeiraNave = personagem.starships[0];
            const respostaNave = await fetch(urlPrimeiraNave);
            const nave = await respostaNave.json();

            const tripulacao = parseInt(nave.crew);
            if (tripulacao > limiteTripulacaoNaveGrande) {
                console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
            } else {
                console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
            }
        } else {
            console.log(`${personagem.name} não possui naves registradas.`);
        }

    } catch (erro) {
        console.error('Erro ao buscar o personagem ou sua nave:', erro);
    }
}

buscarPersonagemENave(1);
