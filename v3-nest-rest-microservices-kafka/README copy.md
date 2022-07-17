
# Api E-Commerce

Projeto desenvolvido em nodejs, utilizando principios da arquitetura limpa, SOLID, alem de diversas libs para facilitar o desenvolvido.

Este projeto foi divido em diferentes versões, onde em cada versões foi aplicado conseitos e libs diferentes.

## Stack utilizada

**Node.js, Express, Nest.js, Typeorm, PrismaIO, Docker, PostgreSQL e MongoDB** 


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:LuisMarchio03/api-ecommerce.git
```

Entre no diretório do projeto

(Selecione a versão a qual deseja testar)
```bash
  cd api-ecommerce
  cd v2
```

Instale as dependências

```bash
  npm install
  yarn
```

Inicie o servidor

```bash
  npm run dev
  yarn dev
```


## Variáveis de Ambiente 

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

Prisma:

`DATABASE_URL="PROVIDER://USER:PASS@HOST/MYDB"`
`JWT_HASH= MD5HASH `


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

ou

```bash
  yarn test
```

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Autores

- [Luís Gabriel Marchió Batista](https://www.linkedin.com/in/lu%C3%ADs-gabriel-marchi%C3%B3-batista-a0aa64206/)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

