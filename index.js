import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca} from "./ContaPoupanca.js";

const tiaum = new Cliente(
    'Lucas Figueiredo Dascalakis Martins ',
    '079.248.006.08',
);

const lucas = new Cliente(
    'Lucas Amaral',
    '029.448.026.23',
);

const correnteDoTiaum = new ContaCorrente(1001, 1000, tiaum);

const correnteDoLucas = new ContaCorrente(1002, 0, lucas);


correnteDoTiaum.depositar(1000);
correnteDoTiaum.sacar(1000);
correnteDoTiaum.transferir(100, lucas);

lucas.clienteInfo();

tiaum.clienteInfo();