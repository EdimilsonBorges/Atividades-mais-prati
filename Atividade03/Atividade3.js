//Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

const nota = Number(prompt("Digite a nota do aluno de 0 a 10: "));

function eNotaValida(nota){
    return !isNaN(nota) && nota >= 0 && nota <= 10;
}

if(eNotaValida(nota)){
    if(nota < 5){
        console.log("Aluno Reprovado");
    }else if(nota < 7){
        console.log("Aluno em Recuperação");
    }else{
        console.log("Aluno Aprovado");
    }

}else{
    console.log("Essa nota é inválida");
}