import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca} from "./ContaPoupanca.js"

export class Cliente {

    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;

        if(!(conta instanceof ContaCorrente) || !(conta instanceof ContaPoupanca)){
            console.log("Cliente registrado sem nenhuma conta");
            this._conta = undefined;
        } else {
            this._conta = conta;
            this._conta._cliente = this;
        }

    }

    clienteInfo() {
        console.log(this);
        console.log(
            `Nome: ${this._nome}\nCPF: ${this._cpf}\nAgencia: ${this._conta._agencia}\nSaldo: ${this._conta._saldo}`
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
    
    set conta(conta){
        this._conta = conta;
    }
}