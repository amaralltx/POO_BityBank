import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    #bonus;
    constructor(nome, cpf, salario) {
        super(nome, cpf, salario, "Gerente");
        this.#bonus = 1.2;
    }
}
