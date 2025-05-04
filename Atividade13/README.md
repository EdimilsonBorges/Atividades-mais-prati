# 📘 Cálculo da Média Aritmética

Este script em JavaScript, utilizando o pacote `prompt-sync`, permite que o usuário insira uma sequência de números positivos (incluindo zero), e calcula a **média aritmética** dos valores inseridos. A execução é finalizada quando o usuário digita o número **0**.

## 📋 Funcionalidades

- Solicita repetidamente que o usuário insira um número.
- Verifica se o valor digitado é um número válido (positivo ou zero).
- Acumula os valores válidos e conta quantos números foram inseridos.
- Encerra a entrada ao digitar **0**.
- Calcula e exibe a média aritmética dos números válidos digitados.
- Emite uma mensagem de erro caso um valor inválido seja digitado (ex: letras ou números negativos).

## 📦 Dependência

Antes de executar este código, certifique-se de instalar o pacote `prompt-sync`:
```bash
npm install prompt-sync
```

### Função `eNumeroValido(numero)`
```javascript
function eNumeroValido(numero) {
    return !isNaN(numero) && numero >= 0;
}
```
Verifica se o valor inserido é um número e se é maior ou igual a zero.

### Função `exibirMedia()`
```javascript
function exibirMedia() {
    while (true) {
        const numero = Number(prompt("Digite um número ou zero pra sair: "));
        
        if (eNumeroValido(numero)) {
            if (numero === 0) break;
            soma += numero;
            count++;
        } else {
            console.log("O número digitado é inválido!!!");
        }
    }

    if (count !== 0) {
        console.log(`A média aritmética dos números informados é: ${(soma / count).toFixed(2)}`);
    }
}
```

Essa função:
- Solicita a entrada do número.
- Verifica se é válido.
- Se for `0`, interrompe o laço.
- Caso contrário, acumula o número e incrementa o contador.
- Ao final, calcula e exibe a média com 2 casas decimais.

## ▶️ Execução

Para executar este código, baixe o arquivo Atividade13.js e rode com Node.js:

```bash
node Atividade13.js
```