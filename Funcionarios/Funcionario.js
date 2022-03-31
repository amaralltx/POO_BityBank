export class Funcionario {
    #cpf;
    #nome;
    #salario;
    #cargo;

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

    get nome(){
        return this.#nome;
    }

    get cargo(){
        return this.#cargo;
    }
}
