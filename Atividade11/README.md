
# Soma de 5 Números com Validação de Entrada

Este programa em JavaScript solicita que o usuário digite 5 números e calcula a soma total desses valores. Caso o usuário insira um valor inválido (não numérico), ele será avisado e deverá digitar novamente até que 5 entradas válidas sejam fornecidas.

## Tecnologias utilizadas

- JavaScript (Node.js)
- Biblioteca `prompt-sync` para entrada de dados via terminal

## Funcionamento do Código

### 1. Importação da biblioteca
```js
prompt = require('prompt-sync')();
```
A biblioteca `prompt-sync` é usada para capturar entradas do usuário de forma síncrona no terminal.

### 2. Inicialização da variável de soma total
```js
let total = 0;
```
Essa variável acumulará a soma dos 5 números digitados.

### 3. Laço `for` para ler 5 números
```js
for(let i = 0; i < 5; i++){
  numero = Number(prompt("Digite um número: "));
```
Um laço `for` é usado para garantir que o programa pedirá 5 números. A cada iteração, o programa solicita um número ao usuário.

### 4. Validação da entrada
```js
if(isNaN(numero)){
  console.log("Número inválido, digite um número válido.");
  i--;
  continue;
}
```
Se o usuário digitar algo que não seja um número, o programa exibe uma mensagem de erro, decrementa `i` (para não contar essa entrada inválida) e usa `continue` para repetir a iteração.

### 5. Acúmulo da soma
```js
total += numero;
```
Se o número for válido, ele é somado ao total acumulado.

### 6. Exibição do resultado
```js
console.log(`Soma total dos 5 números digitados é: ${total}`);
```
Depois que os 5 números válidos forem inseridos, o programa imprime a soma total.

## Exemplo de uso

```
Digite um número: 5
Digite um número: 3
Digite um número: a
Número inválido, digite um número válido.
Digite um número: 7
Digite um número: 2
Digite um número: 1
Soma total dos 5 números digitados é: 18
```