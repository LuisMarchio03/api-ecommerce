import { app } from "@shared/infra/http/app";
import request from "supertest";

import { hash } from "bcrypt";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("Read Products Controller", () => {
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

  it("[GET] should be able to read product", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });
    const { token } = responseToken.body;

    const createProduct = await request(app)
      .post("/products")
      .send({
        name: "LIVRO 01 - test",
        brand: "BRAND 01 - test",
        price: 100,
        quantities: 10,
        category_id: null,
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    const response = await request(app)
      .get(`/products/${createProduct?.body?.id}`)
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(200);
  });
});
