//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const readline = require('readline-sync');

const number = Number(readline.question("Digite um numero inteiro..\n"));

function isNumber(number) {
    return !isNaN(number);
}

function isPar(number) {
    return number % 2 === 0;
}

if (isNumber(number)) {
    if (isPar(number)) {
        console.log(`O número ${number} é PAR.`);
    } else {
        console.log(`O número ${number} é IMPAR.`);
    }

} else {
    console.log("Você digitou um número inválido!");
}