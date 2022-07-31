# 🚀 API E-commerce

## About - API E-commerce

- **NodeJS** + **Typescript** + **TypeORM** + **Tests - Jest | Supertest** + **SOLID**

- This API was created for an E-commerce, to sell info products (portfolio).

## 📋 Business Rules and Requirements

### Create Categories

**RF**

- Deve ser possível criar uma nova categoria

**RN**

- Não deve ser possível cadastrar uma categoria já existente.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

### Read Categories

**RF**

- Deve ser possível listar todas as categorias
- Deve ser possível lista uma categoria por ID

**RN**

- O usuário não precisar estar logado no sistema.

### Delete Categories

**RF**

- Deve ser possível deletar as categorias por ID

**RN**

- Não deve ser possível deletar uma categoria inexistente.
- O usuário responsável pela exclusão deve ser um usuário administrador.

### Create Products

**RF**

- Deve ser possível criar um novo produto

**RN**

- Não deve ser possível cadastrar um produto já existente.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

### Read Products

**RF**

- Deve ser possível listar todos os produtos
- Deve ser possível lista um produto por ID

**RN**

- O usuário não precisar estar logado no sistema.

### Update Products

**RF**

- Deve ser possível atualizar um produto por ID

**RN**

- Não deve ser possível atualizar um produto inexistente.
- O usuário responsável pela atualização deve ser um usuário administrador.

### Delete Products

**RF**

- Deve ser possível deletar um produto por ID

**RN**

- Não deve ser possível deletar um produto inexistente.
- O usuário responsável pela exclusão deve ser um usuário administrador.

### Create Orders

**RF**

- Deve ser possível criar um novo pedido

**RN**

- A cada compra realizada, devera ser feito um pedido diferente.
- A criação de um pedido, será feita internamente pela API.

### Read Orders

**RF**

- Deve ser possível listar todos os pedidos por userID.
- Deve ser possível lista um pedido userID.

**RN**

- O usuário não precisar estar logado no sistema.
- O usuário só verão os próprios pedidos.

### Payments

**RF**

- Deve ser possível criar um novo checkout session.

**RN**

- O usuário precisa estar logado no sistema.

### Recuperar Senha

**RF**

- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**

- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas

## 💻 Project Installation

**1.** Run a git clone

```
git clone git@github.com:LuisMarchio03/api-ecommerce.git
```

**2.** Access the project

```
cd  api-ecommerce
```

**3.** install the dependencies

```
yarn
ou
npm i
```

**4.** run the application

**it is necessary to run docker**

```
sudo docker-compose up
```

**it is necessary to create an .env based on the .env.example**

**it is necessary to create an ormconfig.json based on the ormconfig.example.json**

```
yarn dev
ou
npm run dev
```

**Automatically an ADMIN user will be created when running an application in development environment**

```
{
    "email": "admin@rentx.com.br",
    "password": "admin"
}
```

## Insomnia

## 🧪 Tests

**Unitary tests + Integration Tests - Jest | Supertest**

- Run all tests

```
yarn test
ou
npm run test
```

## 👨‍💻 Developed by

[**LuisMarchio03**](https://github.com/LuisMarchio03) - **GitHub**

[**Luís Gabriel Marchió Batista**](https://www.linkedin.com/in/lu%C3%ADs-gabriel-marchi%C3%B3-batista-a0aa64206/) - **Linkedin**
