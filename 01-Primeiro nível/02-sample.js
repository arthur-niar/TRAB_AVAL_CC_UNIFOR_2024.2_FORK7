let acesso= true;
function verAcesso(usuario) {
    if (acesso && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}
let usuario = { nome: "João", admin: true };
verAcesso(usuario);
