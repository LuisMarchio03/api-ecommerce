import { app } from "@shared/infra/http/app";
import request from "supertest";

import { hash } from "bcrypt";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import createConnection from "@shared/infra/typeorm";

let connection: Connection;
describe("Delete Category Controller", () => {
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

  it("[DELETE] Should be able to delete category", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });

    const { token } = responseToken.body;

    await connection.query(
      `INSERT INTO CATEGORIES(id, name, description, created_at) 
        values('51c20b6e-e7f0-42fd-a0d5-7d61e76319b8', 'Ficção Test', 'Description Ficção Test', 'now()')
      `
    );

    const response = await request(app)
      .delete(`/categories/51c20b6e-e7f0-42fd-a0d5-7d61e76319b8`)
      .send()
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(200);
  });
});
