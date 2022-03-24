import { Cliente } from "./Cliente.js";

export class ContaPoupanca {

    constructor(agencia, saldo, cliente) {
        this.agencia = agencia;

        if (saldo) {
            this._saldo = saldo;
        } else {
            this._saldo = 0;
        }

        if(cliente){
            this._cliente = cliente;
            this._cliente.conta = this;
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

    //Simula o rendimento, valor adicional não necessário
    simularRendimento(meses, juro, valorAdicional){
        if(!meses || !juro) console.log("Defina os meses e juro corretamente");
        let rendimentoTotal;

        valorAdicional ? rendimentoTotal = valorAdicional + this._saldo : rendimentoTotal = this._saldo;
        
        rendimentoTotal += rendimentoTotal * Math.pow((1 + juro/100), meses);

        !valorAdicional
            ? console.log(`A conta com R$${this._saldo} rendendo ${juro.toFixed(2)}% ao mês irá totalizar R$${(rendimentoTotal - this._saldo).toFixed(2)} em ${meses} meses, totalizando R$${rendimentoTotal.toFixed(2)}`)
            : console.log(`A conta com R$${this._saldo} somando ${valorAdicional} e rendendo ${juro.toFixed(2)}% ao mês irá totalizar R$${(rendimentoTotal - this._saldo).toFixed(2)} em ${meses} meses, totalizando R$${rendimentoTotal.toFixed(2)}`);

    }

    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set cliente (cliente) {
        this._cliente = cliente;
    }
}