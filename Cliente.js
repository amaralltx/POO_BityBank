import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";

export class Cliente {
    #cpf;
    #nome;

    constructor(nome, cpf, conta) {
        this.#nome = nome;
        this.#cpf = cpf;

        if (
            !(conta instanceof ContaCorrente) ||
            !(conta instanceof ContaPoupanca)
        ) {
            console.log("Cliente registrado sem nenhuma conta");
            this._conta = Array();
        } else {
            this._conta = [conta];
            this._conta._cliente = this;
        }
    }

    clienteInfo() {
        console.log(`Nome: ${this.#nome}\nCPF: ${this.#cpf}`);
        let i = 1;
        this._conta.forEach((element) => {
            console.log(
                `Conta ${i}\nAgencia: ${element._agencia}\nSaldo: R$${element._saldo}\n`
            );
            i++;
        });
    }

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get conta() {
        return this._conta;
    }

    adicionaConta(conta) {
        this._conta.push(conta);
    }
}
