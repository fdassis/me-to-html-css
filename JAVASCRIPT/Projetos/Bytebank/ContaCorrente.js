import {Cliente} from './Cliente.js';

export class ContaCorrente{
  static numeroDeContas = 0;
  agencia;
  
  #cliente;
  
  set cliente(valorCliete){
    if(valorCliete instanceof Cliente)
      this.#cliente = valorCliete;
  }

  get cliente(){
    return this.#cliente;
  }

  #saldo = 0;
  // _saldo : nao torna o atributo realmente privado eh apenas uma 
  // convensao da comunidade.
  get saldo(){
    return this.#saldo;
  }

  sacar(valor){
    if(this.#saldo >= valor){
      this.#saldo -= valor;

      return valor;
    }
  }

  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  depositar(valor){
    if(valor <=  0){
      return ;
    }

    this.#saldo += valor;
  }

  transferir(valor, conta){
    const valorTrasferir = this.sacar(valor);
    conta.depositar(valorTrasferir);
  }

  printData(){
    console.log({
      agencia : this.agencia,
      saldo: this.#saldo,
      cliente: {
         nome : this.#cliente.nome,
         CPF : this.#cliente.cpf,
      },
    })
  }

}