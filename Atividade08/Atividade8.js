//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

prompt = require('prompt-sync')();

let valor1 = prompt("Digite o primeiro valor: ");
let valor2 = prompt("Digite o sengundo valor: ");

function eNumero(valor1, valor2) {
    return !isNaN(Number(valor1)) && !isNaN(Number(valor2));
}

function ordenarValor(valor1, valor2) {
    if (valor1 !== valor2) {
        if (valor1 < valor2) {
            console.log(`Ordem crescente: ${valor1}, ${valor2}`);
        } else {
            console.log(`Ordem crescente: ${valor2}, ${valor1}`);
        }
    } else {
        console.log("Os valores não podem ser iguais");
    }
}

if (eNumero(valor1, valor2)) {
    valor1 = Number(valor1);
    valor2 = Number(valor2);
}

ordenarValor(valor1, valor2);
