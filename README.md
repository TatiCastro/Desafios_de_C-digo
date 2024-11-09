# 1️⃣ Desafio Classificador de Nível de Herói

## Descrição

Este projeto em Node.js é um classificador de nível para heróis, onde o usuário insere o nome e a quantidade de experiência (XP) do herói, e o programa calcula e exibe o nível do herói com base na experiência fornecida.

O programa faz uso do módulo `readline` para interagir com o usuário diretamente no terminal, pedindo que ele informe o nome e o XP do herói. Em seguida, uma estrutura condicional determina o nível do herói conforme os critérios de XP especificados no desafio.

## Requisitos

O projeto utiliza:
- **Variáveis**: para armazenar o nome e XP do herói.
- **Operadores e Estruturas de decisão**: para calcular o nível do herói baseado no XP.
- **`readline` (módulo do Node.js)**: para capturar a entrada do usuário diretamente pelo terminal, de forma interativa.

## Objetivo

O programa avalia o XP de um herói e, com base em uma estrutura de decisão, classifica-o em um dos níveis a seguir:

- Se XP for menor do que 1.000 = **Ferro**
- Se XP for entre 1.001 e 2.000 = **Bronze**
- Se XP for entre 2.001 e 5.000 = **Prata**
- Se XP for entre 5.001 e 7.000 = **Ouro**
- Se XP for entre 7.001 e 8.000 = **Platina**
- Se XP for entre 8.001 e 9.000 = **Ascendente**
- Se XP for entre 9.001 e 10.000 = **Imortal**
- Se XP for maior ou igual a 10.001 = **Radiante**

## Exemplo de Saída

Ao final, o programa exibe a seguinte mensagem, com os valores substituídos conforme o nome e o nível calculado:

```
O Herói de nome {nome} está no nível de {nivel}
```

## Como Funciona o Módulo `readline`?

O módulo `readline` do Node.js é utilizado para capturar as entradas do usuário no terminal. No desafio, ele:
1. Solicita o **nome do herói**.
2. Em seguida, solicita o **XP do herói**.
3. Processa o XP com uma estrutura de decisão para determinar o nível.
4. Exibe a classificação final no terminal.

Este processo interativo permite que o usuário insira dados diretamente no terminal, facilitando o uso em ambientes onde uma interface gráfica não é necessária.

## Executando o Projeto

Para rodar este projeto, você precisa ter o Node.js instalado. Clone o repositório e execute o arquivo principal:

```
node desafio.js
```

