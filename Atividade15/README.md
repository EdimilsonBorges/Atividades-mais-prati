
# 🔢 Sequência de Fibonacci

Este projeto implementa uma função simples que imprime os primeiros `n` números da **sequência de Fibonacci**, utilizando JavaScript.

---

## 🧠 O que é a sequência de Fibonacci?

A sequência de Fibonacci é uma série de números onde cada número é a soma dos dois anteriores. A sequência começa normalmente com 0 e 1:

```
1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

---

## ⚙️ Funcionalidade do código

A função `imprimirFibonacci(quantidade)` recebe como parâmetro a quantidade de números da sequência que devem ser impressos.

### 🔍 Detalhamento do funcionamento:

- **Variáveis principais:**
  - `primeiroNumero`: armazena o número anterior.
  - `numeroAtual`: armazena o número atual.
  - `resultado`: calcula a soma dos dois anteriores.

- **Loop de execução:**
  - Executa `quantidade` vezes.
  - A cada iteração, calcula o próximo número da sequência e o imprime no console.

### 📝 Exemplo de execução:

```javascript
imprimirFibonacci(10);
```

#### 💡 Saída esperada no console:

```
1
1
2
3
5
8
13
21
34
55
```

> Observação: Esta versão do código começa a sequência a partir do segundo termo (1), não exibindo o zero inicial.

---

## ▶️ Como usar

1. Baixe o arquivo Atividade15.js
2. Execute com Node.js:

```bash
node Atividade15.js
```