const possuiAcesso = true;

function verificarAcesso(usuario) {
    if (possuiAcesso && usuario.eAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", eAdmin: true };
verificarAcesso(usuario);