# Digitae
Projeto de jogo de digitação realizado para o exercício programa (EP) de ACH2026 - Redes de Computadores, turma 04, 2o Semestre de 2020

# Requisitos
- Node.js (v12.x LTS)
- npm (v6.14.x)
- yarn (versão 1.22.x)

## Preparação

Crie um arquivo `.env` na raiz do projeto usando o example.env como base:
```sh
API_PORT=5000
WEBSOCKET_PORT=5001
```

Instalando o yarn

`npm i -g yarn`

Instalando as dependências

```sh
yarn install
cd client && yarn install
```

## Executando
A aplicação cria um servidor http em `localhost:3000`

```sh
yarn dev
```

```sh
# sobe apenas o frontend
yarn client

# sobe apenas o backend
yarn server
```

## Testando

