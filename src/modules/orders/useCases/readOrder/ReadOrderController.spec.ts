import { app } from "@shared/infra/http/app";
import request from "supertest";

import { hash } from "bcrypt";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("Read Order Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at) 
        values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()')
      `
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("[GET] should be able to read order", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });
    const { token } = responseToken.body;

    const password = await hash("test", 8);
    await connection.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at) 
        values('7bda3ec8-c99d-4b3f-9ae5-daf11bf7f938', 'teste', 'test@email.com.br', '${password}', false, 'now()')
      `
    );

    await connection.query(
      `INSERT INTO PRODUCTS(id, name, brand, price, quantities, created_at) 
        values('217c331a-590a-496d-b1a7-762e08f8cd7d', 'Book Test 2', 'Brand Book Test 2', '${Number(
          160
        )}', '${Number(16)}', 'now()')
      `
    );

    await connection.query(
      `INSERT INTO ORDERS(id, user_id, product_id, created_at) 
        values('dc9aad86-c29c-43ae-9bcc-065fb5b23309', '7bda3ec8-c99d-4b3f-9ae5-daf11bf7f938', '217c331a-590a-496d-b1a7-762e08f8cd7d', 'now()')
      `
    );

    const response = await request(app)
      .get(`/orders/dc9aad86-c29c-43ae-9bcc-065fb5b23309`)
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(200);
  });
});
