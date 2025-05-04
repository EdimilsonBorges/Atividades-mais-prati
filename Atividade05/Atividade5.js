//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

//IMC= peso / (altura)^2 

//Abaixo de 18,5 Abaixo do peso
//18,5 a 24,9 Peso normal
//25 a 29,9  Sobrepeso
//30 a 34,9 – Obesidade grau I
//35 a 39,9 – Obesidade grau II
//40 ou mais – Obesidade grau III (mórbida)


prompt = require('prompt-sync')();

const peso = Number(prompt("Digite seu peso em KG: "));
const altura = Number(prompt("Digite sua altura em Metros: "));

function eNumeroValido(numero){
    return !isNaN(numero) && numero > 0;
}

function calcularIMC(peso,altura){
    return (peso / (altura**2)).toFixed(1);
}

function exibirResultado(IMC){
    if(IMC < 18.5){
       return "Você está baixo do peso";
    }else if(IMC < 25){
        return "Parabéns você está no peso normal";
    }else if(IMC < 30){
        return "Você está com sobrepeso";
    }else if(IMC < 35){
        return "Cuidado! Você está com obesidade grau I";
    }else if(IMC < 40){
        return "Cuidado! Você está com obesidade grau II";
    }else{
        return "Cuidado! Você está com obesidade grau III (mórbida)";
    }
}

if(eNumeroValido(peso) && eNumeroValido(altura)){
    const IMC = calcularIMC(peso,altura);
    console.log(exibirResultado(IMC));
}else{
    console.log("Os valores informados são inválidos");
}