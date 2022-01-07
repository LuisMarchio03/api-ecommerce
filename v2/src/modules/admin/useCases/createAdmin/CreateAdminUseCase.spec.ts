import { AdminRepositoryInMemory } from "./../../repositories/in-memory/AdminRepositoryInMemory";
import { CreateAdminUseCase } from "./CreateAdminUseCase";

let adminRepositoryInMemory: AdminRepositoryInMemory;
let createAdminUseCase: CreateAdminUseCase;

describe("Create Admin", () => {
  beforeEach(() => {
    adminRepositoryInMemory = new AdminRepositoryInMemory();
    createAdminUseCase = new CreateAdminUseCase(adminRepositoryInMemory);
  });

  it("should be able to create new user admin", async () => {
    const userAdmin = await createAdminUseCase.execute({
      name: "Luís Gabriel ADMIN",
      cpf: "0667411729",
      email: "luis_admin@example.com",
      password: "123456",
    });

    expect(userAdmin).toHaveProperty("id");
  });
});
