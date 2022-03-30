import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(agencia, valor, cliente){
        super(agencia, 0, cliente);
    
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

}