
# Repetição de Número Inteiro

Este programa em JavaScript solicita ao usuário que digite um número inteiro e, se o número for válido, exibe esse número 10 vezes no console. Caso o número digitado não seja um número inteiro válido, uma mensagem de erro é exibida.

---

## 📋 Funcionalidades

- Lê a entrada do usuário com o módulo `prompt-sync`
- Verifica se o valor fornecido é um **número inteiro**
- Imprime o número **10 vezes** no console, se válido
- Exibe mensagem de erro caso o valor não seja um número inteiro

---

## 🧠 Explicação do Código

```javascript
prompt = require('prompt-sync')();
```
Importa o módulo `prompt-sync` para ler entradas do usuário de forma síncrona via terminal.

---

```javascript
const numero = Number(prompt("Digite um número inteiro: "));
```
Solicita ao usuário que digite um número e converte a entrada de texto para tipo `Number`.

---

```javascript
function eNumeroInteiro(numero){
    return !isNaN(numero) && Number.isInteger(numero);
}
```
Verifica se o valor é um número válido (`!isNaN`) e se é um **número inteiro** com `Number.isInteger()`.

---

```javascript
function reescrever(numero, vezes){
    if(eNumeroInteiro(numero)){
        while (vezes > 0) {
            console.log(numero);
            vezes--;
        }
    }else{
        console.log("O número é inválido!");
    }
}
```
Essa função imprime o número informado no console 10 vezes utilizando um `while`, caso ele seja válido. Se não for, exibe a mensagem: `"O número é inválido!"`.

---

```javascript
reescrever(numero,10);
```
Chama a função para reescrever o número 10 vezes.

---

## ▶️ Como executar
Instale o Node.js: https://nodejs.org

1. Baixe o Arquivo Atividade10.js

2. Execute com:

```bash
node Atividade10.js
```
---
## 💡 Exemplo de Uso

```
Digite um número inteiro: 7
7
7
7
7
7
7
7
7
7
7
```

---

## 🚫 Caso de erro

```
Digite um número inteiro: 3.14
O número é inválido!
```

---

## ✅ Requisitos

- Node.js instalado
- Instalar o pacote `prompt-sync`:
  ```
  npm install prompt-sync
  ```