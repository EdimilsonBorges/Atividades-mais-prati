//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

prompt = require('prompt-sync')();

const numero = Number(prompt("Digite um número inteiro: "));

function eNumeroInteiro(numero){
    return !isNaN(numero) && Number.isInteger(numero);
}

function reescrever(numero, vezes){
    if(eNumeroInteiro(numero)){
        while (vezes > 0) {
            console.log(numero);
            vezes--;
        }
    }else{
        console.log("O número é inválido!");
    }
}

reescrever(numero,10);