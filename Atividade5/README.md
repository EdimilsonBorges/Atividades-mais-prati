# ⚖️ Calculadora de IMC (Índice de Massa Corporal)

Este projeto em Node.js permite calcular o IMC de uma pessoa com base no peso e altura informados pelo terminal, utilizando o pacote `prompt-sync` para entrada de dados.

---

## 🎯 Objetivo

O programa tem como objetivo calcular o Índice de Massa Corporal (IMC) e classificar o resultado com base em faixas definidas pela Organização Mundial da Saúde (OMS).

---

## 🧩 Funcionalidades

- Solicita ao usuário:
  - Peso (em quilogramas)
  - Altura (em metros)
- Verifica se os valores são válidos
- Calcula o IMC
- Exibe a classificação de acordo com o resultado do IMC:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade grau I
  - Obesidade grau II
  - Obesidade grau III (mórbida)

---

## 🔍 Explicação do Código

1. **Entrada de Dados**
   - O usuário informa peso e altura via terminal.
2. **Validação**
   - Garante que os valores informados são números válidos.
3. **Cálculo do IMC**
   - Fórmula: `IMC = peso / (altura²)`
4. **Classificação**
   - IMC < 18,5 → Abaixo do peso
   - 18.5 a 24,9 → Peso normal
   - 25 a 29,9 → Sobrepeso
   - 30 a 34,9 → Obesidade grau I
   - 35 a 39,9 → Obesidade grau II
   - ≥ 40 → Obesidade grau III (mórbida)

---

## ▶️ Como Executar

1. Instale o Node.js: [https://nodejs.org](https://nodejs.org)
2. Instale o pacote `prompt-sync` com:

```bash
npm install prompt-sync
```

3. Baixe arquivo Atividade5.js
4. Execute com:

```bash
node Atividade5.js
```

---

## 💡 Exemplo de Uso

```
Digite seu peso em KG: 70
Digite sua altura em Metros: 1.75
Parabéns você está no peso normal
```
