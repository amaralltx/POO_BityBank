import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    
    constructor(agencia, saldo, clienteAssociado) {
        this.agencia = agencia;

        if(clienteAssociado){
            this._cliente = clienteAssociado;
            clienteAssociado._conta = this
        } else {
            this._cliente = 0;
        }

        if (saldo) {
            this._saldo = saldo;
        } else {
            this._saldo = 0;
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

    transferir(valor, destinatario){
        if(!valor){
            console.log("Erro, insira um valor válido para transferir");
        } else if(!destinatario){
            console.log("Erro, preencha o destinatário corretamente");
        } else {
            if(this.saldo - valor < 0){
                console.log("Erro, saldo não disponível");
            } else {
                destinatario.conta.depositar(this.sacar(valor));
                   console.log("Transferencia com o valor de R$" + valor +" realizada com sucesso");
            }
        }
    }
    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set cliente(clienteAssociado){
        this._cliente = clienteAssociado;
    }

    get cliente(){
        return this.cliente;
    }
}