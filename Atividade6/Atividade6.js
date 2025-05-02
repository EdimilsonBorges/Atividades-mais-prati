//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

prompt = require('prompt-sync')();

const ladoA = Number(prompt("Digite o valor do lado A: "));
const ladoB = Number(prompt("Digite o valor do lado B: "));
const ladoC = Number(prompt("Digite o valor do lado C: "));

function eTriangulo() {
    return (ladoA < (ladoB + ladoC)) && (ladoB < (ladoA + ladoC)) ? true : false;
}

function eNumerosValidos() {
    return (!isNaN(ladoA) && ladoA > 0) && (!isNaN(ladoB) && ladoB > 0) && (!isNaN(ladoC) && ladoC > 0);
}

function verificarTriangulo(ladoA, ladoB, ladoC){
    if (!eNumerosValidos()) {
        console.log("Os valores informados são inválidos");
        return;
    }
    
    if (!eTriangulo()) {
        console.log("Os valores digitados não formam um triângulo");
        return;
    }
    
    if ((ladoA !== ladoB) && (ladoB !== ladoC)) {
        console.log("Triângulo escaleno");
    } else if ((ladoA === ladoB) && (ladoB === ladoC)) {
        console.log("Triângulo eqüilátero");
    } else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
        console.log("Triângulo isósceles");
    }
}

verificarTriangulo(ladoA, ladoB, ladoC);