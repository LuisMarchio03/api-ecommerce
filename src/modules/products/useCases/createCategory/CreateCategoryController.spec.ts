import { app } from "@shared/infra/http/app";
import request from "supertest";

describe("Create Category Controller", () => {
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/categories").send({
      name: "Category test 01",
      description: "Description - Category test 01",
    });

    expect(response.status).toBe(200);
  });

  it("Should not be able to create an existing user", async () => {
    await request(app).post("/categories").send({
      name: "Category test 01",
      description: "Description - Category test 01",
    });

    const response = await request(app).post("/categories").send({
      name: "Category test 01",
      description: "Description - Category test 01",
    });

    expect(response.status).toBe(400);
  });
});
