# 🔢 Ordenador de Dois Valores com Validação Numérica

Este programa em JavaScript solicita dois valores do usuário, verifica se são números ou letras e os exibe em ordem crescente — desde que sejam diferentes.

---

## 📋 Descrição do Código

O código executa as seguintes etapas:

1. Solicita dois valores usando `prompt-sync`.
2. Valida se ambos os valores são números ou letras.
3. Exibe-os em ordem crescente.
4. Se forem iguais, exibe uma mensagem informando que não podem ser iguais.

---

## ✅ O que o código garante

- **Ordem correta**: se valores forem diferentes e numéricos, eles serão ordenados.
- **Erros amigáveis**: valores inválidos ou iguais são tratados com mensagens específicas.

---

## ▶️ Como Executar

1. Instale o Node.js: [https://nodejs.org](https://nodejs.org)
2. Instale o pacote `prompt-sync` (se necessário):

```bash
npm install prompt-sync
```

3. Baixe o arquivo Atividade8.js
4. Execute com Node.js:

```bash
node Atividade8.js
```

---

## 💡 Exemplo de Execução

```
Digite o primeiro valor: 10
Digite o segundo valor: 2
Ordem crescente: 2, 10
```