//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

function imprimirFibonacci(quantidade) {

    let primeiroNumero = 1;
    let numeroAtual = 1;
    let resultado = 0;

    for (let i = 0; i < quantidade; i++) {

        primeiroNumero = numeroAtual;
        numeroAtual = resultado;
        resultado = primeiroNumero + numeroAtual;

        console.log(resultado);
    }
}

imprimirFibonacci(10);