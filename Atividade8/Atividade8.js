//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

prompt = require('prompt-sync')();

const valor1 = prompt("Digite o primeiro valor: ");
const valor2 = prompt("Digite o sengundo valor: ");

if (valor1 !== valor2) {
    if (valor1 < valor2) {
        console.log(`Ordem crescente: ${valor1}, ${valor2}`);
    } else {
        console.log(`Ordem crescente: ${valor2}, ${valor1}`);
    }
}else{
    console.log("Os valores não podem ser iguais");
}