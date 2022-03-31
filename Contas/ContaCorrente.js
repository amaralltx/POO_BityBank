import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    constructor(agencia, saldo, cliente) {
        super(agencia, saldo, cliente);
    }

    sacar(valor) {
        if (valor < 0) {
            console.log("O valor de saque deve ser maior que zero");
            return 0;
        } else {
            if (this._saldo > valor * 1.005) {
                console.log(
                    `R$${valor} retirado com sucesso\nFoi cobrada uma taxa de R$${
                        valor * 1.005
                    } pelo saque`
                );
                this._saldo -= valor * 1.005;
                return valor;
            } else {
                console.log(`Não possui saldo suficiente`);
                return 0;
            }
        }
    }
}
