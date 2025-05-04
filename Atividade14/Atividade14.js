//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.


prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um número para calcular o fatorial: "));

function calcularFatorial(numero) {
    let fatorial = 0;

    if (numero === 0 || numero === 1) return `O fatorial de ${numero} é 1!!!`;

    for (let i = numero; i > 0; i--) {

        if (i === 1) {
            return `O fatorial de ${numero} é ${fatorial}!!!`;
        }

        if (fatorial === 0) {
            fatorial += i * (i - 1);
        } else {
            fatorial *= (i - 1);
        }
    }
}

function eNumeroValido(numero) {
    return !isNaN(numero) && numero >= 0;
}

if (eNumeroValido(numero)) {
    console.log(calcularFatorial(numero));
} else {
    console.log(`O número passado é inválido`);
}