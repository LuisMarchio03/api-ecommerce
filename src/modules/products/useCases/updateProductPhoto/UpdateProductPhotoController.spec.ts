import { app } from "@shared/infra/http/app";
import request from "supertest";

import { hash } from "bcrypt";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import createConnection from "@shared/infra/typeorm";

let connection: Connection;
describe("Update Photo - Product Controller", () => {
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

  it("[PUT] Should be able to update photo a product", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });
    const { token } = responseToken.body;

    await connection.query(
      `INSERT INTO PRODUCTS(id, name, brand, price, quantities, created_at) 
        values('4cd23f23-fcce-488a-8080-18824d49ccf1', 'Book Test', 'Brand Book Test', '${Number(
          160
        )}', '${Number(16)}', 'now()')
      `
    );

    const response = await request(app)
      .put(`/products/4cd23f23-fcce-488a-8080-18824d49ccf1/upload/photo/`)
      .send({
        photo: "nestjs.png",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(204);
  });
});
