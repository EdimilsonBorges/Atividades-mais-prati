# ⏳ Contagem Regressiva Assíncrona em JavaScript

Este projeto demonstra uma contagem regressiva em JavaScript usando funções assíncronas e `setTimeout` com `Promise` para criar um atraso de 1 segundo entre as mensagens.

---

## 📋 O que o código faz

O código define uma função assíncrona chamada `contagemRegressiva`, que:

1. Recebe como parâmetro o número de segundos para iniciar a contagem.
2. Utiliza um loop decrescente (`for`) para imprimir o número atual.
3. Aguarda 1 segundo entre cada número usando `await` com `setTimeout`.

---

## 🧠 Conceitos utilizados

- **Funções Assíncronas (`async`)**: permitem o uso de `await` para pausar a execução até que uma `Promise` seja resolvida.
- **`setTimeout` com `Promise`**: usado para criar uma pausa entre as iterações do loop.
- **Loop `for`**: conta de forma decrescente até 1.

---

## ▶️ Como executar

1. Instale o Node.js: [https://nodejs.org](https://nodejs.org)
2. Baixe o arquivo Atividade9.js
3. Execute com:

```bash
node Atividade9.js
```

---

## 💡 Exemplo de Saída

```
Contagem regressiva: 10
Contagem regressiva: 9
...
Contagem regressiva: 1
Tempo esgotado!
```