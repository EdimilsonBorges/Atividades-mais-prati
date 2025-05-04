//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

prompt = require('prompt-sync')();

function exibirMenu(){
    console.log("----------------------");
    console.log("| 1- MAÇÃ             |");
    console.log("| 2- PÊRA             |");
    console.log("| 3- MORANGO          |");
    console.log("----------------------");
}

function selecionarOpcao(opcao){
    switch(opcao){
        case "1":
            return "Você gosta mais de MAÇÃ";
        case "2":
            return "Você gosta mais de PÊRA";
        case "3":
            return "Você gosta mais de MORANGO";
        default:
            return "Opção inválida."
    }
}

exibirMenu();
const opcao = prompt("Escolha a opção da fruta que você mais gosta: ");
const selecionada = selecionarOpcao(opcao);
console.log(selecionada);

