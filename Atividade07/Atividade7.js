//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

prompt = require('prompt-sync')();

const macas = Number(prompt("Digite o número de maçãs compradas: "));

function eNumeroValido(macas) {
    return !isNaN(macas) && macas >= 0;
}

function calcularValorTotal(macas) {
    let valorTotal = 0;
    if (macas < 12) {
        valorTotal = macas * 0.30;
    } else {
        valorTotal = macas * 0.25;
    }
    return valorTotal;
}

function imprimirResultado(macas) {
    if (eNumeroValido(macas)) {
        const total = calcularValorTotal(macas);
        console.log(`${macas} custou ${total.toFixed(2)} reais`);

    } else {
        console.log("O número de maçãs é inválido.");
    }
}

imprimirResultado(macas);