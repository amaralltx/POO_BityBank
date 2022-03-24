import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca} from "./ContaPoupanca.js"

export class Cliente {

    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;

        if(!(conta instanceof ContaCorrente) && !(conta instanceof ContaPoupanca)){
            console.log("Cliente registrado sem nenhuma conta");
        } else {
            this._conta = conta;
            this._conta.cliente = this;
        }

    }

    clienteInfo() {
        console.log(
            `Nome: ${this._nome}\nCPF: ${this._cpf}\nAgencia: ${this.conta.agencia}\nSaldo: ${this.conta.saldo}`
        );
    }

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    get conta(){
        return this._conta;
    }
    /**
     * @param {ContaCorrente | ContaPoupanca} conta
     */
    set conta(conta){

        (conta instanceof ContaCorrente || conta instanceof ContaPoupanca) ? this.conta = conta : console.log("Erro, insira uma conta válida");
    }


}