// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const readline = require('readline-sync');

const idade = Number(readline.question("Digite a idade de uma pessoa:\n"));

function eNumeroPositivo(idade) {
    return !isNaN(idade) && idade >= 0;
}

if(eNumeroPositivo(idade)){
    if(idade < 13){
      console.log("A pessoa é uma criança.");
    }else if(idade < 18){
        console.log("A pessoa é um adolescente.");
    }else if(idade < 65){
        console.log("A pessoa é um adulto.");
    }else{
        console.log("A pessoa é um idoso.");
    }
} else {
    console.log("Idade inválida");
}