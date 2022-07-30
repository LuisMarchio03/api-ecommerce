import { app } from "@shared/infra/http/app";
import request from "supertest";

import { hash } from "bcrypt";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import createConnection from "@shared/infra/typeorm";

let connection: Connection;
describe("Update Product Controller", () => {
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

  it("[PUT] Should be able to update product", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });
    const { token } = responseToken.body;

    await connection.query(
      `INSERT INTO PRODUCTS(id, name, brand, price, quantities, created_at) 
        values('56a29cc5-4cd6-4ee5-9a8d-7b340ed76d2f', 'Book Test', 'Brand Book Test', '${Number(
          160
        )}', '${Number(16)}', 'now()')
      `
    );

    const response = await request(app)
      .put(`/products/56a29cc5-4cd6-4ee5-9a8d-7b340ed76d2f`)
      .send({
        name: "Book Test UPDATED",
        brand: "Brand Book Test UPDATED",
        price: 120,
        quantities: 12,
        category_id: null,
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(200);
  });
});
