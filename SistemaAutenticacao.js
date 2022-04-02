export class SistemaAutenticacao {
    static login(usuario, senha) {

        if("autenticar" in usuario && usuario.autenticar instanceof Function){
            if (usuario.autenticar(senha)) {
                console.log("Login efetuado com sucesso");
                return true;
            } else {
                console.log("Erro - Senha inválida");
                return false;
            }
        } else {
            console.log("Este objeto não possui um método de autenticação");
        }
    }
}
