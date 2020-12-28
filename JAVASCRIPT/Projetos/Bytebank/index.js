import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

//Instancias da classe cliente
const cliente1 = new Cliente("Ricardo", 2032324133);

const cliente2 = new Cliente("Maria", 21312312312);

//Instancias da clasee ContaCorrente
const conta1 = new ContaCorrente(10001, cliente1);

const conta2 = new ContaCorrente(20001, cliente2);

conta1.depositar(1000);
conta1.transferir(300, conta2); 

conta1.printData();
conta2.printData();
console.log(ContaCorrente.numeroDeContas)