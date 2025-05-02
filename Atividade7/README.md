# 🍎 Calculadora de Valor de Maçãs

Este projeto em Node.js calcula o valor total da compra de maçãs com base na quantidade comprada, aplicando um desconto progressivo.

---

## 🎯 Objetivo

Determinar o custo total da compra de maçãs, considerando:

- Se forem compradas **menos de 12 maçãs**, cada uma custa **R$ 0,30**.
- Se forem compradas **12 ou mais maçãs**, cada uma custa **R$ 0,25**.

---

## 🧩 Funcionalidades

- Solicita a quantidade de maçãs ao usuário.
- Valida se o número digitado é válido (não negativo e numérico).
- Calcula o valor total da compra aplicando a regra de preço.
- Exibe o valor final da compra formatado.

---

## 🔍 Explicação do Código

1. **Entrada de dados**
   - Usa o `prompt-sync` para solicitar ao usuário o número de maçãs.

2. **Validação**
   - A função `eNumeroValido` verifica se o valor é numérico e maior ou igual a zero.

3. **Cálculo do valor total**
   - A função `calcularValorTotal` soma o preço de cada maçã com base na regra:
     - R$ 0,30 para menos de 12 unidades.
     - R$ 0,25 para 12 ou mais unidades.

4. **Exibição do resultado**
   - A função `imprimirResultado` exibe o valor final da compra com duas casas decimais.

---

## ▶️ Como Executar

1. Instale o Node.js: [https://nodejs.org](https://nodejs.org)
2. Instale o pacote `prompt-sync`:

```bash
npm install prompt-sync
```

3. Baixe arquivo Atividade7.js
4. Execute o script:

```bash
node Atividade7.js
```

---

## 💡 Exemplo de Uso

```
Digite o número de maçãs compradas: 15
15 custou 3.75 reais
```
