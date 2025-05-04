# Tabuada Interativa em JavaScript

Este programa, escrito em JavaScript com `prompt-sync`, exibe a tabuada de um número fornecido pelo usuário. Ele realiza uma validação para garantir que o número esteja entre 1 e 10 e, em seguida, imprime a tabuada desse número de 1 a 10.

## Funcionalidades

- Solicita ao usuário um número inteiro de 1 a 10.
- Valida se o número é válido (entre 1 e 10).
- Exibe a tabuada do número escolhido.
- Exibe uma mensagem de erro caso o número seja inválido.

## Estrutura do Código

### Entrada de Dados

```javascript
const numero = Number(prompt("Digite um número para exibir a tabuada desse número: "));
```

O código utiliza o pacote `prompt-sync` para ler um número digitado pelo usuário no terminal.

### Função `eNumeroValido(numero)`

```javascript
function eNumeroValido(numero){
    return !isNaN(numero) && numero >= 1 && numero <= 10;
}
```

Verifica se o valor digitado é um número válido, ou seja:
- Não é `NaN`
- Está entre 1 e 10 (inclusive)

### Função `exibirTabuada(numero)`

```javascript
function exibirTabuada(numero){
    if(eNumeroValido(numero)){
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }    
    }else{
        console.log("Número inválido, o número deve estar entre 1 e 10");
    }
}
```

Se o número for válido, imprime a tabuada de 1 a 10. Caso contrário, exibe uma mensagem de erro.

### Execução

```javascript
exibirTabuada(numero);
```

Chama a função principal que inicia a lógica da aplicação.

## Exemplo de Uso

```bash
Digite um número para exibir a tabuada desse número: 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
...
3 x 10 = 30
```

## Requisitos

- Node.js
- Biblioteca [`prompt-sync`](https://www.npmjs.com/package/prompt-sync)

Você pode instalar a biblioteca com:

```bash
npm install prompt-sync
```