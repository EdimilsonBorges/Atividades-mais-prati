# Classificador de Faixa Etária

Este programa em Node.js solicita a idade de uma pessoa, verifica se a entrada é válida e informa a qual faixa etária ela pertence: **criança**, **adolescente**, **adulto** ou **idoso**.

---

## 🧩 Funcionalidades

- Solicita a idade da pessoa via terminal.
- Valida se o valor inserido é um número positivo.
- Classifica a faixa etária com base na idade informada.
- Exibe mensagens apropriadas no terminal.

---

### 📥 Entrada da Idade

```js
const idade = Number(readline.question("Digite a idade de uma pessoa:\n"));
```

- Usa o pacote `readline-sync` para capturar a entrada do terminal.
- Converte a entrada para número usando `Number()`.

### ✅ Validação da Idade

```js
function eNumeroPositivo(idade) {
    return !isNaN(idade) && idade >= 0;
}
```

- Verifica se o valor é um número válido (`!isNaN`) e maior ou igual a zero.

### 🔁 Classificação Etária

```js
if(idade < 13){
    console.log("A pessoa é uma criança.");
}else if(idade < 18){
    console.log("A pessoa é um adolescente.");
}else if(idade < 65){
    console.log("A pessoa é um adulto.");
}else{
    console.log("A pessoa é um idoso.");
}
```

- Classifica com base nos intervalos:
  - Menor que 13: Criança
  - 13 a 17: Adolescente
  - 18 a 64: Adulto
  - 65 ou mais: Idoso

---

## ▶️ Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Instale a dependência necessária com:

```bash
npm install readline-sync
```

3. Baixe a Atividade2.js
4. Execute o script com:

```bash
node Atividade2.js
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Entrada válida

```
Digite a idade de uma pessoa:
15
A pessoa é um adolescente.
```

### Exemplo 2: Entrada inválida

```
Digite a idade de uma pessoa:
abc
Idade inválida
```
