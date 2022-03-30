import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
        
    constructor(agencia, saldo, cliente){
        super(agencia, saldo, cliente);
        
    }
}