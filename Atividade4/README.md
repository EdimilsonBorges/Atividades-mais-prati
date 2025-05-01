# 🍓 Menu de Seleção de Frutas

Este programa em Node.js exibe um menu com três opções de frutas (maçã, pêra e morango) e permite ao usuário escolher qual delas ele mais gosta.

---

## 🎯 Objetivo

Permitir ao usuário interagir com um menu simples no terminal e selecionar sua fruta favorita entre as opções apresentadas.

---

## 🧩 Funcionalidades

- Exibe um menu de frutas.
- Recebe a escolha do usuário.
- Retorna uma mensagem personalizada com base na seleção.
- Valida se a opção é válida.

---

## 🔍 Explicação do Código

### `exibirMenu()`
Exibe o menu com as três opções de frutas formatadas no terminal.

### `selecionarOpcao(opcao)`
Função que recebe a opção digitada e retorna a fruta correspondente:
- `"1"` → Maçã
- `"2"` → Pêra
- `"3"` → Morango
- Qualquer outro valor → Opção inválida

### Fluxo do Programa
1. O menu é exibido.
2. O usuário digita o número da fruta que prefere.
3. O programa exibe uma mensagem com base na escolha.

---

## ▶️ Como Executar

1. Tenha o [Node.js](https://nodejs.org/) instalado.
2. Instale o pacote `prompt-sync`:

```bash
npm install prompt-sync
```

3. Baixe o arquivo, Atividade4.js
4. Execute com:

```bash
node Atividade4.js
```

---

## 💡 Exemplo de Uso

```
----------------------
| 1- MAÇÃ             |
| 2- PÊRA             |
| 3- MORANGO          |
----------------------
Escolha a opção da fruta que você mais gosta: 2
Você gosta mais de PÊRA
```