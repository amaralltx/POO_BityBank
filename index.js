import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Gerente } from "./Funcionarios/Gerente.js";

// const cliente1 = new Cliente(
//     "Lucas Figueiredo Dascalakis Martins ",
//     "079.248.006.08"
// );

// const cliente2 = new Cliente("Lucas Amaral", "029.448.026.23");

// const correnteDoCliente1 = new ContaCorrente(1001, 1000, cliente1);

// const poupancaDoCliente1 = new ContaPoupanca(1002, 0, cliente1);

// cliente1.clienteInfo();

const funcionario1 = new Gerente("Rafaela Amaral", "079.048.357.13", 6000);

console.log(funcionario1);