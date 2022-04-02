export class Funcionario {
    #cpf;
    #nome;
    #salario;
    #cargo;
    #bonus;
    #senha;

    constructor(nome, cpf, salario, cargo) {
        if (this.constructor == Funcionario) {
            throw new Error(
                "Conta é uma classe abstrata e não deve ser instânciada diretamente"
            );
        }
        this.#nome = nome;
        this.#cpf = cpf;
        this.#salario = salario;
        this.#cargo = cargo;
    }

    cadastrarSenha(senha){
        senha.length > 8 ? this.#senha = senha : console.log("Erro, a senha deve conter mais que 8 caractéres");
    }

    autenticar(senha){
        return this.#senha == senha ? 1 : 0;
    }

    get nome(){
        return this.#nome;
    }

    get cargo(){
        return this.#cargo;
    }
}
