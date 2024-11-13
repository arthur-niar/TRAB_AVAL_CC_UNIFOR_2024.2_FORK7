class Usuario {
    constructor(nome, idade, cargo, dataCriacao, dataUltimoLogin, ativo, tentativasLogin, numeroTentativasExcessivas) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.dataCriacao = dataCriacao;
        this.dataUltimoLogin = dataUltimoLogin;
        this.ativo = ativo;
        this.tentativasLogin = tentativasLogin;
        this.numeroTentativasExcessivas = numeroTentativasExcessivas;
    }

    verificarAtividade() {
        if (this.ativo) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    verificarAcesso() {
        if (this.cargo === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}


function contarAdmins(usuarios) {
    let quantidadeAdmins = 0;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].cargo === "admin") {
            quantidadeAdmins++;
        }
    }
    return quantidadeAdmins;
}


function verificarTentativasExcessivas(usuario, limiteTentativas) {
    if (usuario.tentativasLogin > limiteTentativas) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}


function verificarUltimoLogin(usuario1, usuario2) {
    if (usuario1.dataUltimoLogin > usuario2.dataUltimoLogin) {
        return `${usuario1.nome} logou mais recentemente.`;
    } else {
        return `${usuario2.nome} logou mais recentemente.`;
    }
}


function verificarUsuarioRecente(usuario) {
    const agora = new Date();
    const umAnoEmMilissegundos = 31536000000;
    if (agora - usuario.dataCriacao < umAnoEmMilissegundos) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const usuarios = [
    new Usuario("Carlos", 25, "admin", new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new Usuario("Ana", 30, "guest", new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new Usuario("José", 29, "admin", new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new Usuario("Maria", 35, "guest", new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log(`Usuários admin: ${contarAdmins(usuarios)}`);

usuarios[0].verificarAtividade();
usuarios[1].verificarAcesso();

verificarTentativasExcessivas(usuarios[2], 4);

console.log(verificarUltimoLogin(usuarios[0], usuarios[3]));

verificarUsuarioRecente(usuarios[3]);
