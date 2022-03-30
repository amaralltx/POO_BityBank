import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente(
    'Lucas Figueiredo Dascalakis Martins ',
    '079.248.006.08',
);

const cliente2 = new Cliente(
    'Lucas Amaral',
    '029.448.026.23',
);

const correnteDoCliente1 = new ContaCorrente(1001, 1000, cliente1);

const poupancaDoCliente2 = new ContaPoupanca(1002,0 ,cliente2);


cliente2.clienteInfo();

cliente1.clienteInfo();

cliente2._conta.simularRendimento(12, 10, 1000);