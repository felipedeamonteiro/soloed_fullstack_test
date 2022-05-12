# Desafio Soloed - React + Node

Neste desafio, vamos avaliar seus conhecimentos em React e NodeJs. Queremos que você desenvolva um pequeno ecommerce para a Soloed_store seguindos os padrões do nosso layout e desenvolvendo um json server com os dados disponibilizados no arquivo JSON neste repositório.

# Instruções

- Clone este projeto em seu ambiente
- Desenvolva a aplicação seguindo as instruções abaixo
- Ao finalizar o desafio, suba para um repositório em seu Github e responda o e-mail com o link

## Frontend

Baseado no layout ([Figma](https://www.figma.com/file/sl23D5HJ2d3rgUTlnkHaJN/Soloed_store_teste?node-id=0%3A1)) sua tarefa é construir o frontend do nosso ecommerce seguindo os padrões de design (fontes, espaçamentos, cores e etc..).

#### User Stories

- [ ] O usuário pode ver a lista completa de produtos
- [ ] O usuário pode adicionar um produto ao carrinho
- [ ] O usuário pode acessar a lista de produtos adicionados ao carrinho de compras
- [ ] O usuário pode alterar a quantidade de produtos no carrinho
- [ ] O usuário pode remover produtos do carrinho
- [ ] O usuário pode ver o valor total de produtos adicionados ao carrinho

#### Pré-requisitos

- Construir a aplicação utilizando React.
- Utilizar solução para gerenciamento de estado (Ex. Redux, Context API).
- Comprometimento com o design das páginas

#### Diferenciais

- Utilizar CSS in JS
- Utilizar Typescript
- Testes automatizados

## Backend

Utilizando o arquivo JSON disponibilizado neste repositório, sua tarefa é construir uma API que será consultada pelo frontend.

#### API

A API deve conter um método para consulta da listagem de produtos disponibilizadas em stock.json via HTTP Request.

#### Pré-requisitos

- Construir a API utilizando NodeJs

#### Diferenciais

- Utilizar Typescript
- Utilizar Docker Containers
- Testes automatizados

# Soloed\_ Store

- Utilize este espaço para nos explicar sobre o projeto e dar instruções para rodar a aplicação em nosso ambiente.

# Instruções para rodar projeto

## Backend

### - Especificações e tecnologias utilizadas

Este projeto foi construído usando `Nodejs` com `Typescript`.

Aqui, a versão do `node` é `12.16.3` e o gerenciador de pacotes é o `yarn` na versão `1.22.5`.

O Banco de dados usado é `Postgres` com `Typeorm` como ORM (object-relational mapping). Além disso, o banco de dados está rodando em `docker` com uma imagem do postgres.

Para testar a API e adicionar os produtos no banco de dados, foi utilizado o [`Insomnia`](https://insomnia.rest/) e [`DBeaver - v:7.2.1`](https://dbeaver.io/) como ferramenta de admistração do banco de dados.

A arquitetura do projeto é baseada em DDD (Domain Driven Design).

### - Como rodar o projeto

#### Docker

Primeiro de tudo, é necessário instalar o docker na máquina e baixar a imagem do postgres. Para instalar o docker eu sugiro seguir as instruções indicadas neste [link](https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2#c7e37c6a26584d33b20cf332f2bdb31d).

Depois de ter instalado o docker, precisamos criar o container com o banco de dados com a imagem correta. [Aqui](https://hub.docker.com/_/postgres) você poderá ver a documentação para baixar a imagem mais atualizada do Postgres, mas eu passo aqui embaixo um comando para criar o container e baixar a imagem. É importante seguir corretamente o `password` e as `ports` da configuração do projeto, assim como elas estão aqui:

```
docker run --name soloed_test -e POSTGRES_PASSWORD=docker -p 5440:5432 -d postgres
```

Depois de criar o container e fazer o dowload da imagem, rode o comando abaixo para verificar se está tudo ok:

```
docker ps
```

#### DBeaver

Para visualizar o banco de dados com o Dbeaver, abra-o e siga os comandos:

- New database connection
- Postgres

Uma janela irá abrir com a tab `Main`. Lá deve ser colocado:

- Host: localhost
- Port: 5440
- Database: soloed_test
- Username: postgres
- Password: docker

Na tab `PostgresQL`:

- Show all database: `check the box`

Depois clique com o botão direito na conecção que surgiu na janela esquerda. Lá vá em `Create database` e dê o nome de `soloed_test` e deixe o resto da configuração do jeito que está (lembrando que é bom deixar o UTF8 como padrão).

#### Project

Depois de baixar o código do repositório (e deixar o docker rodando), vá para a pasta do backend e rode `yarn` para que todas as dependências sejam instaladas.

Agora é necessário criar as tabelas no banco de dados:

```
yarn typeorm migration:run
```

E para finalizar, rode:

```
yarn dev:server
```

Uma mensagem desse jeito deve aparecer no terminal:

```
🎨️ Server started on port 3334!
```

If so, enjoy the application!

### - Testando a API

Aqui não vou ensinar como usar o Insomia, porque existem diversos tutoriais ensinando. Mas eu gosto [deste aqui](https://www.youtube.com/watch?v=3tB0uDliS6Y). Está em português.

### - Endpoints disponíveis

Os endpoints aqui são mostrados em ambiente de desenvolvimento.

#### Criar Produtos

OBS: `Lembrando que eu criei este endpoint para que os produtos do arquivo stock.json sejam adicionados na mão por aqui. No front não é possível adicionar`

- Method: `POST`

- Endpoint:

```
http://localhost:3334/products
```

- Body: `JSON`:

```
{
  TYPES:
  name: string;
  short_description: string;
  image: string;
  price: number;

  EXAMPLE
	"name": "JBuds Air Wireless",
  "short_description": "JLab JBuds Air são os verdadeiros fones de ouvido.",
  "image": "https://soloed.s3.us-east-1.amazonaws.com/soloed/dev_challenge/imgs/jbuds-air-wireless.jpeg",
  "price": 249
}
```

E então o `status 200` deve aparecer com os dados do produto armazenado no banco de dados:

```
RESPONSE:
{
  "name": "JBuds Air Wireless",
  "short_description": "JLab JBuds Air são os verdadeiros fones de ouvido.",
  "image": "https://soloed.s3.us-east-1.amazonaws.com/soloed/dev_challenge/imgs/jbuds-air-wireless.jpeg",
  "price": 249,
  "id": xxxxxxxxxxxxxxxxxxxxxxxxx
}
```

#### Listar Produtos

- Method: `GET`

- Endpoint:

```
http://localhost:3334/products
```

- Body: none:

E então `status 200` deve aparecer com os produtos adicionados no banco:

```
RESPONSE:
[
   {
    "id": xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
    "name": "Apple Watch Series 4 GPS",
    "short_description": "Caixa de 44 mm ou 40 mm Tela Retina Sempre Ativa.",
    "image": "https://soloed.s3.us-east-1.amazonaws.com/soloed/dev_challenge/imgs/apple-watch.jpg",
    "price": 399
  },
  {
    "id": xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
    "name": "JBL Speaker",
    "short_description": "A JBL GO 2 é uma caixa de som com Bluetooth.",
    "image": "https://soloed.s3.us-east-1.amazonaws.com/soloed/dev_challenge/imgs/jbl-speaker.jpg",
    "price": 299
  },
]
```

## Frontend

## - Especificações e tecnologias utilizadas

Este projeto foi construído utilizando `React` com `Typescript`.

Aqui, a versão do `node` é `12.16.3` e o gerenciador de pacotes é o `yarn` na versão `1.22.5`. Para rodar o projeto eles precisam ser baixados. [Yarn](https://classic.yarnpkg.com/lang/en/) e eu recomendo instalar o Node via [NVM](https://github.com/nvm-sh/nvm). Todas as instruções estão nos links para instalá-los.

## - Como rodar o projeto

Depois de baixar o código do repositório, vá para a pasta do frontend e rode `yarn` para instalar todas as dependências.

Depois é só rodar:

```
yarn start
```

## - Buscando informações para rodar o front de maneira correta

Há duas maneiras de fazer a aplicação funcionar:

- Utilizando o [`Json.Server`](https://github.com/typicode/json-server) que é uma biblioteca que simula uma API. E aqui eu configurei ela.
- Utilizando o backend da aplicação como um todo, mas precisa adicionar os produtos no banco de dados antes de rodar a aplicação.

### Usando o Json Server

Na raiz do projeto frontend rode o comando:

```
json-server stock.json -p 3333 -w
```

ou se o comando json-server não for reconhecido e sua máquina tenha o npx instalado:

```
npx json-server stock.json -p 3333 -w
```

Dessa maneira o API simulada já deve estar rodando. Para que o front se conecte com ela, vá em `src/services/api.ts` e troque a `baseURL` para:

```
baseURL: 'http://localhost:3333'
```

Pronto, dessa maneira o projeto estará rodando já com os produtos sendo mostrados em tela.

### Usando a API do Backend

Com o backend rodando já (Docker, server e itens já criados no banco), para que o front se conecte com ela, vá em `src/services/api.ts` e troque a `baseURL` para:

```
baseURL: 'http://localhost:3334'
```

Pronto, dessa maneira o projeto estará rodando já com os produtos sendo mostrados em tela.
