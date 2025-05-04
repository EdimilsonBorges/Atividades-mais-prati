# Verificador de Número Par ou Ímpar

Este programa em Node.js solicita que o usuário digite um número inteiro, verifica se a entrada é válida e informa se o número é **par** ou **ímpar**.

---

## 🧩 Funcionalidades

- Lê a entrada do usuário via terminal.
- Verifica se o valor digitado é um número inteiro.
- Determina se o número é par ou ímpar.
- Exibe mensagens apropriadas com base na entrada.

---

## 🔍 Explicação do Código

### 📥 Entrada do Usuário

```js
const number = Number(readline.question("Digite um numero inteiro..
"));
```

- Utiliza o pacote `readline-sync` para capturar a entrada do terminal.
- Converte a entrada para o tipo `number` usando `Number()`.

### 🧪 Função `isNumber`

```js
function isNumberInterger(number) {
    return !isNaN(number) && Number.isInteger(number);
}
```

- Verifica se a variável contém um valor numérico válido e inteiro.
- Retorna `true` se for um número inteiro, ou `false` se for `NaN` ou um número quebrado.

### ➗ Função `isPar`

```js
function isPar(number) {
    return number % 2 === 0;
}
```

- Verifica se o número é divisível por 2 sem deixar resto.
- Retorna `true` para números pares, `false` para ímpares.

### 🔁 Condicional Principal

```js
if (isNumberInterger(number)) {
    if (isPar(number)) {
        console.log(`O número ${number} é PAR.`);
    } else {
        console.log(`O número ${number} é IMPAR.`);
    }
} else {
    console.log("Você digitou um número inválido!");
}
```

- Primeiro verifica se a entrada é válida com `isNumberInterger()`.
- Depois avalia a paridade com `isPar()` e exibe a resposta apropriada.
- Caso o valor digitado não seja um número, exibe uma mensagem de erro.

---

## ▶️ Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Instale a dependência necessária com:

```bash
npm install readline-sync
```

4. Baixe o script Atividade1.js

3. Execute o script com:

```bash
node Atividade1.js
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Entrada válida

```
Digite um numero inteiro..
10
O número 10 é PAR.
```

### Exemplo 2: Entrada inválida

```
Digite um numero inteiro..
abc
Você digitou um número inválido!
```
