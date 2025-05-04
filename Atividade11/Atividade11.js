//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

prompt = require('prompt-sync')();

let total = 0;
for(let i = 0; i < 5; i++){
  numero = Number(prompt("Digite um número: "));
  if(isNaN(numero)){
    console.log("Número inválido, digite um número válido.");
    i--;
    continue;
  }
  total += numero;
}

console.log(`Soma total dos 5 números digitados é: ${total}`);