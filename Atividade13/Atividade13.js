//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

prompt = require('prompt-sync')();

let count = 0;
let soma = 0;

function exibirMedia() {
    while (true) {
        const numero = Number(prompt("Digite um número ou zero pra sair: "));
        if (eNumeroValido(numero)) {
            if (numero === 0) {
                break;
            }
            soma += numero;
            count++;
        } else {
            console.log("O número digitado é inválido!!!");
        }
    }

    if (count !== 0) {
        console.log(`A média aritmética dos números informados é: ${(soma / count).toFixed(2)}`);
    }
}

function eNumeroValido(numero) {
    return !isNaN(numero) && numero >= 0;
}

exibirMedia();


