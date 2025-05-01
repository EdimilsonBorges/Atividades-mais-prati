# 📘 Classificador de Nota do Aluno

Este projeto em Node.js permite classificar a nota de um aluno com base em um valor informado pelo terminal, usando o pacote `prompt-sync` para entrada de dados.

---

## 🎯 Objetivo

O objetivo é classificar a situação do aluno (Aprovado, Recuperação ou Reprovado) com base na nota fornecida pelo usuário, que deve estar entre 0 e 10.

---

## 🧩 Funcionalidades

- Solicita ao usuário uma nota entre 0 e 10.
- Verifica se a nota é válida (número dentro do intervalo).
- Classifica o desempenho do aluno em:
  - **Reprovado**: nota menor que 5
  - **Recuperação**: nota entre 5 e 6.9
  - **Aprovado**: nota 7 ou mais
- Exibe mensagens apropriadas conforme o resultado.

---

## 🔍 Explicação do Código

### Entrada de Dados

```js
const nota = Number(prompt("Digite a nota do aluno de 0 a 10: "));
```

- Usa o pacote `prompt-sync` para receber a nota digitada.
- Converte a string recebida para número com `Number()`.

### Validação da Nota

```js
function eNotaValida(nota){
    return !isNaN(nota) && nota >= 0 && nota <= 10;
}
```

- Garante que a nota esteja entre 0 e 10 e que seja um número válido.

### Classificação

```js
if(nota < 5){
    console.log("Aluno Reprovado");
}else if(nota < 7){
    console.log("Aluno em Recuperação");
}else{
    console.log("Aluno Aprovado");
}
```

---

## ▶️ Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Instale o pacote `prompt-sync` com:

```bash
npm install prompt-sync
```

3. Baixe o arquivo Atividade3.js
4. Execute o programa com:

```bash
node Atividade3.js
```

---

## 💡 Exemplo de Uso

```
Digite a nota do aluno de 0 a 10: 6
Aluno em Recuperação
```