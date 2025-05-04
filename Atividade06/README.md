# 🔺 Verificador de Tipos de Triângulo

Este projeto em Node.js permite que o usuário informe os comprimentos de três lados e determine se eles formam um triângulo. Caso formem, o programa informa se o triângulo é **equilátero**, **isósceles** ou **escaleno**.

---

## 🎯 Objetivo

Determinar a validade de um triângulo com base nas regras matemáticas de formação e classificar o tipo de triângulo conforme os lados informados.

---

## 🧩 Funcionalidades

- Recebe três valores numéricos correspondentes aos lados de um triângulo.
- Verifica se os lados podem realmente formar um triângulo.
- Verifica se os valores são válidos e positivos.
- Classifica o triângulo como:
  - **Equilátero**: todos os lados iguais.
  - **Isósceles**: dois lados iguais.
  - **Escaleno**: todos os lados diferentes.

---

## 🔍 Explicação do Código

1. **Entrada de Dados**
   - O programa solicita ao usuário os três lados de um possível triângulo.

2. **Verificação de Existência de Triângulo**
   - Utiliza a **regra da soma dos lados**:
     - Um triângulo é válido se **cada lado** for **menor que a soma dos outros dois**.

3. **Classificação do Triângulo**
   - **Equilátero**: todos os lados são iguais.
   - **Isósceles**: dois lados iguais.
   - **Escaleno**: todos os lados diferentes.

4. **Saída**
   - Exibe o tipo de triângulo ou informa que os valores não formam um triângulo.

---

## ▶️ Como Executar

1. Instale o Node.js: [https://nodejs.org](https://nodejs.org)
2. Instale o pacote `prompt-sync` com:

```bash
npm install prompt-sync
```

3. Baixe o arquivo Atividade6.js
4. Execute com:

```bash
node Atividade6.js
```

---

## 💡 Exemplo de Uso

```
Digite o valor do lado A: 4
Digite o valor do lado B: 4
Digite o valor do lado C: 4
Triângulo eqüilátero
```