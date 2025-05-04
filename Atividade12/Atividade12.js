//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) utilizando um loop for.

prompt = require('prompt-sync')();

const numero = Number(prompt("Digite um número para exibir a tabuada desse número: "));

function eNumeroValido(numero){
       return !isNaN(numero) && numero >= 1 && numero <= 10;
}

function exibirTabuada(numero){
    if(eNumeroValido(numero)){
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }    
    }else{
        console.log("Número inválido, o número deve estar entre 1 e 10");
    }
}

exibirTabuada(numero);
