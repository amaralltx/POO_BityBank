import { Cliente } from "./Cliente.js";

export class Conta {

    constructor(agencia, saldo, cliente) {
        this._agencia = agencia;
        this._saldo = saldo;
        this._cliente = cliente;
        this._cliente._conta = this;
    }

    transferir(valor, destinatario) {
        if (!valor) {
            console.log("Erro, insira um valor válido para transferir");
        } else if (!destinatario) {
            console.log("Erro, preencha o destinatário corretamente");
        } else {
            if (this.saldo - valor < 0) {
                console.log("Erro, saldo não disponível");
            } else {
                destinatario.conta.depositar(this.sacar(valor));
                console.log(
                    "Transferencia com o valor de R$" +
                        valor +
                        " realizada com sucesso"
                );
            }
        }
    }

    depositar(valor) {
        valor > 0
            ? (this._saldo += valor)
            : console.log("O Depósito deve ser um valor maior que zero");
    }

    sacar(valor) {
        if (valor < 0) {
            console.log("O valor de saque deve ser maior que zero");
            return 0;
        } else {
            this._saldo > valor
                ? (this._saldo -= valor)
                : console.log(`Não possui saldo suficiente`);
            return valor;
        }
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set cliente(clienteAssociado) {
        this._cliente = clienteAssociado;
    }

    get cliente() {
        return this._cliente;
    } 

    get agencia(){
        return this._agencia;
    }
}
