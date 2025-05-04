//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.

async function contagemRegressiva(segundos) {
    for (let i = segundos; i > 0; i--) {
        console.log(`Contagem regressiva: ${i}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log("Tempo esgotado!");
}

contagemRegressiva(10);