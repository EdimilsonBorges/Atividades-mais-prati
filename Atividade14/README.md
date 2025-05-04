
# 📘 Cálculo de Fatorial

Este projeto é um script simples em Node.js que solicita ao usuário um número inteiro não-negativo e calcula seu **fatorial**. O fatorial de um número `n` (denotado por `n!`) é o produto de todos os inteiros positivos de `1` até `n`.

---

## 🧠 Funcionalidades

- ✅ Captura a entrada do usuário via terminal.
- ✅ Verifica se o número informado é válido (não-negativo e numérico).
- ✅ Calcula o fatorial com uma lógica própria usando laço `for`.
- ✅ Retorna mensagens personalizadas com o resultado ou com erro de entrada.

---

## 📦 Requisitos

- [Node.js](https://nodejs.org) instalado.
- Instalar o pacote `prompt-sync`:

```bash
npm install prompt-sync
```

---

## ▶️ Como executar

1. Baixe o arquivo Atividade14.js
2. No terminal, execute:

```bash
node Atividade14.js
```

3. Digite um número inteiro não-negativo quando solicitado.

---

## 💻 Exemplo de uso

```
Digite um número para calcular o fatorial: 4
O fatorial de 4 é 24!!!
```

---

## 🔍 Explicação do código

### 1. Entrada do usuário
- Usa `prompt-sync` para ler o número digitado no terminal.

### 2. Validação
- A função `eNumeroValido(numero)` retorna `true` se o número for maior ou igual a zero e for um valor numérico.

### 3. Cálculo do fatorial
- A função `calcularFatorial(numero)`:
  - Retorna `1` diretamente para `0` ou `1`.
  - Para outros números, calcula o fatorial com uma abordagem diferente:
    - Usa uma variável `fatorial` iniciada em `0`.
    - No primeiro passo, realiza a multiplicação dos dois maiores fatores.
    - Em seguida, multiplica sucessivamente pelos valores decrescentes.

### 4. Saída
- Exibe o resultado formatado no terminal, como `O fatorial de 5 é 120!!!`.
