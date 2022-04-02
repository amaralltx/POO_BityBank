import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    #bonus;
    constructor(nome, cpf, salario) {
        super(nome, cpf, salario, "Diretor");
        this.#bonus = 2;
    }
}
