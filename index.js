import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente(
    "Lucas Figueiredo Dascalakis Martins ",
    "079.248.006.08"
);

// const cliente2 = new Cliente("Lucas Amaral", "029.448.026.23");

// const correnteDoCliente1 = new ContaCorrente(1001, 1000, cliente1);

// const poupancaDoCliente1 = new ContaPoupanca(1002, 0, cliente1);

// cliente1.clienteInfo();

cliente1.cadastrarSenha("12345678");

const funcionario1 = new Diretor("Rafaela Amaral", '07904835713', 6000);

const funcionario2 = new Gerente("Rafael Teixeira" , '00926515976' , 3500);

const a = new Array();
SistemaAutenticacao.login(cliente1, "12345678");

